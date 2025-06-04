
function anime(th){
	$(".pics span").eq(th).fadeIn(400).siblings().fadeOut(400);
	$(".mns a.aas").eq(th).addClass("on").siblings(".aas").removeClass("on");	
}
function anime2(th){
	$(".pics2 span").eq(th).fadeIn(0).siblings().fadeOut(0);
	$(".mns2 a.aas").eq(th).addClass("on").siblings(".aas").removeClass("on");	
}
var popt1 = "",usw = 0,pss = 0,set = 0,set2 = 0,set3 = 0,set4 = 0,pus = 0,setitme = null,cout = 0,cout2 = 0,cout3 = 0,cout4 = 0;


$(function(){


	if($(".top_mn").length>0)
	{
		$(".pics span").eq(cout).fadeIn(400);
		$(".mns a").eq(cout).addClass("on");
		set = setInterval((function(){
			cout+=1;
			if(cout==$(".mns a.aas").length)cout=0;
			anime(cout);
		}),3000);
		
		$(".pics2 a").eq(cout).fadeIn(400);
		$(".mns2 a").eq(cout).addClass("on");
		set2 = setInterval((function(){
			cout2+=1;
			if(cout2==$(".mns2 a").length)cout2=0;
			anime2(cout2);
		}),2000);
	}

	$(".mns a").click(function(){
		var self = $(this);
		if(!self.hasClass("aas")){
			alert("canhbao");
			return false;	
		}
		cout = $(".mns a.aas").index(self);
		self.addClass("on").siblings(".aas").removeClass("on");	
		anime(cout);
	})
	
	$(".mns2 a").click(function(){
		var self = $(this);
		if(!self.hasClass("aas")){
			alert("canhbao");
			return false;	
		}
		cout = $(".mns2 a.aas").index(self);
		self.addClass("on").siblings(".aas").removeClass("on");	
		anime(cout);
	})
	
	
})









