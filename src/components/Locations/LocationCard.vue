<template>
  <div class="card text-center">
    <div class="card-header">
      <p class="fs-5 mb-0 fw-bolder">"{{ $store.state.currentLocation.name }}"</p>
      {{ $store.state.currentLocation.address }}
    </div>
      <div id="map" class="w-100" style="height:300px;"></div>
    <div class="card-footer text-muted">
      <button class="border-0 bg-transparent" @click="clickLike">🤍</button>
      {{ liked }}
      <p></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const API_KEY = process.env.VUE_APP_KAKAO_API_KEY
const SERVER_URL = process.env.VUE_APP_SERVER_URL


export default {
  name: 'LocationCard',
  props: {
    currentLoc: Object,
  },
  components: {
  },
  data: function() {
    return {
      locationNow: this.$store.state.currentLocation,
      addr: null,
      liked: null,
      change: this.$store.state.change
    }
  },
  watch: {
    addr: function () {
    setTimeout(()=>{
      this.addr = {lat: this.$store.state.currentLocation.lat,
                   lon: this.$store.state.currentLocation.lon}
      this.getLike()
    }, 200)
    setTimeout(()=> {
      if (window.kakao && window.kakao.maps) {
          this.initMap();
      } else {
          const script = document.createElement('script');
          script.onload = () => kakao.maps.load(this.initMap);
          script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;
          document.head.appendChild(script);
        }
      this.getLike()

    }, 1200)
    }
  },
  mounted() {
    setTimeout(()=> {
      if (window.kakao && window.kakao.maps) {
          this.initMap();
      } else {
          const script = document.createElement('script');
          script.onload = () => kakao.maps.load(this.initMap);
          script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;
          document.head.appendChild(script);
        }
    }, 1200)
  },
  methods: {
    setToken : function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
    initMap() {
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(this.addr.lat,this.addr.lon),
          level: 3
        };

        var map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(this.addr.lat,this.addr.lon); 
        var marker = new kakao.maps.Marker({
              position: markerPosition
        });
        marker.setMap(map);

        var iwContent = `<img src="${this.currentLoc.img_url}" style="max-width: 50%; class="w-100" height: auto;">`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

        var infowindow = new kakao.maps.InfoWindow({
            content : iwContent
        });

        // 마커에 마우스오버 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'mouseover', function() {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          infowindow.open(map, marker);
        });

        // 마커에 마우스아웃 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          infowindow.close();
        });
    },
    getLike() {
      axios({
        method: 'get',
        url: `${SERVER_URL}/movies/${this.currentLoc.id}/like/`,
        headers: this.setToken(),
      })
        .then( res =>{
          console.log(res)
          this.liked = res.data
        })
        .catch( err =>{
          console.log(err)
        })
    },
    clickLike() {
      axios({
        method: 'post',
        url: `${SERVER_URL}/movies/${this.currentLoc.id}/like/`,
        headers: this.setToken(),
      })
        .then( res =>{
          console.log(res)
          this.liked = res.data
        })
        .catch( err =>{
          console.log(err)
        })
    },
  },
  created: function () {
    
    // console.log(this.$store.state)
    setTimeout(()=>{
      this.addr = {lat: this.$store.state.currentLocation.lat,
                   lon: this.$store.state.currentLocation.lon}
      this.getLike()
    }, 200)
    
  }
}

</script>

<style>

</style>