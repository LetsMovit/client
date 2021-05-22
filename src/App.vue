<template>
  <div id="app" class="container">
    <div id="nav" class="d-flex justify-content-between">
      <h1>LetsMovIt!</h1>
        <!-- nav start -->
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- 로그인 했을때 -->
            <div v-if="this.$store.getters.decodedToken" class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item mx-3">
                   <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item mx-3">
                   <router-link :to="{name: 'Movies'}">Movies</router-link>
                </li>
                <li class="nav-item dropdown mx-3">
                  <router-link class="dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" to="/">
                    {{ this.$store.getters.decodedToken.username }}님</router-link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><router-link class="dropdown-item" :to="{name: 'Profile'}">Profile</router-link></li>
                      <li><router-link to='#' class="dropdown-item" @click.native="deleteJWT">Logout</router-link></li>
                    </ul>
                </li>
              </ul>
            </div>
            <!-- 로그인 했을 때 끝 -->
            <!-- 로그인 안 했을때 -->
            <div v-else class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/">Home</router-link> |
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'Join'}">Login</router-link> |
                </li>
              </ul>
            </div>
            <!-- 로그인 안 했을때 끝 -->
          </div>
        </nav>
        <!-- nav end -->
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    deleteJWT: function () {
      this.$store.dispatch('deleteJWT')
      this.$router.push({ name: 'Join' })
    }
  }
}
</script>


<style>
#app {
  font-family: 'Do Hyeon', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#nav {
  padding: 30px;
}

.navbar {
  background: white;
}

#nav a.router-link-exact-active {
  color: black;
}

.nav-item.mx-3 > a {
  color: black;
}
</style>
