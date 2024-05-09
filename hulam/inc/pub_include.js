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
    document.write(`
    <header>
      <div class="sec_inner">
        <h1 class="h_logo">
          <a href="#"><img src="../resources/images/logo.svg" alt="logo"></a>
        </h1>
        <nav>
          <ul class="gnb">
            <li class="depth_1">
              <button class="is_depth">기능소개<i class="ico_16"></i></button>
              <ul class="depth_2">
                <li><a href="#">사원관리</a></li>
                <li><a href="#">근로계약서<br>무료작성</a></li>
                <li><a href="#">전자계약</a></li>
                <li><a href="#">휴가관리</a></li>
                <li><a href="#">근태관리</a></li>
                <li><a href="#">급여관리</a></li>
                <li><a href="#">휴직·퇴직 관리</a></li>
              </ul>
            </li>
            <li class="depth_1"><a href="#">고객사례</a></li>
            <li class="depth_1"><a href="#">파트너</a></li>
            <li class="depth_1"><a href="#">이용요금</a></li>
            <li class="depth_1"><a href="#">비대면바우처</a></li>
            <li class="depth_1"><a href="#">회사소개</a></li>
            <li class="depth_1">
              <button class="is_depth">서비스 바로가기<i class="ico_16"></i></button>
              <ul class="depth_2 service">
                <li>
                  <a href="#">
                    <div class="tit">휴램에듀<img src="../resources/images/hulamedu_logo.svg" alt="휴램에듀 로고"></div>
                    <p>휴램에듀는 HRD 원격교육훈련기관입니다.</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="tit">휴램프로<img src="../resources/images/hulampro_logo.svg" alt="휴램프로 로고"></div>
                    <p>휴램프로는 노무사용 급여아웃소싱 서비스입니다.</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="h_util">
          <a href="#" class="btn btn_sm"><span>로그인</span></a>
          <a href="#" class="btn btn_sm btn_primary ani_hover"><span>무료로 시작하기</span></a>
        </div>
        <div class="btn_hamburger">
          <span class="left"></span>
          <span></span>
          <span class="right"></span>
        </div>
      </div>
    </header>
    `);
  },
  footer: function () {
    document.write(`
    <footer>
      <div class="sec_inner">
        <div class="f_top">
          <div class="f_logo">
            <p>(주)휴램프로</p>
            <p>대표자 : 이선희</p>
          </div>
          <div class="f_info">
            <ul>
              <li>
                <span>사업자등록번호 : 709-86-00566</span>
                <span>전화 : <a href="tel:1522-6778">1522-6778</a></span>
                <span>팩스 : 02-6944-8456</span>
              </li>
              <li>
                <span>통신판매업 신고번호 : 2022-강원춘천-0382</span>
                <span>이메일 : <a href="mailto:hulam@hulampro.com" class="mailto">hulam@hulampro.com</a></span>
              </li>
              <li>본사 : 강원도 춘천시 남산면 버들1길 130, 복지후생동 4층 더존BI센터</li>
              <li>지사 : 서울시 서초구 사임당로10길 3, 201호(서초동, 원진빌딩)</li>
            </ul>
            <a href="#" class="f_cs btn btn_sm btn_radius"><i class="ico_customcenter white ico_16"></i>고객지원 센터</a>
            <div class="f_sns">
              <a href="#" target="_blank" class="blog">
                <span class="blind">네이버 블로그 바로가기</span>
              </a>
              <a href="#" target="_blank" class="instagram">
                <span class="blind">인스타그램 바로가기</span>
              </a>
              <a href="#" target="_blank" class="facebook">
                <span class="blind">페이스북 바로가기</span>
              </a>
            </div>
          </div>
        </div>
        <div class="f_copy">
          <p>© 2022 HULAM PRO. All Right Reserved.</p>
          <ul>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">서비스이용약관</a></li>
            <li><a href="#">제휴 문의</a></li>
            <li><a href="#">공지 사항</a></li>
          </ul>
        </div>
      </div>
      <div class="btn_srl_top">
        <a href="#none">TOP</a>
      </div>
    </footer>
    `);
  }
}