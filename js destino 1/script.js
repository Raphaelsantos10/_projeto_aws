$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});


/*Perguntas Frequentes*/
$(document).ready(function () {
    
    $('#toggle-item li').click(function () {

        var text = $(this).find('p');

        if (text.is(':hidden')) {
            text.slideDown('220');
            $(this).find('span').html('<i class="icon icon-minus-square"></i>');        
        } else {
            text.slideUp('220');
            $(this).find('span').html('<i class="icon icon-plus-square"></i>');     
        }
        
    });

});