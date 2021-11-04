<template>
  <div class="app-header">
    <div class="inner">
      <!-- Header -->
      <h1><router-link to="/">파인드커넥트</router-link></h1>
      <div class="link-box">
        <button class="go-login" @click="loginOpen = true" v-if="login">로그인하기</button>
        <button class="go-logout" v-else>로그아웃하기</button>
        <button class="go-signup" @click="signupOpen = true">3초 회원가입</button>
      </div>
    </div>

    <!-- Modal -->
    <!-- Login -->
    <div id="goLogin" class="black-bg" v-if="loginOpen == true" @click="signupOpen = false, loginOpen = false">
      <div class="white-bg">
        <div class="close-box">
          <button class="btn-close" @click="loginOpen = false">X</button>
        </div>
        <login />
        <ul class="login-bottom">
          <li><span>비밀번호를 잃어버렸어요.<a>비밀번호 찾기</a></span></li>
          <li><span>아직 회원이 아니신가요?<a @click="signupOpen = true, loginOpen = false">3초 회원가입하기</a></span></li>
        </ul>
      </div>  
    </div>
    <!-- Signup -->
    <div id="goLogin" class="black-bg" v-if="signupOpen == true" @click="signupOpen = false, loginOpen = false">
      <div class="white-bg">
        <div class="close-box">
          <button class="btn-close" @click="signupOpen = false">X</button>
        </div>
        <signup />
        <span>이미 회원이신가요?<a @click="loginOpen = true, signupOpen = false">로그인하기</a></span>
      </div>
    </div>
  </div>
  
</template>

<script>
import Login from './Login'
import Signup from './Signup'
import Vue from 'vue';
import EventBus from '../event-bus';

export default {
  name: 'AppHeader',
  data() {
    return {
      loginOpen : false,
      signupOpen : false,
      login:true
    }
  },
      mounted(){
      let login=document.querySelector(".go-login");
      let logout=document.querySelector(".go-logout");
      // EventBus.$emit('token', this.login);
      // console.log(this.login)
      EventBus.$on('token', function(log){
         console.log(log)
          //이벤트 이름과 파라미터로 보낸 값을 받는 방법.
		    });
    },
  methods:{
    // logout(){
    //     location.href="https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=9VC8spd0mJFt32JD7mBE&client_secret=GoGSUwYPCx&access_token="+response.data.access_token+"&service_provider=NAVER";
    //   }
  },
  components: {
    Login,
    Signup
  }
};
</script>

<style scoped>
.app-header {
  overflow: hidden;
}
.app-header h1 {
  float: left;
  font-size: 24px;
  text-align: center;
  padding: 50px 0;
}
.app-header .link-box {
  float: right;
  padding: 50px 0;
}
.login-bottom li {
  justify-content: center;
}
.black-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
}
.close-box {
  overflow: hidden;
}
.close-box .btn-close {
  float: right;
}
.white-bg {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}
.white-bg span,
.white-bg li {
  display: flex;
}
.white-bg span {
  justify-content: center;
}
.white-bg li {
  padding: 5px;
}
.white-bg span a {
  margin-left: 5px;
}
.link-box button{
float: left;
}
</style>