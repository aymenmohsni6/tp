//  preload
$(window).load(function() {

    setTimeout(function() {
        var bar1 = new ldBar("#myItem1");
        var bar2 = document.getElementById("myItem1").ldBar;
        bar1.set(100);
    }, 500);

    setTimeout(function() {
        $(".loading-part").css("display","none");
    }, 2500);
});




// menu dropDown
$( ".dropdown" ).hover(function() {
    $( this ).toggleClass( "open");
    $(".dropdown-menu").animate({top: "22px"}, function(){$(".dropdown-menu").animate({top: "15px"});});
    });
// menu responsive
$(function() {
    var $menu = $('nav#menu'),
        $html = $('html, body');
        $menu.mmenu({
            dragOpen: true
        });

        $menu.find( 'li > a' ).on(
            'click',
            function( e )
            {
                var href = $(this).attr( 'href' );
                if ( href.slice( 0, 1 ) == '#' )
                {
                    $menu.one(
                        'closed.mm',
                        function()
                        {
                            setTimeout(
                                function()
                                {
                                        $html.animate({
                                        scrollTop: $( href ).offset().top
                                    }); 
                            }, 10
                        );  
                    }
                );
            }
        }
    );
});
// smooth scroll
$(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
// animation button contact
document.getElementById("button_contact").addEventListener("mouseover",f1);
function f1(){
    document.getElementById("button_contact").style.animation="btn 1s";
    document.getElementById("button_contact").style.animationFillMode="forwards";
    document.getElementById("i-button").style.animation="btn-i 1s";
    document.getElementById("i-button").style.animationFillMode="forwards";
}
document.getElementById("button_contact").addEventListener("mouseout",f2);
function f2(){
    document.getElementById("button_contact").style.animation="btn-back 1s";
    document.getElementById("button_contact").style.animationFillMode="forwards";
    document.getElementById("i-button").style.animation="btn-i-back 1s";
    document.getElementById("i-button").style.animationFillMode="forwards";
}
// animation button event
document.getElementById("More-event1").addEventListener("click",f3);
function f3(){
    document.getElementById("blog-inner1").style.animation="btn-event-plus1 1s";
    document.getElementById("blog-inner1").style.animationFillMode="forwards";
    document.getElementById("More-event1").style.display="none";
    document.getElementById("less-event1").style.display="block";
    document.getElementById("less-event1").style.marginLeft = "28%";
    document.getElementById("Event-contenu1").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection ,Par sa tradition agricole associée à une politique de prospection,Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes ';
}
document.getElementById("less-event1").addEventListener("click",f4);
function f4(){
    document.getElementById("blog-inner1").style.animation="btn-event-moins1 1s";
    document.getElementById("blog-inner1").style.animationFillMode="forwards";
    document.getElementById("More-event1").style.display="block";
    document.getElementById("More-event1").style.marginLeft = "28%";
    document.getElementById("less-event1").style.display="none";
    document.getElementById("Event-contenu1").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques... ';
}
document.getElementById("More-event2").addEventListener("click",f5);
function f5(){
    document.getElementById("blog-inner2").style.animation="btn-event-plus2 1s";
    document.getElementById("blog-inner2").style.animationFillMode="forwards";
    document.getElementById("More-event2").style.display="none";
    document.getElementById("less-event2").style.display="block";
    document.getElementById("less-event2").style.marginLeft = "28%";
    document.getElementById("Event-contenu2").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection ,Par sa tradition agricole associée à une politique de prospection,Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes ';
}
document.getElementById("less-event2").addEventListener("click",f6);
function f6(){
    document.getElementById("blog-inner2").style.animation="btn-event-moins2 1s";
    document.getElementById("blog-inner2").style.animationFillMode="forwards";
    document.getElementById("More-event2").style.display="block";
    document.getElementById("More-event2").style.marginLeft = "28%";
    document.getElementById("less-event2").style.display="none";
    document.getElementById("Event-contenu2").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques... ';
}
document.getElementById("More-event3").addEventListener("click",f7);
function f7(){
    document.getElementById("blog-inner3").style.animation="btn-event-plus3 1s";
    document.getElementById("blog-inner3").style.animationFillMode="forwards";
    document.getElementById("More-event3").style.display="none";
    document.getElementById("less-event3").style.display="block";
    document.getElementById("less-event3").style.marginLeft = "28%";
    document.getElementById("Event-contenu3").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection ,Par sa tradition agricole associée à une politique de prospection,Par sa tradition agricole associée à une politique de prospection';
}
document.getElementById("less-event3").addEventListener("click",f8);
function f8(){
    document.getElementById("blog-inner3").style.animation="btn-event-moins3 1s";
    document.getElementById("blog-inner3").style.animationFillMode="forwards";
    document.getElementById("More-event3").style.display="block";
    document.getElementById("More-event3").style.marginLeft = "28%";
    document.getElementById("less-event3").style.display="none";
    document.getElementById("Event-contenu3").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques... ';
}
// timeline
$('.timeline-2013-2018,#menu_2013_2018').click(function(){
    $('.timeline-menu').css("display","block");

    $('#menu_2013_2018').addClass( "active_menu" );

    $('#menu_2013').removeClass( "active_menu" );
    $('#menu_2014').removeClass( "active_menu" );
    $('#menu_2015').removeClass( "active_menu" );
    $('#menu_2016').removeClass( "active_menu" );
    $('#menu_2017').removeClass( "active_menu" );

    $('#medailles-2013_2018').css("display","block");

    $('.timeline-contenu').css("display","none");
    $('#medailles-2013').css("display","none");
    $('#medailles-2014').css("display","none");
    $('#medailles-2015').css("display","none");
    $('#medailles-2016').css("display","none");
    $('#medailles-2017').css("display","none");
});
$('.timeline-2013,#menu_2013').click(function(){
    $('.timeline-menu').css("display","block");
    $('#menu_2013').addClass( "active_menu" );
    $('#menu_2013_2018').removeClass( "active_menu");   
    $('#menu_2014').removeClass( "active_menu" );
    $('#menu_2015').removeClass( "active_menu" );
    $('#menu_2016').removeClass( "active_menu" );
    $('#menu_2017').removeClass( "active_menu" );
    $('.timeline-contenu').css("display","none");
    $('#medailles-2013').css("display","block");
    $('#medailles-2013_2018').css("display","none");
    $('#medailles-2014').css("display","none");
    $('#medailles-2015').css("display","none");
    $('#medailles-2016').css("display","none");
    $('#medailles-2017').css("display","none");
});
$('.timeline-2014,#menu_2014').click(function(){
    $('.timeline-menu').css("display","block");
    $('#menu_2014').addClass( "active_menu" );
    $('#menu_2013').removeClass( "active_menu" );
    $('#menu_2013_2018').removeClass( "active_menu");   
    $('#menu_2015').removeClass( "active_menu" );
    $('#menu_2016').removeClass( "active_menu" );
    $('#menu_2017').removeClass( "active_menu" );
    $('.timeline-contenu').css("display","none");
    $('#medailles-2014').css("display","block");
    $('#medailles-2013_2018').css("display","none");
    $('#medailles-2013').css("display","none");
    $('#medailles-2015').css("display","none");
    $('#medailles-2016').css("display","none");
    $('#medailles-2017').css("display","none");
});
$('.timeline-2015,#menu_2015').click(function(){
    $('.timeline-menu').css("display","block");
    $('#menu_2015').addClass( "active_menu" );
    $('#menu_2014').removeClass( "active_menu"); 
    $('#menu_2013').removeClass( "active_menu" );
    $('#menu_2013_2018').removeClass( "active_menu");   
    $('#menu_2016').removeClass( "active_menu" );
    $('#menu_2017').removeClass( "active_menu" );  
    $('.timeline-contenu').css("display","none");
    $('#medailles-2015').css("display","block");
    $('#medailles-2013_2018').css("display","none");
    $('#medailles-2013').css("display","none");
    $('#medailles-2014').css("display","none");
    $('#medailles-2016').css("display","none");
    $('#medailles-2017').css("display","none");
});
$('.timeline-2016,#menu_2016').click(function(){
    $('.timeline-menu').css("display","block");
    $('#menu_2016').addClass( "active_menu" );
    $('#menu_2014').removeClass( "active_menu"); 
    $('#menu_2013').removeClass( "active_menu" );
    $('#menu_2013_2018').removeClass( "active_menu");   
    $('#menu_2017').removeClass( "active_menu" ); 
    $('.timeline-contenu').css("display","none");
    $('#medailles-2016').css("display","block");
    $('#medailles-2013').css("display","none");
    $('#medailles-2013_2018').css("display","none");
    $('#medailles-2013').css("display","none");
    $('#medailles-2014').css("display","none");
    $('#medailles-2017').css("display","none");
});
$('.timeline-2017,#menu_2017').click(function(){
    $('.timeline-menu').css("display","block");
    $('#menu_2017').addClass( "active_menu" );
    $('#menu_2015').removeClass( "active_menu"); 
    $('#menu_2014').removeClass( "active_menu"); 
    $('#menu_2013').removeClass( "active_menu" );
    $('#menu_2013_2018').removeClass( "active_menu");   
    $('#menu_2016').removeClass( "active_menu" );
    $('.timeline-contenu').css("display","none");
    $('#medailles-2017').css("display","block");
    $('#medailles-2013_2018').css("display","none");
    $('#medailles-2013_2018').css("display","none");
    $('#medailles-2013').css("display","none");
    $('#medailles-2014').css("display","none");
    $('#medailles-2016').css("display","none");
});

$('#return-menu').click(function(){
    $('.timeline-menu').css("display","none");
    $('.timeline-contenu').css("display","block");
    $('#medailles-2013_2018').css("display","none");
    $('#medailles-2013').css("display","none");
    $('#medailles-2014').css("display","none");
    $('#medailles-2015').css("display","none");
    $('#medailles-2016').css("display","none");
    $('#medailles-2017').css("display","none");
    $('#menu_2013_2018').removeClass( "active_menu" );
    $('#menu_2013').removeClass( "active_menu" );
    $('#menu_2014').removeClass( "active_menu" );
    $('#menu_2015').removeClass( "active_menu" );
    $('#menu_2016').removeClass( "active_menu" );
    $('#menu_2017').removeClass( "active_menu" );
});