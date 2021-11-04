<template>
  <div class="login">
    <p class="title">로그인하기</p>
    <div class="login-form">
        <ul>
          <li>
            <span class="subject">이메일</span>
            <input ref="email" v-model="email" id="email" type="email" placeholder="">
          </li>
          <li>
            <span class="subject">비밀번호</span>
            <input ref="password" v-model="password" id="password" type="password" placeholder="">
          </li>
        </ul>
    </div>
    <a class="login-btn" @click="submitLogin">로그인</a>
    <div class="login-bottom">
      <div class="social-login">
        <p>소셜 계정으로 간편하게 로그인하세요!</p>
        <ul>
          <li><div id="naver_id_login"><router-link to="/naver-access">네이버</router-link></div></li>
          <li><a href="#">카카오</a></li>
          <li><a href="#">구글</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
   mounted(){
     const naver_id_login = new window.naver_id_login("9VC8spd0mJFt32JD7mBE", "http://localhost:8080/naver-access");
     const state = naver_id_login.getUniqState();
     naver_id_login.setState(state);
     naver_id_login.init_naver_id_login();
   },
  name: 'Login',
  data() {
    return {
      email: [],
      password: [],
      access_token: [],
    }
  },
  methods: {
    submitLogin () {
      if (this.email=="") {
        alert("이메일을 입력해주세요");
        this.$refs.email.focus();
      }
      else if (this.password=="") {
        alert("비밀번호를 입력해주세요");
        this.$refs.password.focus();
      }
      else{
        axios.post('http://118.67.135.33:80/accounts/token/', {
          email: this.email,
          password: this.password
        })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log('요청이 실패하였습니다.');
          })
      }
    },
  },
}
</script>

<style scoped>
  .title {
    text-align: center;
  }
  .login-form {
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }
  .login-form ul li {
    border-bottom: 1px solid #333;
    padding: 10px 0;
    width: 350px;
  }
  .login-form ul li input {
    width: 200px;
    height: 25px;
  }
  .login-btn,
  .social-login ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-btn,
  .social-login p,
  .social-login ul li {
    padding: 10px;
  }
  .login-btn {
    margin: 30px auto;
    border: 1px solid #ccc;
    width: 200px;
    height: 25px;
  }
  
</style>
