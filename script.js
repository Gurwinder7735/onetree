$(document).ready(function(){
   
    $(window).scroll(function(){
       
        if ($(window).scrollTop() > 800 ){
            $('.mynavbar').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 800){
            $('.mynavbar').removeClass('fixed-top');
        }
        
    });
    
});

//$(".mynavbar ul li a[href^='#']").on('click',function(e){
//    
//   e.preventDefault();
//    
//   var hash = this.hash;
//    
//    $('html','body').animate({
//        scrollTop: $(hash).offset().top
//    },300, function(){
//       window.location.hash = hash; 
//    });
//    
//});