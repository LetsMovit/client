<template>
  <div class="home">
   <Map/>
   <Poster/>
   </div>
</template>

<script>
import Map from '@/components/Home/Map'
import Poster from '@/components/Home/Poster'

export default {
  name: 'Home',
  components: {
    Map,
    Poster,
  },  
  
}
</script>
