<template>
  <div>
    Map
    <div id="map" style="width:500px;height:400px;">
      kakao
    </div>
  </div>
</template>

<script>
const API_KEY = process.env.VUE_APP_KAKAO_API_KEY

export default {
  name: 'Map',
  data: function () {
    return {
      addr: {lat: 37.4862669,
            lon: 126.978755}
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
        this.initMap();
    } else {
        const script = document.createElement('script');
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;
        document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(this.addr.lat,this.addr.lon),
          level: 3
        };

        var map2 = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(this.addr.lat,this.addr.lon); 
        var marker = new kakao.maps.Marker({
              position: markerPosition
        });
        marker.setMap(map2);

    }
  }
}
</script>

<style>

</style>