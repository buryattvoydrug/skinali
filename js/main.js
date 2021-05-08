$(window).load(function() {
            $(".before-after").twentytwenty({
                before_label: 'БЕЗ СКИНАЛИ', // Set a custom before label
                after_label: 'С СКИНАЛИ', // Set a custom after label
            });
            $('.bef-aft-slider').slick({
                draggable: false,
                dots: true,
            });
            $('.menu-button').on('click', function(){
                $('.menu').toggleClass('menu_active');
            });
            $('.select_checked').on('click', function(){
                $('.dropdown').toggleClass('dropdown_open');
                $('.dropdown__button').toggleClass('dropdown__button_active');
            });
            $('.select__option').on('click',function(){
                var value = $(this).attr('data-value');
                $('#select-type').val(value);
                $('.select_checked').text(value);
                $('.dropdown').toggleClass('dropdown_open');
            });
            $('a[href^="#"]').on('click', function(){
                var _href=$(this).attr("href");
                $('html,body').animate({ scrollTop: $(_href).offset().top -200 + "px" });
            });
            $('[type="tel"]').mask("+7 (999) 999-99-99");
            $("img.lazy").lazyload({
                effect : "fadeIn"
            });
        });
