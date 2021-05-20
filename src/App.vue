<template>
  <div id="app" class="container">
    <div id="nav" class="d-flex justify-content-between">
      <h1>LetsMovIt!</h1>
      <div>
        <router-link to="/">Home</router-link> |
        <!-- 로그인 된 상태일때 -->
        <router-link :to="{name: 'Accounts'}">Accounts</router-link> |
        <router-link :to="{name: 'Movies'}">Movies</router-link> |
        <!-- 로그인 안된 상태일때 -->
        <router-link :to="{name: 'Join'}">Join</router-link> |
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
