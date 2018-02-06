$(document).ready(function(){
	console.log('script linked');
	$('.column').click(function(){
		console.log('column clicked');
		$(this).removeClass('initial');
		$('.column').removeClass('initial').addClass('hide');
		$(this).removeClass('hide');
		$('.banner>p').css('display','none');
		$('.cloud').fadeIn(1500);
	});
	$('.column').click(function(){
		$(this).removeClass('hide');
		$('.column').removeClass('show').addClass('hide');
		$(this).addClass('show');
	});
});

$(document).ready(function(){
	$('.column').click(function(){
		var clicked = $('.column').index(this);
		var chaodai = ['.han','.tang','.song','.ming'];
		var order = ['.a>.banner', '.b>.banner', '.c>.banner', '.d>.banner'];
		var show = (chaodai[clicked]);
		$(show).css('visibility', 'visible');
		$(order[clicked]).css('visibility', 'hidden');
		chaodai.splice(clicked,1);
		order.splice(clicked,1);
		for (i=0; i<chaodai.length; i++) {
			$(chaodai[i]).css('visibility','hidden');
			$(order[i]).css('visibility', 'visible');
		}
	});
});

var flag1=true,
	flag2=true,
	flag3=true,
	flag4=true;
$(document).ready(function(){
	$('.hanillu').click(function(){
		console.log('illust clicked');
		if (flag1){
		$(this).animate({
			"left": "-=33vw"
		},1500);
		$ ('.han > .info').slideDown( "slow" );
		$ ('.hanillu').removeClass('hover');
		flag1 = false;
	};});
	$('.tangillu').click(function(){
		console.log('illust clicked');
		if (flag2){
		$(this).animate({
			"left": "-=25vw"
		},1500);
		$ ('.tang > .info').slideDown( "slow" );
		$ ('.tangillu').removeClass('hover');
		flag2 = false;
	};});
	$('.songillu').click(function(){
		console.log('illust clicked');
		if (flag3){
		$(this).animate({
			"left": "+=25vw"
		},1500);
		$ ('.song > .info').slideDown( "slow" );
		$ ('.songillu').removeClass('hover');
		flag3 = false;
	};});
	$('.mingillu').click(function(){
		console.log('illust clicked');
		if (flag4){
		$(this).animate({
			"left": "+=26vw"
		},1500);
		$ ('.ming > .info').slideDown( "slow" );
		$ ('.mingillu').removeClass('hover');
		flag4 = false;
	};});
});

$(document).ready(function(){
	var chaodai = ['.han','.tang','.song','.ming'];
	var order = ['.a>.banner', '.b>.banner', '.c>.banner', '.d>.banner'];
	$('.cloud>img').hover(function(){
		$(".cloud>div").toggle();
	});
	$('.credit>img').hover(function(){
		$(".credit>div").toggle();
	});
	$('.cloud').click(function(){
		$(".column").removeClass('show').removeClass('hide').addClass('initial');
		$('.banner>p').css('display','block');
		$('.cloud').fadeOut('fast');
		for(i=0; i<chaodai.length; i++){
			$(chaodai[i]).css('visibility',"hidden");
			$(order[i]).css('visibility', 'visible');
		}
	});
});
