$(document).ready(function(){

    $('.mobile_nav .open').on('click', function(){
        
        if($(this).text() == 'Open menu') {
            $('ul.mobile').show();
            $(this).text('Close menu');
        } else {
            $('ul.mobile').hide();
            $(this).text('Open menu');

        }
        
    });

    // Testimonial slider home page
    $('.testimonials_slider').slick({
        arrows:false,
        dots:true,
    });

    // Top slider home page
    $('.homeslider').slick({
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>,'
    });

    // Counter
   // Функция для запуска анимации
   function startCounter($counter) {
    var target = $counter.data('target'); // Получаем целевое значение из атрибута data-target
    var count = 0; // Начальное значение

    $counter.text(count); // Устанавливаем начальное значение

    // Анимация
    $({ countNum: count }).animate({ countNum: target }, {
        duration: 2000, // Длительность анимации в миллисекундах
        easing: 'swing', // Эффект сглаживания
        step: function() {
            $counter.text(Math.floor(this.countNum)); // Обновляем текст на каждом шаге
        },
        complete: function() {
            $counter.text(this.countNum); // Устанавливаем конечное значение
        }
    });
}

// Событие прокрутки
$(window).on('scroll', function() {
    $('.count').each(function() {
        var $counter = $(this);
        var offset = $counter.offset().top; // Положение блока
        var windowScroll = $(window).scrollTop() + $(window).height(); // Высота прокрутки окна

        // Проверяем, видим ли элемент и если анимация еще не была запущена
        if (offset < windowScroll && !$counter.data('animated')) {
            startCounter($counter); // Запускаем анимацию
            $counter.data('animated', true); // Устанавливаем флаг, чтобы анимация не запускалась повторно для этого элемента
        }
    });
});

});