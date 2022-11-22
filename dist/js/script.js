$(document).ready(function(){



    $('.catalog__button').on('click', '.catalog__button:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });




});