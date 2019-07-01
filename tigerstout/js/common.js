$(function(){
	
	////////ナビゲーション////////
	
	//ページ読み込み時初期化
	$("nav").addClass("nav-init");
	$("footer").after('<div class="dark"></div>');
	$(".nav-open").text("＋");
	
	//メニューを閉じる
	$(".nav-close").click(function(){
		navClose();
	});
	
	//背景半透明クリック時もメニューを閉じる
	$(".dark").click(function(){
		navClose();
	});
	
	function navClose(){
		$("header").fadeIn(200);
		$("nav").fadeOut(200, function(){$("nav").addClass("nav-init");$(".dark").fadeOut(200);});
		return false;
	}

	//メニューを開く
	$(".nav-open").click(function() {
		$(".dark").fadeIn(200, function(){$("nav").fadeIn(200, function(){$("nav").removeClass("nav-init")});});
		$("header").fadeOut(200);
		return false;
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