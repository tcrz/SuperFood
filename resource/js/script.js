$(document).ready(function() {
    
          
    $('.section-features').waypoint(function(direction){
        if(direction =="down"){
            $('nav').addClass('sticky');
          } else {
            $('nav').removeClass('sticky')
            } 
        },
            {
         offset: '60px;'
           }
    )
      
      
      //SCROLL ON BUTTONS
      $('.scroll-to-plans').click(function() {
          $('html, body').animate({scrollTop:$('.section-plans').offset().top}, 1000);
          
      })
    
       $('.scroll-to-features').click(function() {
          $('html, body').animate({scrollTop:$('.section-features').offset().top}, 1000);
          
      })
 
    //SMOOTH SCROLL on MENU NAVIGATION. WITH THE USE OF #IDs
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    //ANIMATIONS
     $('.section-features').waypoint(function(direction){
         if(direction=="down"){
           $('.js-wp-1').addClass('animate__animated animate__fadeIn')
         } else {
                $('.js-wp-1').removeClass('animate__animated animate__fadeIn')   
         }
        
        },  {
         offset: '90px;'
        
    })
    
    $('.section-cities').waypoint(function(direction){
           $('.js-wp-cities').addClass('animate__animated animate__bounceInLeft')
        
        }, {
         offset: '90px;'
        
    })
    
     $('.iphonetrigger').waypoint(function(direction){
         if(direction=="down"){
           $('.iphone-img').addClass('animate__animated animate__fadeInUp')
         } else{
              $('.iphone-img').removeClass('animate__animated animate__fadeInUp')
         }
        }, {
         offset: '90px;'
        
    })
    
     $('.section-plans').waypoint(function(direction){
         
         if(direction == "down"){
           $('.js-wp-plans').addClass('animate__animated animate__pulse')
         } else {
              $('.js-wp-plans').removeClass('animate__animated animate__pulse')
         }
        
        }, {
         offset: '90px;'
        
    })
    
    
    
        //MOBILE NAVIGATION FUNCTIONALITY
        var nav = $('.menu-nav');
        
        var icon = $('.js-navbutton ion-icon')
        
     //TO TOGGLE MENU AND (HAMBURGER AND CLOSE) BUTTONS
    $('.js-navbutton').click(function(){
        nav.slideToggle(200);
        
        if (icon[0].name == 'menu-sharp') {
            icon[0].name = 'close-sharp'
            
        } else {
            icon[0].name = 'menu-sharp'
        }
   })
    
    

        
    //NAVIGATION BUG FIX
    $(window).resize(function(){
    if ($(window).width() > 767){
    nav.css("display", "block");
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');

    } else {
    nav.css("display", "none");
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
    }
        
        

});

    
    

});