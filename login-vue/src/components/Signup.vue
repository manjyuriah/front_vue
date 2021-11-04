<template>
  <div class="signup">
      <p class="title">3초 회원가입</p>
      <div class="signup-form">
        <ul>
          <li>
            <span>이름</span>
            <input type="text">
          </li>
          <li>
            <span class="subject">이메일</span>
            <input ref="email" v-model="email" type="text" name="email" placeholder="" id="email">
          </li>
          <li>
            <span class="subject">비밀번호</span>
            <input ref="password1" v-model="password1" type="password" name="password1" placeholder="" id="password1">
          </li>
          <li>
            <span class="subject">비밀번호 확인</span>
            <input ref="password2" v-model="password2" type="password" name="password2" placeholder="" id="password2">
          </li>
          <li>
            <input type="checkbox" name="agree" id="agree">
            <span>영자야 <a href="#">이용약관</a> 및 <a href="#">개인정보 취급방침</a>에 대한 내용을 모두 확인하였으며, 이에 동의합니다.</span> 
          </li>
        </ul>
      </div>
      <a class="signup-btn" @click="submitSignup">무료 회원가입</a>
      <div class="signup-bottom">
        <div class="social-login">
          <p>소셜 계정으로 간편하게 가입하세요!</p>
          <ul>
            <li><a href="#">네이버</a></li>
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
  name: 'Signup',
  data() {
    return {
      email: [],
      password1: [],
      password2: [],
    }
  },
  methods: {
    submitSignup () {
      if (this.email=="") {
        alert("이메일을 입력해주세요");
        this.$refs.email.focus();
      }
      else if (this.password=="" || this.password2=="") {
        alert("비밀번호를 입력해주세요");
        this.$refs.password1.focus();
      }
      else if (this.password1!=this.password2 ) {
        alert('동일한 비밀번호를 입력해주세요')
      }
      else {
        axios
          .post('http://127.0.0.1:8000/accounts/signup/', {
            email: this.email,
            password: this.password1
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('요청이 실패하였습니다.');
        })
      }
    }
  },
}
</script>

<style scoped>
  .title {
    text-align: center;
  }
  .signup-form {
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }
  .signup-form ul li {
    border-bottom: 1px solid #333;
    padding: 10px 0;
    width: 350px;
  }
  .signup-form ul li:nth-child(1) input,
  .signup-form ul li:nth-child(2) input,
  .signup-form ul li:nth-child(3) input,
  .signup-form ul li:nth-child(4) input {
    width: 200px;
    height: 25px;
  }
  .signup-form ul li:last-child {
    border: 0;
  } 
  .signup-btn,
  .social-login ul {
    display: flex;
    justify-content: center;
  }
  .signup-btn,
  .social-login p,
  .social-login ul li {
    padding: 10px;
  }
  .signup-btn {
    margin: 30px auto;
    border: 1px solid #ccc;
    width: 200px;
    height: 25px;
  }
</style>
