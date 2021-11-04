<template>
  <div class="main-page">
    <!-- Header -->
    <app-header />
    <!-- Main1 -->
    <div class="app-main1">
      <div class="inner">
        <div class="main-top">
          <div class="main-start">
            <p>
                콘텐츠 제작을 쉽게 하세요 :) <br>
                콘텐츠 제작플랫폼 <br>
                영자야
            </p>
            <p>
              번거로운 영상편집 이제 알아서! <br>
              영상자막, 배경음악, 나레이션을 한번에
            </p>
            <router-link to="/editor" class="start-button">바로 시작하기</router-link>
          </div>
          <div class="main-video">
            <video src="#"></video>
            <p class="sub">지금 보고있는 영상은 "영자야"에서 만들어진 영상입니다.</p> 
          </div>
        </div>
      </div>
      <div class="main-text">
          <p>영상만 올려주세요</p>
          <p>
            편집은 "영자야"가 해드립니다! <br>
            다음과 같은 영상 편집에 활용하세요!
          </p>
      </div>
      <ul class="portfolio">
          <li>
            <div></div>
            <p>브이로그</p>
          </li>
          <li>
            <div></div>
            <p>교육영상</p>
          </li>
          <li>
            <div></div>
            <p>행사영상</p>
          </li>
          <li>
            <div></div>
            <p>촬영영상</p>
          </li>
      </ul>
    </div>
    <!-- Main2 -->
    <div class="app-main2">
      <div class="main-bottom1">
        <div class="inner">
            <div class="watermark-video"></div>
            <div class="watermark-text">
                <p>워터마크 FREE :)</p>
                <p>
                  이제 지긋지긋한 워터마크에서 벗어나세요. <br>
                  영자야에서 제공하는 모든 컨텐츠는 워터마크가 없습니다.
                </p>
                <p></p>
            </div>
        </div>   
      </div>
      <div class="main-bottom2">
        <div class="inner">
          <div class="watermark-text">
            <p>설치없이 간편하게!</p>
            <p>
              설치하지 마세요. <br>
              "영자야"에 접속만 하면 끝!  
            </p>
          </div>
          <div class="watermark-video"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'


export default {
  name: 'MainPage',
  components: {
    AppHeader,
  },
    mounted(){

  }
}
</script>

<style scoped>
span{display: block;}

/* main1 */
.main-top {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
}
.main-start {
  width: 40%;
  height: 500px;
  text-align: center;
  background-color: #ccc;
  font-size: 25px;
  font-weight: bold;
  padding: 30px;
}
.main-start p {
  margin-bottom: 10px;
  line-height: 1.8em;
}
.main-start p:nth-child(2) {
  margin-top:50px;
  font-size: 20px;
}
.start-button {
  margin-top: 20%;
  cursor: pointer;
  font-size: 20px;
}
.main-video {
  width: 40%;
}
.main-video video {
  width: 100%;
  height: 450px;
  background-color: #ccc;
}
.sub {
  text-align: center;
  margin-top: 15px;
}
.main-text {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
  border-top: 1px solid #aaa;
  padding: 70px 0 70px 0;
}
.main-text p {
  margin-bottom: 20px;
  line-height: 1.8em;
}
.main-text p:first-child {
  font-size: 25px;
  font-weight: bold;
}
.portfolio {
  display: flex;
  justify-content: space-around; 
  padding-bottom: 100px;
}
.portfolio li div {
  width: 300px;
  height: 300px;
  background-color: #ccc;
  margin-bottom: 20px;
}
.portfolio li p {
  text-align: center;
  line-height: 1.8em;
}

/* main2 */
.inner {
  display: flex;
  justify-content: space-around;
}
span {
  display: block;
}
.app-main2 {
    border-top: 1px solid #aaa;
    margin-bottom: 50px;
    padding-top: 100px;
}
.main-bottom1 {
    margin-bottom: 100px;
}
.main-bottom2 {
    margin-bottom: 100px;
    border-top: 1px solid #aaa;
    padding-top: 100px;
}
.watermark-video {
    width: 55%;
    height: 400px;
    background-color: #ccc;
}
.watermark-text {
    width: 35%;
    height: 400px; 
    line-height: 1.8em;
    text-align: center;
    box-sizing: border-box;
    padding-top: 120px;
}
.watermark-text p:first-child {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
}
</style>