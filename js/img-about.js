$(document).ready(function(){
	$(".foto").mouseover(function(){
		$(this).animate({
			width: "105%",
			height: "110%",
			opacity: 1,
			marginTop: -25
		}, 250
		);
	})

	$(".foto").mouseout(function(){
		$(this).animate({
			marginTop: 0,
			opacity:0.7,
			width: "100%",
			height: "100%"
		}, 250
		);
		
	})
});