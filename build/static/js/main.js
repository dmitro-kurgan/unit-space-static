$(document).ready(function () {
    svg4everybody({});
});

// -------YEAR------
$(function GetYear() {
    var dt = new Date;
    var today = dt.getFullYear();
    var show = document.getElementById('year');
    show.innerHTML = (' ' + today + ' ')
}());

// ----------HIDE-INPUT-TEXT-AREA-ON-CLICK------------------
$(document).ready(function () {
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
		$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
 });
// --------------------HOVER SOUNDS--------------------------
$('.btn').mouseenter(function() {
    soundHover();
});
$('.cross-platform__list li').mouseenter(function() {
    soundHover();
});
$('.coop-types__left, .coop-types__right').mouseenter(function() {
    soundHover();
});
$('.index-page .services__box li').mouseenter(function() {
    soundHover();
});
$('.team-str__block-box').mouseenter(function() {
    soundHover();
});
$('.design__solutions-list li').mouseenter(function() {
    soundHover();
})
// ------------------SOUND-MENU------------------------
function soundMenu() {
    var audio = new Audio();
    audio.src = './static/sounds/menu.wav';
    audio.volume = 0.3;
    audio.autoplay = true;
}
function soundTransition() {
    var audio = new Audio();
    audio.src = './static/sounds/transition.wav';
    audio.volume = 0.3;
    audio.autoplay = true;
}
function soundHover() {
    var audio = new Audio();
    audio.src = './static/sounds/hover.wav';
    audio.volume = 0.3;
    audio.autoplay = true;
}
// --------------HEADER-MENU-&-ORDER-------------------
$(document).ready(function() {
	$("#MenuIcon").click(function() {
		$("#MainMenu").css("top", "0px").css("opacity", "1");
		function showMenu() {
			$("#MenuIcon").animate({right:'-50%'},300);
            $('#close-menu').animate({opacity: '1'}, 1000);
		}
		setTimeout(function() {
            showMenu();
            soundMenu();
        }, 100);

         function showTextBottom() {
            $('.bg-text__text').css("opacity", "1");
        }
        setTimeout(showTextBottom, 500);

        function showTextFirst() {
            $('.main-menu__main-list li:nth-child(1)').css("transform", "translate3d(0, 0%, 0)");
            $('.main-menu__main-list li:nth-child(1)').css("opacity", "1");
        }
        setTimeout(showTextFirst, 500);
        if(screen.width < 500) {
          setTimeout(showTextFirst, 0);  
        }

        function showTextSecond() {
            $('.main-menu__main-list li:nth-child(2)').css("transform", "translate3d(0, 0%, 0)");
            $('.main-menu__main-list li:nth-child(2)').css("opacity", "1");
        }
        setTimeout(showTextSecond, 750);
        if(screen.width < 500) {
          setTimeout(showTextSecond, 0);  
        }

        function showTextThirth() {
            $('.main-menu__main-list li:nth-child(3)').css("transform", "translate3d(0, 0%, 0)");
            $('.main-menu__main-list li:nth-child(3)').css("opacity", "1");
        }
        setTimeout(showTextThirth, 1000);
        if(screen.width < 500) {
          setTimeout(showTextThirth, 0);  
        }

        function showTextFourth() {
            $('.main-menu__main-list li:nth-child(4)').css("transform", "translate3d(0, 0%, 0)");
            $('.main-menu__main-list li:nth-child(4)').css("opacity", "1");
        }

        setTimeout(showTextFourth, 1250);
        if(screen.width < 500) {
          setTimeout(showTextFourth, 0);  
        }

        function showTextFifth() {
            $('.main-menu__main-list li:nth-child(5)').css("transform", "translate3d(0, 0%, 0)");
            $('.main-menu__main-list li:nth-child(5)').css("opacity", "1");
        }
        setTimeout(showTextFifth, 1500);
        if(screen.width < 500) {
          setTimeout(showTextFifth, 0);  
        }

        function showTextSixth() {
            $('.main-menu__main-list li:nth-child(6)').css("transform", "translate3d(0, 0%, 0)");
            $('.main-menu__main-list li:nth-child(6)').css("opacity", "1");
        }
        setTimeout(showTextSixth, 1750);
        if(screen.width < 500) {
          setTimeout(showTextSixth, 0);  
        }

	});
	$("#close-menu, .link").click(function() {
		function hideMenu() {
			$("#MainMenu").css("top", "-150%").css("opacity", "0");
			$("#MenuIcon").animate({right:'0'},300);
            $('.main-menu__main__list li').css("opacity", "0");
            $('.main-menu__main__list li').css("transform", "translate3d(0, -100%, 0)");
            $('.bg-text__text').css("opacity", "0");
            // $('#close-menu').animate({right: "-100%"},100);
            $('#close-menu').animate({opacity: '0'}, 0);
		}
		setTimeout(function(){
            hideMenu();
            soundMenu();
        }, 300);

		function originalLayout() {
            $("#MainMenu").css("opacity", "0");
		}
		setTimeout(originalLayout, 600);
	});
    
	$("#MenuOrder, #OrderWithUs, #contactUs, #contactUs2, #letsget").click(function(e) {
        e.preventDefault();
		$("#MainOrder").css("top", "0px").css("opacity", "1");
		function showOrder() {
			$("#MenuOrder").animate({top:'-100'},100);
            $('#close-order').animate({opacity: '1'}, 1000);
		}
        setTimeout(function() {
            showOrder();
            soundMenu();
        }, 100);
	});

	$("#close-order").click(function () {
		function hideOrder() {
			$("#MainOrder").css("top", "-150%").css("opacity", "0");
			$("#MenuOrder").animate({top:'0'},300);
            $('#close-order').animate({opacity: '0'}, 0);
		}
		setTimeout(function() {
            hideOrder();
            soundMenu();
        }, 100);

		function originalLayout() {
            $("#MainOrder").css("opacity", "0");
		}
		setTimeout(originalLayout, 600);
	});
});


// -------------BACK-TO-TOP---------------
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});

// ----------MENU-CHANGE-BORDER-ON-CLICK--------------
$(".form-group div").click(function(e) {
    e.preventDefault();
    $(".form-group div").removeClass('active');
    $(this).addClass('active');
})