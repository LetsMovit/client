<template>
  <div class="home">
   <Korea/>
   <Poster/>
   </div>
</template>

<script>
import Korea from '@/components/Home/Korea'
import Poster from '@/components/Home/Poster'

export default {
  name: 'Home',
  components: {
    Korea,
    Poster,
  },  
  
}
</script>
