$(document).ready(function() {
    var wid = $(window).width();

  

    //footer
    $(".foot-btn").click(function(event) {
        if($(".foot").hasClass("active")){
            $(".foot").removeClass("active");
        }else{
            $(".foot").addClass("active");
        }
        event.stopPropagation();
    });

  

    //menu
    var menus = $("#menu li").length;
    for (var i = 0; i < menus; i++) {
        var a = "page" + (i + 1);
        var b = "#page" + (i + 1);
        $("#menu li").eq(i).attr("data-menuanchor", a);
        $("#menu li").eq(i).children("a").attr("href", b);
    }
    //page
    $('#myfullpage').fullpage({
        fixedElements: '#header',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                $(".fc").css("z-index", "-1");
                $(".nav-bot").css("z-index", "1");
            }
            if (index == 2) {
				$('.p2').find('.wfb').addClass("animated fadeBig");
                $('.p2').find('.wfi').addClass("animated fadeIn an-de-1");
                $('.p2').find('.wfr').addClass("animated fadeIn an-de-3");
            }
            if (index == 3) {
                $('.p3').find('.wfb').addClass("animated fadeBig");
				$('.p3').find('.wfi').addClass("animated fadeIn an-de-1"); 
            }
            if (index == 4) {
                $('.p4').find('.wfb').addClass("animated fadeBig");
                $('.p4').find('.wfi').addClass("animated fadeIn an-de-1");  
				$('.p4').find('.wfr').addClass("animated fadeInRight");
            }
            if (index == 5) {
                $('.p5').find('.wfb').addClass("animated fadeBig");
                $('.p5').find('.wfi').addClass("animated fadeIn");
            }
            if (index == 6) {
				$('.p6').find('.wfb').addClass("animated fadeBig");
                $('.p6').find('.wfi').addClass("animated fadeIn");
                $('.p6').find('.wfu').addClass("animated fadeInUp");
            }
        },
        onLeave: function(index, direction) {
            if (index == '1') {
                $(".fc").css("z-index", "3");
                $(".nav-bot").css("z-index", "3");
            }
            if (index == '2') {
				$('.p2').find('.wfb').addClass("animated fadeBig");
                $('.p2').find('.wfi').removeClass("animated fadeIn");  
				$('.p2').find('.wfr').addClass("animated fadeIn");
            }
            if (index == '3') {
                $('.p3').find('.wfb').addClass("animated fadeBig");
				$('.p3').find('.wfi').addClass("animated fadeIn an-de-1"); 
            }
            if (index == '4') {
                $('.p4').find('.wfb').removeClass("animated fadeBig");
                $('.p4').find('.wfi').removeClass("animated fadeIn"); 
				$('.p4').find('.wfr').removeClass("animated fadeInRight");
            }
            if (index == '5') {
                $('.p5').find('.wfb').removeClass("animated fadeBig");
                $('.p5').find('.wfi').removeClass("animated fadeIn");
            }
            if (index == '6') {
				$('.p6').find('.wfb').addClass("animated fadeBig");
                $('.p6').find('.wfi').addClass("animated fadeIn an-de-1");
                $('.p6').find('.wfu').addClass("animated fadeInUp");
            }
        }
    });

    //footer va menu
    if (wid < 913){
        $(document).click(function() {
            if($(".foot").hasClass("active")){
                $(".foot").removeClass("active");
            }
            $(".hanbager").removeClass("open");
            $(".head-right").css("left", "100%");
        });
        $(".hanbager").click(function() {
            event.stopPropagation();
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(".head-right").css("left", "100%");
            } else {
                $(this).addClass("open");
                $(".head-right").css("left", "50%");
            }
        });
    }


    //class
    $(".sec4-nav dd").removeClass("on");
    $(".sec4-per dd").removeClass("on");
    $(".sec4-nav dd").eq(0).addClass("on");
    $(".sec4-per dd").eq(0).addClass("on");
    $(".sec4-per dd").children(".stau").eq(0).addClass("on");
    $(".sec4-nav dd").click(function() {
        var i = $(this).index();
        $(this).addClass('on');
        $(this).siblings().removeClass("on");
        $(".sec4-per dd").eq(i).addClass("on");
        $(".sec4-per dd").eq(i).siblings().removeClass("on");
    });

    

    //slide san boss
    $(".secpiv-wap").slide({
        mainCell: ".bd1 ul",
        effect: "fold",
        delayTime: 300,
		
		
    });
    
    var ulh=$(".bd1 ul img").height();
    $(".bd1 ul").css("height",ulh);

    //reservePlayer();
});


