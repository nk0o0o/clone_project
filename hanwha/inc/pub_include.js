var include = {
  meta: function () {
    document.write('<meta charset="UTF-8">');
    document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    document.write(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    );
  },
  scripts: function () {
    document.write('<script src="/resources/js/jquery-3.6.0.min.js"></script>');
  },
  style: function () {
    document.write('<script src="/resources/js/jquery-3.6.0.min.js"></script>');
  },
  header: function () {
    document.write(
      `<header>
      <h1 class="h_logo"><a href="#" title="한화에어로스페이스 메인으로 이동"></a></h1>
      <!-- gnb -->
      <nav class="gnb">
        <span class="gnb_pointer"></span>
        <ul class="depth_1">
          <li>
            <a href="#">WHO WE ARE</a>
            <ul class="depth_2">
              <li><a href="#">기업소개</a></li>
              <li><a href="#">연혁</a></li>
              <li><a href="#">사업장 소개</a></li>
            </ul>
            <!-- //depth_2 -->
          </li>
          <li>
            <a href="#">WHY WE EXIST</a>
          </li>
          <li>
            <a href="#">WHAT WE DO</a>
            <!-- depth_2 -->
            <ul class="depth_2">
              <li><a href="#">Virtual Showroom</a></li>
              <li><a href="#">Sustainable Technologies</a></li>
              <li><a href="#">Products & Services</a></li>
              <li><a href="#">Discover</a></li>
              <li><a href="#">Protect</a></li>
            </ul>
            <!-- //depth_2 -->
          </li>
          <li>
            <a href="#">IR</a>
            <!-- depth_2 -->
            <ul class="depth_2">
              <li><a href="#">실적발표</a></li>
              <li><a href="#">IR 일정</a></li>
              <li><a href="#">재무정보</a></li>
              <li><a href="#">주식정보</a></li>
              <li><a href="#">공시정보</a></li>
              <li><a href="#">전자공고</a></li>
            </ul>
            <!-- // depth_2 -->
          </li>
          <li>
            <a href="#">MEDIA</a>
            <!-- depth_2 -->            
            <ul class="depth_2">
              <li><a href="#">뉴스룸</a></li>
              <li><a href="#">라이브러리</a></li>
              <li><a href="#">공지사항</a></li>
            </ul>
            <!-- // depth_2 -->
          </li>
          <li>
            <a href="#">ESG</a>
            <!-- depth_2 -->            
            <ul class="depth_2">
              <li><a href="#">지속가능경영</a></li>
              <li><a href="#">윤리준법경영</a></li>
              <li><a href="#">환경안전보건경영</a></li>
              <li><a href="#">상생경영</a></li>
              <li><a href="#">사회공헌</a></li>
              <li><a href="#">기업지배구조</a></li>
            </ul>
            <!-- // depth_2 -->            
          </li>
          <li>
            <a href="#">CAREERS</a>
            <!-- depth_2 -->
            <ul class="depth_2">
              <li><a href="#">인재상</a></li>
              <li><a href="#">채용안내</a></li>
            </ul>
            <!-- // depth_2 -->
          </li>
        </ul>
      </nav>
      <!-- h_util -->
      <div class="h_util">
        <div class="h_language">
          <button type="button" class="ico_global"><span class="blind">언어선택버튼</span></button>
          <div class="lang">
            <a href="#">KOR</a>
            <a href="#">ENG</a>
          </div>
        </div>
        <div class="h_link"><a href="#">방문신청</a></div>
        <div class="h_allmenu"><button type="button" class="btn_hamburger"><span class="blind">전체메뉴 보기</span><span></span><span></span><span></span></button></div>
      </div>
      <!-- h_util -->
    </header>`
    );
  },
  quickBtn: function () {
    document.write('<div class="quick_btn">');
    document.write(
      '<button type="button" class="quick_btn_top" onclick="go_top();">맨 위로 바로가기</button>'
    );
    document.write("</div>");
  },
  footer: function () {
    document.write(`<footer>
    <!-- f_top -->
    <div class="f_top">
      <div class="inner">
        <!-- f_menu -->
        <div class="f_menu">
          <ul class="depth_1">
            <li>
              <a href="#">WHO WE ARE</a>
              <ul class="depth_2">
                <li><a href="#">WHY WE EXIST</a></li>
                <li><a href="#">기업소개</a></li>
                <li><a href="#">연혁</a></li>
                <li><a href="#">사업장 소개</a></li>
              </ul>
            </li>
            <li>
              <a href="#">WHAT WE DO</a>
              <ul class="depth_2">
                <li><a href="#">Virtual Showroom</a></li>
                <li><a href="#">Sustainable Technologies</a></li>
                <li><a href="#">Products & Services</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Protect</a></li>
              </ul>
            </li>
            <li>
              <a href="#">IR</a>
              <ul class="depth_2">
                <li><a href="#">실적발표</a></li>
                <li><a href="#">IR 일정</a></li>
                <li><a href="#">재무정보</a></li>
                <li><a href="#">주식정보</a></li>
                <li><a href="#">공시정보</a></li>
                <li><a href="#">전자공고</a></li>
              </ul>
            </li>
            <li>
              <a href="#">MEDIA</a>
              <ul class="depth_2">
                <li><a href="#">뉴스룸</a></li>
                <li><a href="#">라이브러리</a></li>
                <li><a href="#">공지사항</a></li>
              </ul>
            </li>
            <li>
              <a href="#">ESG</a>
              <ul class="depth_2">
                <li><a href="#">지속가능경영</a></li>
                <li><a href="#">윤리준법경영</a></li>
                <li><a href="#">환경안전보건경영</a></li>
                <li><a href="#">상생경영</a></li>
                <li><a href="#">사회공헌</a></li>
                <li><a href="#">기업지배구조</a></li>
              </ul>
            </li>
            <li>
              <a href="#">CAREERS</a>
              <ul class="depth_2">
                <li><a href="#">인재상</a></li>
                <li><a href="#">채용안내</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- // f_menu -->
        <!-- f_family -->
        <div class="f_family">
          <!-- select_box -->
          <div class="select_box">
            <div class="select_box_value"><span>관련 기관 전체보기</span></div>
            <div class="select_box_list">
              <ul>
                <li><span>대한민국 국방부</span></li>
                <li><span>합동참모본부</span></li>
                <li><span>병무청</span></li>
                <li><span>국방과학연구소</span></li>
                <li><span>국방기술품질원</span></li>
                <li><span>한국방위산업진흥회</span></li>
                <li><span>한국국방연구원</span></li>
              </ul>
            </div>
          </div>
          <!-- // select_box -->
          <!-- select_box -->
          <div class="select_box">
            <div class="select_box_value"><span>계열사 전체보기</span></div>
            <div class="select_box_list list-group">
              <ul>
                <li><span>한화그룹</span></li>
                <li class="list-group_opt">
                  <div class="list_tit">우주항공·오션·방산</div>
                  <ul>
                    <li><span>한화오션</span></li>
                    <li><span>한화시스템</span></li>
                    <li><span>한화비젼</span></li>
                    <li><span>한화정밀기계</span></li>
                  </ul>
                </li>
                <li class="list-group_opt">
                  <div class="list_tit">에너지·소재</div>
                  <ul>
                    <li><span>(주)한화</span></li>
                    <li><span>한화솔루션</span></li>
                    <li><span>한화에너지</span></li>
                    <li><span>한화임팩트</span></li>
                    <li><span>한화파워시스템</span></li>
                    <li><span>한화엔진</span></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- // select_box -->
        </div>
        <!-- // f_family -->
      </div>
      <!-- // inner -->
    </div>
    <!-- // f_top -->
    <!-- f_btm -->
    <div class="f_btm">
      <div class="inner">
        <!-- f_company -->
        <div class="f_company">
          <ul class="f_privacy">
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">사이트맵</a></li>
            <li><a href="#">방문신청</a></li>
            <li><a href="#">전자조달시스템</a></li>
          </ul>
          <!-- 모바일 display -->
          <button class="select_box_value"><span>관련 기관 전체보기</span></button>
          <!-- 모바일 display -->
          <div class="f_copy">86, Cheonggyecheon-ro, Jung-gu, Seoul Copyright &copy;2023 Hanwha Aerospace All Rights Reserved.</div>
        </div>
        <!-- // f_company -->
        <!-- f_sns -->
        <div class="f_sns">
          <a href="#" class="sns facebook" title="한화에어로스페이스 페이스북 이동"></a>
          <a href="#" class="sns youtube" title="한화에어로스페이스 유튜브 이동"></a>
        </div>
        <!-- //f_sns -->
      </div>
      <!-- //inner -->
    </div>
    <!-- // f_btm -->
  </footer>`);


    



  }
}