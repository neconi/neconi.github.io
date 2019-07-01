$(function(){
	
	//ナビゲーション表示切り替え
	$(".nav-close").click(function() {
		$("header").fadeIn(300);
		$("nav").fadeOut( 300, function(){$("nav").addClass("nav-init")});
		return false;
	});

	$(".nav-open").click(function() {
		$("header").fadeOut(300);
		$("nav").fadeIn( 300, function(){$("nav").removeClass("nav-init");});
		return false;
	});
	
	
	//スライドショー
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