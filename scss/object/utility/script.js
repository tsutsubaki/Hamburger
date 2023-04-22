$("#l-header__menu").click(function () {//ボタンがクリックされたら
  $(".l-sidebar__nav").toggleClass('active');//ボタン自身に activeクラスを付与し
   
});

$(".l-sidebar__close").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".l-sidebar__nav").removeClass('active');//ボタンの activeクラスを除去し

});

  
  