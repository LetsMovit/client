<template>
  <div id="app" class="container">
    <div id="nav" class="d-flex justify-content-between">
      <h1>LetsMovIt!</h1>
      <div class="row">
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
                <li class="nav-item">
                   <router-link to="/">Home</router-link> |
                </li>
                <li class="nav-item">
                   <router-link :to="{name: 'Movies'}">Movies</router-link> |
                </li>
                <li class="nav-item dropdown">
                  <router-link :to="{name: 'Accounts'}">
                    <p class="dropdown-toggle" id="dropdownMenuButton1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      {{ this.$store.getters.decodedToken.username }}님</p>
                  </router-link>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><router-link :to="{name: 'Profile'}" class="dropdown-item">Profile</router-link></li>
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
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.navbar {
  background: #faf1e6
}

#nav a.router-link-exact-active {
  color: #005792;
}
</style>
