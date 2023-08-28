
// header height

// $(".header-mobile").style.setProperty('--header-height', `${headerHeight}px`);

// nav-mobile


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        margin: 100,
        // autoplay: true,
        // autoplayTimeout: 3000,
        dotsContainer: ".dots",
        dotsEach: false,
        nav: false,
        responsive: {
            0: {
              items: 1,
            },
            700: {
              items: 2,
            },
            1200: {
              margin: 150,
              items: 3,
            },
        }
          
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.arrow-right').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.arrow-left').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })
    $(".dot").click(function() {
        owl.trigger('to.owl.carousel', [$(this).index(), 300])
    })


    // Header height
    let header = $(".head");
    let headerHeight = header.outerHeight(true);
    $(".header-mobile").css("top", `${headerHeight}px`)
    $(".banner").css("paddingTop", `${headerHeight}px)`)

// Navbar-mobile
    let bars = $(".bars");
    bars.click(function() {
        $(".header-mobile").toggleClass("header-mobile-active");
    })

    $(".btn-sign, .btn-up").click(function() {
        $(".modal").toggleClass("modal-active");
    });
    $(".modal__overlay").click(function() {
        $(".modal").removeClass("modal-active");
    });
    $(".btn-mobile").click(function() {
        $(".modal").toggleClass("modal-active");
    });








    // Modal
    $('.message a').click(function() {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });


    // $('.login-form button').click(function() {
    //     if( $('.login-form input')=='') {
    //        $('.input-account').addClass('tabs.tabs-active') 
    //     } else $('.wait').addClass('tabs.tabs-active') 
    // })
   
});
  