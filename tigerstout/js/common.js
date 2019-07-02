$(function(){
	
	////////ナビゲーション////////
	
	//ページ読み込み時初期化
	$("nav").addClass("nav-init");
	$("footer").after('<div class="dark"></div>');
	$(".nav-open").text("＋");
	
	//メニューを開くボタン押された時
	$(".nav-open").click(function() {
		$(".dark").fadeIn(200, function(){$("nav").fadeIn(200, function(){$("nav").removeClass("nav-init")});});
		$("header").fadeOut(200);
	});
	
	//メニューを閉じるボタン押された時
	$(".nav-close").click(function(){
		navClose();
	});
	
	//背景半透明クリック時もメニューを閉じる
	$(".dark").click(function(){
		navClose();
	});
	
	//メニューを閉じる
	function navClose(){
		$("header").fadeIn(200);
		$("nav").fadeOut(200, function(){$("nav").addClass("nav-init");$(".dark").fadeOut(200);});
	}
	
	//メニュー表示中のリサイズ時
	$(window).resize(function() {
		var w = $("header").outerWidth(true);
		if($(".dark").is(":visible") && w >=769){
			$("nav").removeAttr("style");
			$("nav").addClass("nav-init");
			$("header").fadeIn(200);
			$(".dark").fadeOut(200);
		}
	});
	
	////////スライドショー////////
	var i = 0;
	$(".slide-item").eq(0).show();
	var total = 3;

	setInterval(function(){
		if(i < total){
			$(".slide-item").fadeOut(3000);
			i++;
			$(".slide-item").eq(i).fadeIn(3000);
		}else if(i == total){
			$(".slide-item").fadeOut(3000);
			i = 0;
			$(".slide-item").eq(i).fadeIn(3000);
		};
	},8000);
	
});