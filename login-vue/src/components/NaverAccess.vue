<template>
  <div class="naver-access">
    <p>Naver Login</p>
  </div>
</template>
  

<script>
import axios from 'axios';
import AppHeader from './AppHeader'
import Vue from 'vue';
import EventBus from '../event-bus';

export default {
  name: 'NaverAccess',
  components:{
    AppHeader:AppHeader,
    EventBus:EventBus
  },
   mounted(){
       var param = document.location.href.split("access_token=");
       var token=param[1].split("&state=");
      //  let login=document.querySelector(".go-login")
      //  let logout=document.querySelector(".go-logout")
       axios.post('http://118.67.135.33:80/accounts/social-login/naver/', {
             access_token:token[0],
             code:"",
             id_token:""
           })
             .then(response => {
               //토근값이 유효할때
               if(response.status==200){
                  //파라미터 없애기
                  //location.href="http://localhost:8080/"
                  //history.replaceState({}, null, location.pathname);

                  let token=response.data.access_token
                  //로컬스토리지에 토큰 담기
                  localStorage.setItem("access_token",token)
                  EventBus.$emit('token','false');
                  console.log("이벤트 버스 이후")
                  //다음함수 이동
                  this.getMemberInfo()
                  // axios.get("http://127.0.0.1:8000/accounts/social-login/naver/",config)
                  // .then(res=>{console.log(res)})
                  // .catch(err=>{console.log(err)})
                       
                  
                  //로컬스토리지 토큰값 가져오기
                  let tokens=localStorage.getItem("access_token")
                  let config={
                    headers:{
                      "access-token":tokens
                    }
                  }
               }
             })
             .catch(error => {
               console.log('로컬에 토큰 담기 실패.');
             })
    },
    methods:{
       getMemberInfo(){
          
         //로컬스토리지 토큰값 가져오기
         let token=localStorage.getItem("access_token")
         let config={
           headers:{
             "access-token":token
           }
         }
         console.log(config)
       }
    }
}
//네이버 로그아웃(토큰 수정 후 링크이동으로 하단으로 가면 로그아웃)
//https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=9VC8spd0mJFt32JD7mBE&client_secret=GoGSUwYPCx&access_token=c8ceMEJisO4Se7uGCEYKK1p52L93bHXLnaoETis9YzjfnorlQwEisqemfpKHUq2gY&service_provider=NAVER
</script>