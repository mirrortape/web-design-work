$(document).ready(function() { 
     $(this).scrollTop(0);
    $('.navul2,.navli2,.navtech2,.navadobe2,.navdesign2').hide(0);
    $('.homecore').hide(0).delay(00).fadeIn(900);
    $('#homebox2').hide(0).delay(00).fadeIn(900);
 $('#homebox3').hide(0).delay(00).fadeIn(900);
    $('#homebox4').hide(0).delay(00).fadeIn(900);
    $('#homebox5').hide(0).delay(00).fadeIn(900);
    $('.header').hide(0).delay(00).fadeIn(600);
$('.slogan').hide(0).delay(00).fadeIn(600);
$('.smartmenu,.navtech').hide(0);
$('#techdrop').mouseenter(function(){
    $('.smartmenu').slideDown(200);
    $('.navtech').show(100);
       $('.navadobe,.navdesign').hide(100);
     $('.navtech2,.navadobe2,.navdesign2').hide(0);
});
    
    $('#adobedrop').mouseenter(function(){
    $('.smartmenu').slideDown(200);
    $('.navadobe').show(100);
        $('.navtech,.navdesign').hide(100);
    
});
   
      $('#designdrop').mouseenter(function(){
    $('.smartmenu').slideDown(200);
    $('.navdesign').show(100);
       $('.navtech,.navadobe').hide(100);
});
   $('.techdrop').click(function(){
       $('.navtech2').toggle(100);
       
   })
      $('.adobedrop').click(function(){
       $('.navadobe2').toggle(100);
       
   })
      $('.designdrop').click(function(){
       $('.navdesign2').toggle(100);
       
   })
    
    $('.navbox').mouseleave(function(){
        
        $('.smartmenu').slideUp(200);
        
    })
      $('#closer1,#closer2,#closer3,#closer4').mouseenter(function(){
        
        $('.smartmenu').slideUp(200);
        
    });
    $('.navtech,.navadobe,.navdesign').show(0);

   $('.menu').click(function(){
       $('.navli2,.navul2,.smallnav').show(0); $('.menu').hide(10);
       
   });
     $('.closeicon').click(function(){
       $('.navli2,.navul2,.smallnav').hide(0); $('.menu').show(10);
       
   });
    
   
     
 });  



                       