(function () {
  var wedding = {
    dateISO: "2026-10-24T12:30:00+09:00",
    year: "2026",
    month: "10",
    day: "24",
    weekday: "Saturday",
    dateLine: "2026년 10월 24일 토요일 오후 12시 30분",
    time: "오후 12시 30분",
    venue: "상암 월드컵컨벤션",
    address: "서울특별시 마포구 월드컵로 240, 2층",
    addressDetail: "성산동, 서울월드컵경기장 서측",
    mapQuery:
      "상암 월드컵컨벤션 서울특별시 마포구 월드컵로 240 서울월드컵경기장 서측",
    mapUrl:
      "https://map.naver.com/p/search/%EC%83%81%EC%95%94%20%EC%9B%94%EB%93%9C%EC%BB%B5%EC%BB%A8%EB%B2%A4%EC%85%98",
    mapLat: "37.5683021",
    mapLng: "126.8972477",
    image: "assets/cover.png",
    imageAlt: "웨딩 반지와 부케가 놓인 청첩장 이미지",
    groom: "김민준",
    bride: "박서연",
    groomFirst: "민준",
    brideFirst: "서연",
    parents: [
      { parents: "김영호 · 이정미", relation: "장남", name: "김민준" },
      { parents: "박성훈 · 최은아", relation: "장녀", name: "박서연" },
    ],
    contacts: [
      { role: "신랑", name: "김민준", phone: "010-1234-5678" },
      { role: "신부", name: "박서연", phone: "010-9876-5432" },
    ],
    accounts: [
      {
        side: "신랑측",
        value: "국민은행 123456-00-123456 김민준",
      },
      {
        side: "신부측",
        value: "신한은행 110-123-456789 박서연",
      },
    ],
    transport: [
      {
        label: "지하철",
        value:
          "6호선 월드컵경기장역 하차 후 서울월드컵경기장 서측 방향으로 이동해 주세요.",
      },
      {
        label: "주차",
        value:
          "서울월드컵경기장 주차장 이용 후 월드컵컨벤션 현장 안내를 확인해 주세요.",
      },
    ],
  };

  var drafts = [
    {
      id: "draft-classic",
      nav: "A Classic",
      className: "theme-classic",
      layout: "scroll",
      scrollMode: "classic",
      greeting: [
        "서로의 계절이 되어",
        "함께 걸어가려 합니다.",
        "같은 방향을 바라보며 천천히 쌓아온 마음으로",
        "평생을 약속하려 합니다.",
        "귀한 걸음으로 축복해 주시면",
        "더없는 기쁨으로 간직하겠습니다.",
      ],
    },
    {
      id: "draft-modern",
      nav: "B Modern",
      className: "theme-modern",
      layout: "scroll",
      scrollMode: "modern",
      greeting: [
        "한 걸음씩 쌓아온 마음으로",
        "오늘을 약속합니다.",
        "가장 가까운 분들과 조용하고 따뜻한 시간을",
        "함께 나누고 싶습니다.",
        "저희의 시작을 함께 밝혀 주세요.",
      ],
    },
    {
      id: "draft-photo",
      nav: "C Photo",
      className: "theme-photo",
      layout: "scroll",
      scrollMode: "photo",
      greeting: [
        "오래 기억될 하루에",
        "당신을 초대합니다.",
        "서로에게 가장 다정한 사람이 되어",
        "새로운 장면을 시작합니다.",
        "함께 웃고 축하해 주시는 마음을",
        "오래 간직하겠습니다.",
      ],
    },
    {
      id: "draft-heritage",
      nav: "D Heritage",
      className: "theme-heritage",
      layout: "card",
      greeting: [
        "두 집안의 귀한 인연으로",
        "새로운 가정을 이룹니다.",
        "오래된 예식의 단정함과 오늘의 따뜻함을 담아",
        "소중한 분들을 모십니다.",
        "함께해 주시는 마음을 깊이 새기겠습니다.",
      ],
    },
    {
      id: "draft-botanical",
      nav: "E Botanical",
      className: "theme-botanical",
      layout: "card",
      greeting: [
        "작은 잎들이 모여 숲이 되듯",
        "우리도 함께 자라갑니다.",
        "가볍고 싱그러운 분위기로",
        "저희의 예식에 초대합니다.",
        "편안한 마음으로 오셔서 축복해 주세요.",
      ],
    },
    {
      id: "draft-moment",
      nav: "F Moment",
      className: "theme-moment",
      layout: "fromtoday",
      fromtodayMode: "moment",
      greeting: [
        "두 사람이 꽃과 나무처럼 걸어와서",
        "서로의 모든 것이 되기 위해",
        "오랜 기다림 끝에 혼례식을 치르는 날",
        "세상은 더욱 아름다워라",
      ],
    },
    {
      id: "draft-minimal",
      nav: "G Minimal",
      className: "theme-minimal",
      layout: "fromtoday",
      fromtodayMode: "minimal",
      greeting: [
        "가장 단정한 마음으로",
        "서로의 하루가 되려 합니다.",
        "오랜 시간 곁을 지켜주신 분들을",
        "저희의 시작에 모십니다.",
      ],
    },
  ];

  var feedback = document.querySelector("[data-feedback]");
  var lightbox = document.querySelector("[data-lightbox-view]");
  var lightboxImage = document.querySelector("[data-lightbox-image]");
  var lightboxClose = document.querySelector("[data-lightbox-close]");
  var showcase = document.querySelector("[data-showcase]");
  var draftNav = document.querySelector("[data-draft-nav]");

  function renderCover(draft) {
    return (
      '<section class="card cover-card" aria-label="청첩장 표지">' +
      '<div class="wedding-date"><span>' +
      wedding.year +
      '</span><i></i><span>' +
      wedding.month +
      '</span><i></i><span>' +
      wedding.day +
      "</span></div>" +
      '<div class="wedding-day">' +
      wedding.weekday +
      "</div>" +
      '<div class="cover-image"><img src="' +
      wedding.image +
      '" alt="' +
      wedding.imageAlt +
      '" /></div>' +
      '<p class="subtitle">Save the date for the wedding of</p>' +
      '<h1 class="names"><span>' +
      wedding.groom +
      '</span><i></i><span>' +
      wedding.bride +
      "</span></h1>" +
      '<p class="info-line">' +
      wedding.dateLine +
      "</p>" +
      '<p class="info-line">' +
      wedding.venue +
      "</p>" +
      "</section>"
    );
  }

  function renderInvitationCard(draft) {
    return (
      '<section class="card invitation-card" aria-label="모시는 글">' +
      '<h2 class="english">Invitation</h2>' +
      '<div class="break"></div>' +
      draft.greeting
        .map(function (line) {
          return '<p class="content-line">' + line + "</p>";
        })
        .join("") +
      '<div class="break"></div>' +
      '<div class="family-lines">' +
      wedding.parents
        .map(function (item) {
          return (
            '<p><strong>' +
            item.parents +
            "</strong><span>의 " +
            item.relation +
            "</span> <strong>" +
            item.name +
            "</strong></p>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="contact-actions">' +
      wedding.contacts
        .map(function (person) {
          return (
            '<a href="tel:' +
            person.phone +
            '" aria-label="' +
            person.role +
            '에게 전화하기">' +
            person.role +
            " 전화</a>" +
            '<a href="sms:' +
            person.phone +
            '" aria-label="' +
            person.role +
            '에게 문자 보내기">' +
            person.role +
            " 문자</a>"
          );
        })
        .join("") +
      "</div>" +
      "</section>"
    );
  }

  function renderCalendarCells() {
    var cells = [
      "",
      "",
      "",
      "",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ];

    return cells
      .map(function (cell) {
        return cell === "24"
          ? '<div class="wedding-day-cell"><span>24</span><b></b></div>'
          : "<div><span>" + cell + "</span></div>";
      })
      .join("");
  }

  function renderCalendarCard() {
    return (
      '<section class="card calendar-card" aria-label="예식 날짜">' +
      '<h2 class="english">The Wedding Day</h2>' +
      '<p class="date-summary">' +
      wedding.dateLine +
      "</p>" +
      '<div class="calendar-wrapper">' +
      '<div class="head holiday"><span>Su</span></div>' +
      '<div class="head"><span>Mo</span></div>' +
      '<div class="head"><span>Tu</span></div>' +
      '<div class="head"><span>We</span></div>' +
      '<div class="head"><span>Th</span></div>' +
      '<div class="head"><span>Fr</span></div>' +
      '<div class="head"><span>Sa</span></div>' +
      renderCalendarCells() +
      "</div>" +
      '<div class="countdown-wrapper">' +
      '<div class="countdown-units"><span>DAY</span><span>HOUR</span><span>MIN</span><span>SEC</span></div>' +
      '<div class="countdown-values" data-countdown-values>' +
      '<span>0</span><i>:</i><span>0</span><i>:</i><span>0</span><i>:</i><span>0</span>' +
      "</div>" +
      '<p class="countdown-message" data-countdown>소중한 날을 기다리고 있습니다.</p>' +
      "</div>" +
      "</section>"
    );
  }

  function renderGalleryCard() {
    return (
      '<section class="card gallery-card" aria-label="갤러리">' +
      '<h2 class="english">Gallery</h2>' +
      '<div class="gallery-carousel">' +
      '<button class="gallery-main" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="대표 사진 크게 보기"></button>' +
      '<div class="gallery-dots" aria-hidden="true"><span></span><span></span><span></span></div>' +
      "</div>" +
      '<button type="button" class="action-button" data-lightbox="' +
      wedding.image +
      '">사진 전체보기</button>' +
      "</section>"
    );
  }

  function getMapLinks() {
    var query = encodeURIComponent(wedding.mapQuery || wedding.address);
    var venue = encodeURIComponent(wedding.venue);
    var naver = wedding.mapUrl || "https://map.naver.com/p/search/" + query;
    var hasCoords = wedding.mapLat && wedding.mapLng;

    return {
      embed: naver,
      kakao: hasCoords
        ? "https://map.kakao.com/link/to/" +
          venue +
          "," +
          wedding.mapLat +
          "," +
          wedding.mapLng
        : "https://map.kakao.com/link/search/" + query,
      naver: naver,
      tmap: hasCoords
        ? "tmap://route?goalx=" +
          wedding.mapLng +
          "&goaly=" +
          wedding.mapLat +
          "&goalname=" +
          venue
        : "tmap://search?name=" + venue,
    };
  }

  function renderMapButton() {
    var links = getMapLinks();

    return (
      '<a class="location-map-button" href="' +
      links.naver +
      '" target="_blank" rel="noreferrer"><span aria-hidden="true">&#8982;</span>지도에서 보기</a>'
    );
  }

  function renderTransportList(className) {
    return (
      '<dl class="' +
      className +
      '">' +
      wedding.transport
        .map(function (item) {
          return (
            "<div><dt>" +
            item.label +
            "</dt><dd>" +
            item.value +
            "</dd></div>"
          );
        })
        .join("") +
      "</dl>"
    );
  }

  function renderMapCard() {
    return (
      '<section class="card card--wide location-card" aria-label="오시는 길">' +
      '<h2 class="english">Location</h2>' +
      '<div class="address-block">' +
      "<strong>" +
      wedding.venue +
      "</strong>" +
      "<span>" +
      wedding.address +
      "</span>" +
      '<span class="address-detail">' +
      wedding.addressDetail +
      "</span>" +
      "</div>" +
      renderMapButton() +
      renderTransportList("transport-list") +
      "</section>"
    );
  }

  function renderInfoCard() {
    return (
      '<section class="card information-card" aria-label="식사 안내">' +
      '<h2 class="english">Information</h2>' +
      '<div class="info-card">' +
      '<div class="label">식사 안내</div>' +
      '<p>식사시간: 오후 12시 30분부터</p>' +
      "<p>장소: 웨딩홀 연회장</p>" +
      "</div>" +
      '<div class="info-card">' +
      '<div class="label">참석 안내</div>' +
      "<p>예식 20분 전까지 도착하시면 여유롭게 안내받으실 수 있습니다.</p>" +
      "</div>" +
      "</section>"
    );
  }

  function renderAccountCard() {
    return (
      '<section class="card information-card" aria-label="마음 전하기">' +
      '<h2 class="english">With Heart</h2>' +
      '<div class="info-card">' +
      '<div class="label">마음 전하기</div>' +
      "<p>참석이 어려운 분들을 위해 계좌번호를 기재하였습니다.</p>" +
      "</div>" +
      '<div class="account-list">' +
      wedding.accounts
        .map(function (account) {
          return (
            '<div class="account-line">' +
            "<div><span>" +
            account.side +
            "</span><strong>" +
            account.value +
            "</strong></div>" +
            '<button type="button" data-copy="' +
            account.value +
            '">복사하기</button>' +
            "</div>"
          );
        })
        .join("") +
      "</div>" +
      "</section>"
    );
  }

  function renderShareFooter(draft) {
    return (
      '<footer class="share-footer">' +
      '<p>' +
      wedding.groomFirst +
      " &amp; " +
      wedding.brideFirst +
      "</p>" +
      '<button type="button" class="action-button" data-share>청첩장 공유하기</button>' +
      "</footer>"
    );
  }

  function renderScrollCover(draft) {
    return (
      '<section class="scroll-cover scroll-cover--' +
      draft.scrollMode +
      '" aria-label="청첩장 표지">' +
      '<img src="' +
      wedding.image +
      '" alt="' +
      wedding.imageAlt +
      '" />' +
      '<div class="scroll-cover__shade" aria-hidden="true"></div>' +
      '<div class="scroll-cover__content">' +
      '<p class="scroll-eyebrow">' +
      (draft.scrollMode === "photo" ? "October Issue" : "Wedding Invitation") +
      "</p>" +
      '<h1><span>' +
      wedding.groomFirst +
      '</span><i>&amp;</i><span>' +
      wedding.brideFirst +
      "</span></h1>" +
      '<p class="scroll-date">' +
      wedding.year +
      ". " +
      wedding.month +
      ". " +
      wedding.day +
      ". SAT " +
      wedding.time +
      "</p>" +
      "</div>" +
      "</section>"
    );
  }

  function renderScrollIntro(draft) {
    return (
      '<section class="scroll-section scroll-intro" aria-label="초대합니다">' +
      '<p class="scroll-eyebrow">Invitation</p>' +
      '<h2>' +
      draft.greeting.slice(0, 2).join("<br />") +
      "</h2>" +
      '<div class="scroll-copy">' +
      draft.greeting
        .slice(2)
        .map(function (line) {
          return "<p>" + line + "</p>";
        })
        .join("") +
      "</div>" +
      '<div class="scroll-family">' +
      wedding.parents
        .map(function (item) {
          return (
            "<p><strong>" +
            item.parents +
            "</strong><span>의 " +
            item.relation +
            "</span> <strong>" +
            item.name +
            "</strong></p>"
          );
        })
        .join("") +
      "</div>" +
      "</section>"
    );
  }

  function renderScrollDetails() {
    return (
      '<section class="scroll-section scroll-details" aria-label="예식 정보">' +
      '<p class="scroll-eyebrow">Wedding Day</p>' +
      "<h2>" +
      wedding.dateLine +
      "</h2>" +
      '<div class="calendar-wrapper">' +
      '<div class="head holiday"><span>Su</span></div>' +
      '<div class="head"><span>Mo</span></div>' +
      '<div class="head"><span>Tu</span></div>' +
      '<div class="head"><span>We</span></div>' +
      '<div class="head"><span>Th</span></div>' +
      '<div class="head"><span>Fr</span></div>' +
      '<div class="head"><span>Sa</span></div>' +
      renderCalendarCells() +
      "</div>" +
      '<div class="countdown-wrapper">' +
      '<div class="countdown-units"><span>DAY</span><span>HOUR</span><span>MIN</span><span>SEC</span></div>' +
      '<div class="countdown-values" data-countdown-values>' +
      '<span>0</span><i>:</i><span>0</span><i>:</i><span>0</span><i>:</i><span>0</span>' +
      "</div>" +
      '<p class="countdown-message" data-countdown>소중한 날을 기다리고 있습니다.</p>' +
      "</div>" +
      "</section>"
    );
  }

  function renderScrollGallery() {
    return (
      '<section class="scroll-section scroll-gallery" aria-label="갤러리">' +
      '<p class="scroll-eyebrow">Gallery</p>' +
      "<h2>우리의 순간</h2>" +
      '<div class="scroll-gallery-grid">' +
      '<button class="scroll-gallery-item scroll-gallery-item--large" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="갤러리 사진 1 크게 보기"></button>' +
      '<button class="scroll-gallery-item scroll-gallery-item--top" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="갤러리 사진 2 크게 보기"></button>' +
      '<button class="scroll-gallery-item scroll-gallery-item--bottom" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="갤러리 사진 3 크게 보기"></button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderScrollLocation() {
    return (
      '<section class="scroll-section scroll-location" aria-label="오시는 길">' +
      '<p class="scroll-eyebrow">Location</p>' +
      "<h2>" +
      wedding.venue +
      "</h2>" +
      "<p>" +
      wedding.address +
      "</p>" +
      '<p class="address-detail">' +
      wedding.addressDetail +
      "</p>" +
      renderMapButton() +
      renderTransportList("transport-list scroll-transport") +
      "</section>"
    );
  }

  function renderScrollContactAccount() {
    return (
      '<section class="scroll-section scroll-contact" aria-label="연락 및 계좌">' +
      '<p class="scroll-eyebrow">Contact</p>' +
      "<h2>마음 전하실 곳</h2>" +
      '<div class="contact-actions">' +
      wedding.contacts
        .map(function (person) {
          return (
            '<a href="tel:' +
            person.phone +
            '">' +
            person.role +
            " 전화</a>" +
            '<a href="sms:' +
            person.phone +
            '">' +
            person.role +
            " 문자</a>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="account-list">' +
      wedding.accounts
        .map(function (account) {
          return (
            '<div class="account-line">' +
            "<div><span>" +
            account.side +
            "</span><strong>" +
            account.value +
            "</strong></div>" +
            '<button type="button" data-copy="' +
            account.value +
            '">복사하기</button>' +
            "</div>"
          );
        })
        .join("") +
      "</div>" +
      '<button type="button" class="action-button" data-share>청첩장 공유하기</button>' +
      "</section>"
    );
  }

  function renderScrollInvitation(draft) {
    return (
      '<article class="draft-page scroll-page ' +
      draft.className +
      " scroll-page--" +
      draft.scrollMode +
      '" data-draft-id="' +
      draft.id +
      '" data-wedding-date="' +
      wedding.dateISO +
      '" aria-label="' +
      draft.nav +
      '">' +
      '<div class="scroll-view">' +
      renderScrollCover(draft) +
      renderScrollIntro(draft) +
      renderScrollDetails() +
      renderScrollGallery() +
      renderScrollLocation() +
      renderScrollContactAccount() +
      "</div>" +
      "</article>"
    );
  }

  function renderFromTodayIntro(draft) {
    if (draft.fromtodayMode === "minimal") {
      return (
        '<section class="ft-intro ft-intro--minimal" aria-label="청첩장 표지">' +
        '<p class="ft-brand">THE WEDDING OF</p>' +
        '<div class="ft-name-date">' +
        "<span>" +
        wedding.groomFirst +
        "</span><i></i><strong>" +
        wedding.month +
        "." +
        wedding.day +
        "</strong><i></i><span>" +
        wedding.brideFirst +
        "</span>" +
        "</div>" +
        '<div class="ft-photo-wrap"><div class="ft-photo-inner"><img src="' +
        wedding.image +
        '" alt="' +
        wedding.imageAlt +
        '" /></div></div>' +
        '<p class="ft-date-place">' +
        wedding.dateLine +
        "<br />" +
        wedding.venue +
        "</p>" +
        "</section>"
      );
    }

    return (
      '<section class="ft-intro ft-intro--moment" aria-label="청첩장 표지">' +
      '<div class="ft-date-top"><strong>' +
      wedding.year.slice(2) +
      " | " +
      wedding.month +
      " | " +
      wedding.day +
      "</strong><span>SATURDAY</span></div>" +
      '<h1 class="ft-moment-names"><span>' +
      wedding.groomFirst +
      '</span><i></i><span>' +
      wedding.brideFirst +
      "</span></h1>" +
      '<div class="ft-arch-photo"><img src="' +
      wedding.image +
      '" alt="' +
      wedding.imageAlt +
      '" /></div>' +
      "</section>"
    );
  }

  function renderFromTodayGreeting(draft) {
    return (
      '<section class="ft-section ft-greeting" aria-label="모시는 글">' +
      '<p class="ft-section-label">Invitation</p>' +
      "<h2>소중한 분들을<br />초대합니다</h2>" +
      '<div class="ft-copy">' +
      draft.greeting
        .map(function (line) {
          return "<p>" + line + "</p>";
        })
        .join("") +
      "</div>" +
      '<div class="ft-family">' +
      wedding.parents
        .map(function (item) {
          return (
            "<p><strong>" +
            item.parents +
            "</strong><span>의 " +
            item.relation +
            "</span> <strong>" +
            item.name +
            "</strong></p>"
          );
        })
        .join("") +
      "</div>" +
      "</section>"
    );
  }

  function renderFromTodayCalendar() {
    return (
      '<section class="ft-section ft-calendar" aria-label="예식 날짜">' +
      '<p class="ft-section-label">Wedding Day</p>' +
      "<h2>" +
      wedding.year +
      ". " +
      wedding.month +
      ". " +
      wedding.day +
      "</h2>" +
      '<p class="ft-date-sub">' +
      wedding.dateLine +
      "</p>" +
      '<div class="calendar-wrapper ft-calendar-grid">' +
      '<div class="head holiday"><span>Su</span></div>' +
      '<div class="head"><span>Mo</span></div>' +
      '<div class="head"><span>Tu</span></div>' +
      '<div class="head"><span>We</span></div>' +
      '<div class="head"><span>Th</span></div>' +
      '<div class="head"><span>Fr</span></div>' +
      '<div class="head"><span>Sa</span></div>' +
      renderCalendarCells() +
      "</div>" +
      '<div class="countdown-wrapper ft-countdown">' +
      '<div class="countdown-units"><span>DAY</span><span>HOUR</span><span>MIN</span><span>SEC</span></div>' +
      '<div class="countdown-values" data-countdown-values>' +
      '<span>0</span><i>:</i><span>0</span><i>:</i><span>0</span><i>:</i><span>0</span>' +
      "</div>" +
      '<p class="countdown-message" data-countdown>소중한 날을 기다리고 있습니다.</p>' +
      "</div>" +
      "</section>"
    );
  }

  function renderFromTodayGallery() {
    return (
      '<section class="ft-section ft-gallery" aria-label="갤러리">' +
      '<p class="ft-section-label">Gallery</p>' +
      "<h2>우리의 순간</h2>" +
      '<div class="ft-gallery-grid">' +
      '<button class="ft-gallery-item ft-gallery-item--one" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="갤러리 사진 1 크게 보기"></button>' +
      '<button class="ft-gallery-item ft-gallery-item--two" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="갤러리 사진 2 크게 보기"></button>' +
      '<button class="ft-gallery-item ft-gallery-item--three" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="갤러리 사진 3 크게 보기"></button>' +
      '<button class="ft-gallery-item ft-gallery-item--four" type="button" data-lightbox="' +
      wedding.image +
      '" aria-label="갤러리 사진 4 크게 보기"></button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderFromTodayLocation() {
    return (
      '<section class="ft-section ft-location" aria-label="오시는 길">' +
      '<p class="ft-section-label">Location</p>' +
      "<h2>" +
      wedding.venue +
      "</h2>" +
      "<p>" +
      wedding.address +
      "</p>" +
      '<p class="address-detail">' +
      wedding.addressDetail +
      "</p>" +
      renderMapButton() +
      renderTransportList("transport-list ft-transport") +
      "</section>"
    );
  }

  function renderFromTodayContact() {
    return (
      '<section class="ft-section ft-contact" aria-label="연락 및 계좌">' +
      '<p class="ft-section-label">Contact</p>' +
      "<h2>마음 전하실 곳</h2>" +
      '<div class="contact-actions">' +
      wedding.contacts
        .map(function (person) {
          return (
            '<a href="tel:' +
            person.phone +
            '">' +
            person.role +
            " 전화</a>" +
            '<a href="sms:' +
            person.phone +
            '">' +
            person.role +
            " 문자</a>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="account-list">' +
      wedding.accounts
        .map(function (account) {
          return (
            '<div class="account-line">' +
            "<div><span>" +
            account.side +
            "</span><strong>" +
            account.value +
            "</strong></div>" +
            '<button type="button" data-copy="' +
            account.value +
            '">복사하기</button>' +
            "</div>"
          );
        })
        .join("") +
      "</div>" +
      '<button type="button" class="action-button" data-share>청첩장 공유하기</button>' +
      "</section>"
    );
  }

  function renderFromTodayInvitation(draft) {
    return (
      '<article class="draft-page fromtoday-page ' +
      draft.className +
      " fromtoday-page--" +
      draft.fromtodayMode +
      '" data-draft-id="' +
      draft.id +
      '" data-wedding-date="' +
      wedding.dateISO +
      '" aria-label="' +
      draft.nav +
      '">' +
      '<div class="ft-view">' +
      renderFromTodayIntro(draft) +
      renderFromTodayGreeting(draft) +
      renderFromTodayCalendar() +
      renderFromTodayGallery() +
      renderFromTodayLocation() +
      renderFromTodayContact() +
      "</div>" +
      "</article>"
    );
  }

  function renderCardInvitation(draft) {
    return (
      '<article class="draft-page card-page ' +
      draft.className +
      '" data-draft-id="' +
      draft.id +
      '" data-wedding-date="' +
      wedding.dateISO +
      '" aria-label="' +
      draft.nav +
      '">' +
      '<div class="card-view">' +
      '<div class="card-group">' +
      renderCover(draft) +
      renderInvitationCard(draft) +
      "</div>" +
      '<div class="card-group">' +
      renderCalendarCard() +
      renderGalleryCard() +
      "</div>" +
      '<div class="card-group">' +
      renderMapCard() +
      "</div>" +
      '<div class="card-group">' +
      renderInfoCard() +
      renderAccountCard() +
      "</div>" +
      renderShareFooter(draft) +
      "</div>" +
      "</article>"
    );
  }

  function renderInvitation(draft) {
    if (draft.layout === "card") return renderCardInvitation(draft);
    if (draft.layout === "fromtoday") return renderFromTodayInvitation(draft);

    return renderScrollInvitation(draft);
  }

  function renderDrafts(event) {
    if (!showcase || !draftNav) return;
    var activeId = window.location.hash.replace("#", "");
    var activeDraft =
      drafts.find(function (draft) {
        return draft.id === activeId;
      }) || drafts[0];

    drafts.forEach(function (draft) {
      document.body.classList.remove(draft.className);
    });
    document.body.classList.add(activeDraft.className);

    draftNav.innerHTML = drafts
      .map(function (draft) {
        var isActive = draft.id === activeDraft.id;

        return (
          '<a href="#' +
          draft.id +
          '"' +
          (isActive ? ' aria-current="page"' : "") +
          ">" +
          draft.nav +
          "</a>"
        );
      })
      .join("");

    showcase.innerHTML = renderInvitation(activeDraft);
    updateCountdowns();

    if ((activeId || (event && event.type === "hashchange")) && window.scrollTo) {
      var scrollToShowcase = function () {
        var activePage = showcase.querySelector(".draft-page");
        var scrollTarget = activePage || showcase;
        var navOffset =
          draftNav &&
          window.matchMedia &&
          window.matchMedia("(min-width: 601px)").matches
            ? draftNav.offsetHeight
            : 0;
        var top =
          scrollTarget.getBoundingClientRect().top +
          window.pageYOffset -
          navOffset;

        window.scrollTo({
          top: top,
          behavior: event && event.type === "hashchange" ? "smooth" : "auto",
        });
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(scrollToShowcase);
      } else {
        scrollToShowcase();
      }

      if (!event) {
        window.setTimeout(scrollToShowcase, 80);
      }
    }
  }

  function writeStatus(message) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("is-visible", Boolean(message));
    window.clearTimeout(writeStatus.timer);
    writeStatus.timer = window.setTimeout(function () {
      feedback.classList.remove("is-visible");
      feedback.textContent = "";
    }, 2400);
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      writeStatus("복사되었습니다.");
    } catch (error) {
      writeStatus(text);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function copyText(text, doneMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(function () {
          writeStatus(doneMessage);
        })
        .catch(function () {
          fallbackCopy(text);
        });
    } else {
      fallbackCopy(text);
    }
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  function updateCountdowns() {
    document.querySelectorAll("[data-countdown]").forEach(function (countdown) {
      var page = countdown.closest(".draft-page");
      var values = page ? page.querySelector("[data-countdown-values]") : null;
      if (!page) return;

      var weddingDate = new Date(page.getAttribute("data-wedding-date"));
      var now = new Date();
      var diffMs = weddingDate - now;
      var absDiff = Math.abs(diffMs);
      var dayMs = 1000 * 60 * 60 * 24;
      var hourMs = 1000 * 60 * 60;
      var minuteMs = 1000 * 60;
      var days = Math.floor(absDiff / dayMs);
      var hours = Math.floor((absDiff % dayMs) / hourMs);
      var minutes = Math.floor((absDiff % hourMs) / minuteMs);
      var seconds = Math.floor((absDiff % minuteMs) / 1000);
      var dayDiff = Math.ceil(diffMs / dayMs);

      if (values) {
        values.innerHTML =
          "<span>" +
          days +
          "</span><i>:</i><span>" +
          hours +
          "</span><i>:</i><span>" +
          minutes +
          "</span><i>:</i><span>" +
          seconds +
          "</span>";
      }

      if (Number.isFinite(dayDiff)) {
        if (dayDiff > 0) {
          countdown.innerHTML =
            wedding.groomFirst +
            " &amp; " +
            wedding.brideFirst +
            '의 결혼식이 <strong>' +
            dayDiff +
            "</strong>일 남았습니다.";
        } else if (dayDiff === 0) {
          countdown.textContent = "오늘, 저희가 결혼합니다.";
        } else {
          countdown.innerHTML =
            "함께해 주셔서 감사합니다. 예식이 <strong>" +
            Math.abs(dayDiff) +
            "</strong>일 지났습니다.";
        }
      }
    });
  }

  renderDrafts();
  window.addEventListener("hashchange", renderDrafts);
  window.setInterval(updateCountdowns, 1000);

  document.addEventListener("click", function (event) {
    var copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      copyText(copyButton.getAttribute("data-copy"), "복사되었습니다.");
      return;
    }

    var shareButton = event.target.closest("[data-share]");
    if (shareButton) {
      var page = shareButton.closest(".draft-page");
      var url = new URL(window.location.href);

      if (page && page.getAttribute("data-draft-id")) {
        url.hash = page.getAttribute("data-draft-id");
      }

      var shareData = {
        title: document.title,
        text: "민준과 서연의 결혼식에 초대합니다.",
        url: url.toString(),
      };

      if (navigator.share) {
        navigator.share(shareData).catch(function () {});
      } else {
        copyText(url.toString(), "청첩장 주소가 복사되었습니다.");
      }
      return;
    }

    var galleryItem = event.target.closest("[data-lightbox]");
    if (galleryItem && lightbox && lightboxImage) {
      lightboxImage.src = galleryItem.getAttribute("data-lightbox");
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    }
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLightbox();
  });
})();
