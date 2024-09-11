$(function () {
    /* agregamos o quitamos una clase al botón de navegación 
    para que pueda cambiar la apariencia del botón/icono 
    y que este sea mas intuitivo y dinámico cada vez que se clickea*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    $('#menu-navegacion .navbar-nav a').click(function () {
        $('.boton-menu').removeClass('icono-cerrar');

        /* contraemos menu de navegacion en mobile cambiando clase show por hide*/
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });


    var swiper = new Swiper('#animacion', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2800,
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        speed: 600,
        effect: 'fade',
        grabCursor: true,
        loop: true,
    });


    /* js para modal venobox del video promocional*/
    $('.venobox-modal-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(255,255,255,0.5)',
        border: '8px',
        overlayClose: true,
        spinner: 'wandering-cubes'
    });

    /* js para contador de los premios*/
    $('.counter').counterUp();


    /* js para la animacion de fecha en el formulario*/
    $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        today: 'Hoy',
        clear: 'Borrar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 0,
        format: 'dddd dd !de mmmm !del yyyy',
        formatSubmit: 'dd/mm/yyyy',

        /* habilitamos seleccionar meses y años*/
        selectYears: 3,
        selectMonths: true,

        /* filtramos dias habiles iniciales a finales al seleccionar*/
        min: true,
        max: 730,

        /* capturamos la fecha al dia de hoy y mostramos en formulario*/
        onStart: function () {
            var date = new Date();
            this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
        }
    });


    /* habilitamos seleccionar meses y años en el formulario*/
    $('.timepicker').pickatime({
        clear: 'Borrar',
        interval: 60,
        min: [8, 00],
        max: [17, 00]
    });

    /* validaciones del formulario*/
    $('#formulario').parsley({
        errorClass: 'is-invalid text-danger',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
        errorTemplate: '<li></li>',
        trigger: 'change',
        triggerAfterFailure: 'change'
    });


    /* encabezado fijo barra de navegación*/
    $('#menu-navegacion').stickit({
        className:'Menu_fijo',
    });

    /* animacion del scroll en los enlaces de la barra de navegación*/
    $("#menu-barra-mobile a").mPageScroll2id({
        scrollSpeed: 1500,
        offset: 50,
        highlightClass: 'active'
    });
});

