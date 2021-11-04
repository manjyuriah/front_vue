<template>
  <div class="app-footer">
    <div class="inner">
      <footer>
      <div class="footer-top">
        <ul class="policy">
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
            <li>저작권 처리방침</li>
        </ul>
        <ul class="social">
            <li><a href="#">인스타</a></li>
            <li><a href="#">유튜브</a></li>
            <li><a href="#">페이스북</a></li>
            <li><a href="#">블로그</a></li>
        </ul>
      </div>
        <ul class="footer-bottom">
            <li>
                <div>(주) 파인드커넥트</div>
                <div>대표 | 박현준</div>
                <div>사업자 등록번호 | 618-86-01352</div>
                <div>통신판매업신고 | 2019-서울성동-01462</div>
                <div style="cursor:pointer; background-color:#ccc"><a>사업자 번호조회</a></div>
            </li>
            <li>
                <div>이메일 | fc@findconnect.co.kr</div>
                <div>주소 | 서울 성동구 상원12길 30 동진아이티타워, 311호</div>
            </li>
            <li>
                <div>ⓒ FINDCONNECT ALL ARIGHTS RESERVED</div>
            </li>
        </ul>
       </footer>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
   
    }
  },
  components: {

  }
};
</script>

<style scoped>
span{display: block;}
 .app-footer{
    border-top: 1px solid #aaa;
 }
 footer{
    margin-top:30px;
    font-size: 14px;
 }
 .footer-top{
    margin-bottom:20px;
    width: 100%;
    height: 70px;
 }
 .policy{
    font-weight: bold;
    font-size: 16px;
    float: left;
 }
 .policy>li{
    display: inline-block;
    margin-right: 50px;
    cursor: pointer;
 }
 .social{
    float: right;
 }
 .social>li{
    width: 60px;
    height: 60px;
    border-radius: 50px;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
 }
.footer-bottom>li>div{
    font-size: 14px;
    margin-right: 30px;
    height: 40px;
    line-height:40px;
    display: inline-block;
}

.social li a {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-indent: -9999px;
}
.social li:nth-child(1) a {
  background: url('../assets/img/social-instagram.png') center no-repeat;
  background-size: cover;
}
.social li:nth-child(2) a {
  background: url('../assets/img/social-youtube.png') center no-repeat;
  background-size: cover;
}
.social li:nth-child(3) a {
  background: url('../assets/img/social-facebook.png') center no-repeat;
  background-size: cover;
}
.social li:nth-child(4) a {
  background: url('../assets/img/social-naver.png') center no-repeat;
  background-size: cover;
}
</style>