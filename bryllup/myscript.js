// JavaScript Document

$(() => {
	//alert("hej");
	/*$("nav").hide();*/
	
	$(".open-close").click(function(){
		$("nav").toggle("fa-times-circle fa-bars");	
		
		
		$(".openclose").toggleClass("fa-times-circle fa-bars");
		
		/*$("fa-times-circle fa-bars").toggleClass(".open-close");*/
	});
	
});
/*
<i class="far fa-times-circle"></i>*/