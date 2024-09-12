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


//　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝　HOME　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// //　ヘッダー
// $(window).on('load scroll', function(){
//     if($(this).scrollTop() > 500) {
//         $('.home_header').addClass('is-show');
//     }else{
//         $('.home_header').removeClass('is-show');
//     }
// });

// //　TOPイメージ
// $(window).on('load scroll', function(){
//     if($(this).scrollTop() > -1) {
//         $('#TOP_img').addClass('is-show');
// 		$('#TOP_title_h1').addClass('is-show');
// 		$('#TOP_title_p').addClass('is-show');
//     }
// });






