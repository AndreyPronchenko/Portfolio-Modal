$(document).ready(function () {

    let list_1 = document.querySelectorAll('.list_1');

    init();

    list_1.forEach(function (element) {
        element.onclick = showTabs;
    });

    function init() {
        let block = document.querySelectorAll('.block');
        for (let i = 1; i < block.length; i++) {
            block[i].style.display = 'none';
        }
    }

    function showTabs() {
        let data = this.getAttribute('data');
        let block = document.querySelectorAll('.block');
        for (let i = 0; i < block.length; i++) {
            block[i].style.display = 'none';
        }
  
        document.querySelector(`.block[data="${data}"]`).style.display = 'block';
    }

    // -------------------- Портфолио

    
    $('.all_li').click(function() {
        $('.graphic').show();
        $('.web_des').show();
        $('.photography').show();
    });

    $('.graphic_li').click(function() {
        $('.graphic').show();
        $('.web_des').hide();
        $('.photography').hide();
    });

    $('.web_des_li').click(function() {
        $('.graphic').hide();
        $('.web_des').show();
        $('.photography').hide();
    });

    $('.photography_li').click(function() {
        $('.graphic').hide();
        $('.web_des').hide();
        $('.photography').show();
    });


    $('.m').hide();

    $('.home_li').click(function() {
        $('.m').hide();
        $('.home').show();
    });

    $('.home_img').click(function() {
        $('.m').hide();
        $('.home').show();
    });

    $('.next').click(function() {
        $('.m').show();
        $('.home').hide();
    });

    // боковое меню

    $('.home_li').click(function() {
        $('.m').hide();
        $('.home').show();
    });

    $('.home_img1').click(function() {
        $('.m').show();
        $('.one').show();
        $('.two_3').hide();
        $('.two_4').hide();
        $('.two_5').hide();
        $('.title3').hide();
    });

    $('.home_img2').click(function() {
        $('.m').show();
        $('.two_3').show();
        $('.one').hide();
        $('.two_4').hide();
        $('.two_5').hide();
        $('.title3').hide();
    });

    $('.home_img3').click(function() {
        $('.m').show();
        $('.two_5').show();
        $('.one').hide();
        $('.two_4').hide();
        $('.two_3').hide();
        $('.title3').hide();
    });

    $('.home_img4').click(function() {
        $('.m').show();
        $('.two_4').show();
        $('.one').hide();
        $('.two_5').hide();
        $('.two_3').hide();
        $('.title3').hide();
    });

    $('.home_img5').click(function() {
        $('.m').show();
        $('.title3').show();
        $('.one').hide();
        $('.two_5').hide();
        $('.two_3').hide();
        $('.two_4').hide();
    });


    // Модальное окно
    
    $('.mo_1').click(function() {
        $('.overlay').show(1000);
    });
    $('.close_popup').click(function() {
        $('.overlay').hide(1000);
    });

    // Модальное окно 2

    $('.modal').click(function() {
        $('.mod').show(1000);
    });
    $('.close_content').click(function() {
        $('.mod').hide(1000);
    });

      // Модальное окно 3

      $('.modal1').click(function() {
        $('.mod1').show(1000);
    });
    $('.close_content1').click(function() {
        $('.mod1').hide(1000);
    });

          // Модальное окно 4

          $('.modal2').click(function() {
            $('.mod2').show(1000);
        });
        $('.close_content2').click(function() {
            $('.mod2').hide(600);
        });

    
    

});