<template>
  <!-- signup box start -->
  <div id="second">
    <div class="myform form ">
      <div class="logo mb-3">
        <div class="col-md-12 text-center">
          <h1 >Signup</h1>
        </div>
      </div>
      <form action="#" name="registration">
        <div class="form-group">
          <label for="exampleInputEmail1">User Name</label>
          <input type="text"  name="username" v-model="credential.username"
          class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" v-model="credential.email"
          class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input type="password" name="password" v-model="credential.password"
          id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Password Confirmation</label>
          <input type="password" name="passwordfirmation" v-model="credential.passwordConfirmation"
          id="passwordConfirmation"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password Again">
        </div>
        <div class="col-md-12 text-center mb-3">
          <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" @click="signup">Get Started For Free</button>
        </div>
        <div class="col-md-12 ">
          <div class="form-group">
              <p class="text-center"><a href="#" @click="change">Already have an account?</a></p>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- signup box end -->
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
      credential: {
        username: null,
        email: null,
        password: null,
        passwordConfirmation: null,
      }
    }
  },
  methods: {
    change: function () {
      this.$emit('change')
    },
    signup: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/signup/`,
        data: this.credential,
      })
        .then(res => {
          console.log(res)
          this.$router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>