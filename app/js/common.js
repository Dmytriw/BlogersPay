$(function () {
    var
        w = $(window).width();

    $('.popup__container').on('scroll', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    $('input, textarea').focus(function () {
       $(this).closest('.label__popup').removeClass('errorInput');
    });

    navigation();
    closingPopups();



    ////////////////////
    //Відкриття попапів
    $('.openPopup').click(function (e) {
        e.preventDefault();

        var
            $this = $(this),
            thisHref = $this.attr('href'),
            thisPopup = $(thisHref);

        var scrollWidth = window.innerWidth - document.documentElement.clientWidth;

        $('.popup__container').hide();
        thisPopup.show();
        $('body, html').css({'overflow' : 'hidden'});
        $('html').css({'padding-right' : scrollWidth+'px'});
        $('.header').css({'right' : scrollWidth+'px'});
    });


    //////////////////
    //Забули пароль
    $('.gorget__pass').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();
        $('.forgetLast').hide();
        $('.popup__forgetPass').show();
    });

    $('.backAuthor').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();
        $('.forgetLast').show();
        $('#autorization').show();
    });




    //////////////////
    $('.inputFalse').click(function (e) {
        e.preventDefault();

        var
            $this = $(this),
            thisLabel = $this.closest('.agreeLabel'),
            thisUnput = thisLabel.find('input');

        if(!thisLabel.hasClass('checked')) {
            thisLabel.addClass('checked');
            thisUnput.prop('checked', true);
        } else {
            thisLabel.removeClass('checked');
            thisUnput.prop('checked', false);
        }

        thisLabel.removeClass('errorInput');
    });



});



//Меню в хедері
function navigation() {
    $('.hamburger__button').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        setTimeout(function () {
            $('body').attr('data-top', windowTop);
            $('.header__nav__container').addClass('openedNav');
            $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

            var windowTopData = $('body').attr('data-top');

            $('body').scrollTop(windowTopData);
        }, 50);
    });

    $('.vav__close, .nav__overlay').click(function (e) {
        e.preventDefault();

        var windowTop = $('body').attr('data-top');

        $('.header__nav__container').removeClass('openedNav');
        $('html, body').css({'overflow' : 'visible', 'position' : 'relative'});

        $(window).scrollTop(windowTop);

    });
}



//Попапи
function closingPopups() {
    $('.popup__close_reg, .popups__overlay').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();
        $('.forgetLast').hide();
        $('body, html').css({'overflow' : 'visible'});
        $('html').css({'padding-right' : '0'});
        $('.header').css({'right' : '0'});
    });
}