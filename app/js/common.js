$(function () {
    var
        w = $(window).width();

    $('.popup__container').on('scroll', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $('.header__nav__container , .nav__overlay').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $("input[type='tel']").mask("+79999999999");

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

        $('.window__container').hide();
        thisPopup.css({'display' : 'flex'});
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

        $('.window__container').hide();
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

        setTimeout(function () {
            $('.header__nav__container').addClass('openedNav');

        }, 50);
    });

    $('.vav__close, .nav__overlay').click(function (e) {
        e.preventDefault();

        $('.header__nav__container').removeClass('openedNav');

    });

}



//Попапи
function closingPopups() {
    $('.popup__close_reg, .popups__overlay').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();
        $('.forgetLast').hide();
        $('body, html').css({'overflow' : 'visible'});
    });
}