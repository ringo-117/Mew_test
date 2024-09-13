// JavaScript Document

'use strict';

{
	const btn = document.querySelector('.btn');
	const container = document.querySelector('.container');

	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		container.classList.toggle('active');
	});
}


$(function () {
	// ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
	$(".btn").click(function () {
	  // 現在のbodyタグのoverflowスタイルを確認
	  if ($("body").css("overflow") === "hidden") {
		// もしoverflowがhiddenなら、bodyのスタイルを元に戻す
		$("body").css({ height: "", overflow: "" });
	  } else {
		// そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
		$("body").css({ height: "100%", overflow: "hidden" });
	  }
	});
});

//　メニュー内のリンクを押すとメニューページが消える
$('#nav_list a[href]').on('click', function(event) {
    $('.btn').trigger('click');
});

// ページ内スクロール
// $('a[href^="#"]').click(function () {
// 	const speed = 600;
// 	let href = $(this).attr("href");
// 	let target = $(href == "#" || href == "" ? "html" : href);
// 	let position = target.offset().top;
// 	$("body,html").animate({ scrollTop: position }, speed, "swing");
// 	return false;
//   });

  $(function(){
	var headerHeight = $('header').outerHeight();
	var urlHash = location.hash;
	if(urlHash) {
	  $('body,html').stop().scrollTop(0);
	  setTimeout(function(){
		var target = $(urlHash);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 500);
	  }, 100);
	}
	$('a[href^="#"]').click(function(){
	  var href= $(this).attr("href");
	  var target = $(href);
	  var position = target.offset().top - headerHeight;
	  $('body,html').stop().animate({scrollTop:position}, 500);
	  return false;
	});
  });







