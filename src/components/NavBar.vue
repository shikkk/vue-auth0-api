<template>
  <div class="nav-container mb-3">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">首页</router-link>
            </li>
          </ul>
          <ul class="navbar-nav d-none d-md-block">
            <li v-if="!$hAuth.isAuthenticated()" class="nav-item">
              <button
                id="qsLoginBtn"
                class="btn btn-primary btn-margin"
                @click.prevent="login"
              >登录</button>
            </li>
            <li><button v-if="$hAuth.isAuthenticated()" class="btn btn-primary btn-block" @click="clickApi">clickApi</button></li>
            <li class="nav-item dropdown" v-if="$hAuth.isAuthenticated()">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="profileDropDown"
                data-toggle="dropdown"
              >
                <img
                  :src="$hAuth.getUserProfile().pictureUrl"
                  alt="User's profile picture"
                  class="nav-user-profile rounded-circle"
                  width="50"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header">{{ $hAuth.getUserProfile().name }}</div>
                <router-link to="/profile" class="dropdown-item dropdown-profile">
                  <font-awesome-icon class="mr-3" icon="user" />简况
                </router-link>
                <a id="qsLogoutBtn" href="#" class="dropdown-item" @click.prevent="logout">
                  <font-awesome-icon class="mr-3" icon="power-off" />退出
                </a>
              </div>
            </li>
          </ul>


        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    login() {
      this.$hAuth.login();
    },
    logout() {
      this.$hAuth.logout();
    },
    clickApi(){
      
        const accessToken = this.$hAuth.getToken()
        this.$http.get("http://localhost:3001/api/external", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(data =>{
          console.log(data)
        })
    }
  },
  mounted(){
    
  }
};
</script>

<style>
#mobileAuthNavBar {
  min-height: 125px;
  justify-content: space-between;
}
.navbar-nav li{
  float: left;
}
</style>
