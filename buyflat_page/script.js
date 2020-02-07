// INPUTS
$(function () {
    $("#slider-range").slider({
        range: true,
        step: 100,
        min: 10000,
        max: 10000000,
        values: [10000, 10000000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0]);
            $("#amount_1").val(ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0));
    $("#amount_1").val($("#slider-range").slider("values", 1));
    //   For first input
    $("input#amount").change(function () {
        var value1 = $("input#amount").val();
        var value2 = $("input#amount_1").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#amount").val(value1);
        }
        $("#slider-range").slider("values", 0, value1)
    });
    //   For second input
    $("input#amount_1").change(function () {
        var value1 = $("input#amount").val();
        var value2 = $("input#amount_1").val();
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#amount_1").val(value2);
        }
        $("#slider-range").slider("values", 1, value2)
    });
    // Filter to input
    jQuery("#amount, #amount_1").keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key)
        if (!/\d/.test(keyChar)) return false;
    });
});
//   Slide-range1
$(function () {
    $("#slider-range1").slider({
        range: true,
        step: 100,
        min: 10000,
        max: 10000000,
        values: [10000, 10000000],
        slide: function (event, ui) {
            $("#amount1").val(ui.values[0]);
            $("#amount_2").val(ui.values[1]);
        }
    });
    $("#amount1").val($("#slider-range1").slider("values", 0));
    $("#amount_2").val($("#slider-range1").slider("values", 1));
    //   For first input
    $("input#amount1").change(function () {
        var value1 = $("input#amount1").val();
        var value2 = $("input#amount_2").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#amount_2").val(value1);
        }
        $("#slider-range1").slider("values", 0, value1)
    });

    //   For second input
    $("input#amount_2").change(function () {
        var value1 = $("input#amount1").val();
        var value2 = $("input#amount_2").val();
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#amount_2").val(value2);
        }
        $("#slider-range1").slider("values", 1, value2)
    });
    // Filter to input
    jQuery("#amount1, #amount_2").keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 9 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39)
            return true;
        keyChar = String.fromCharCode(key);
        if (!/\d/.test(keyChar)) return false;
    });
});
//   Slide-range2
$(function () {
    $("#slider-range2").slider({
        range: true,
        step: 100,
        min: 10000,
        max: 10000000,
        values: [10000, 10000000],
        slide: function (event, ui) {
            $("#amount2").val(ui.values[0]);
            $("#amount_3").val(ui.values[1]);
        }
    });
    $("#amount2").val($("#slider-range2").slider("values", 0));
    $("#amount_3").val($("#slider-range2").slider("values", 1));
    //   For first input
    $("input#amount2").change(function () {
        var value1 = $("input#amount2").val();
        var value2 = $("input#amount_3").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#amount2").val(value1);
        }
        $("#slider-range2").slider("values", 0, value1)
    });
    //   For second input
    $("input#amount_3").change(function () {
        var value1 = $("input#amount2").val();
        var value2 = $("input#amount_3").val();
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#amount_3").val(value2);
        }
        $("#slider-range2").slider("values", 1, value2)
    });
    jQuery("#amount2, #amount_3").keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 9 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39)
            return true;
        keyChar = String.fromCharCode(key);
        if (!/\d/.test(keyChar)) return false;
    });
});
// Avaliable objects
$('.slider-pro').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 3,
    variableWidth: true,
    arrows: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{
        breakpoint: 650,
        settings: {
            dots: true,
            arrows: false
        }
    }]
});
/*слайдеры для квартир на продажу*/
$('.living-room1').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev1',
    nextArrow: '.next1'

});
$('.living-room2').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev2',
    nextArrow: '.next2'

});
$('.living-room3').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev3',
    nextArrow: '.next3'

});
$('.living-room4').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev4',
    nextArrow: '.next4'

});
$('.living-room5').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev5',
    nextArrow: '.next5'

});
$('.living-room6').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev6',
    nextArrow: '.next6'

});
$('.living-room7').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev7',
    nextArrow: '.next7'

});
$('.living-room8').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    arrows: true,
    prevArrow: '.prev8',
    nextArrow: '.next8'

});
// Wrappers

function DropDown(el) {
    this.wrapper = el;
    this.placeholder = this.wrapper.children('span');
    this.opts = this.wrapper.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        let obj = this;

        obj.wrapper.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            let opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {

    let wrapper = new DropDown($('#wrapper'));

    $(document).click(function () {
        $('.wrapper').removeClass('active');
    });
});
$(function () {

    let wrapper = new DropDown($('#wrapper1'));

    $(document).click(function () {
        $('.wrapper1').removeClass('active');
    });
});
$(function () {

    let wrapper = new DropDown($('#wrapper2'));

    $(document).click(function () {
        $('.wrapper2').removeClass('active');
    });
});
$(function () {

    let wrapper = new DropDown($('#wrapper3'));

    $(document).click(function () {
        $('.wrapper3').removeClass('active');
    });
});
$(function () {

    let wrapper = new DropDown($('#wrapper4'));

    $(document).click(function () {
        $('.wrapper4').removeClass('active');
    });
});
let convenient = document.getElementById('convenient');
let arrow = document.getElementById('arrow');

convenient.addEventListener('click', function () {
    convenient.style.opacity = '1';
    arrow.classList.toggle('rotate');
});
arrow.addEventListener('click', function () {
    convenient.style.opacity = '1';
    arrow.classList.toggle('rotate');
});


$(".five li ul").hide();
$(".five li:has('.submenu')").hover(
    function () {
        $(".five li ul").stop().fadeToggle(300);
    }
);
// Add-filter
$('.btn').click(function () {
    $(".wrapper1").fadeToggle({
        duration: 60,
        start: () => {
            $(".wrapper2").fadeToggle(50);
            $(".wrapper3").fadeToggle(50);
            $(".wrapper4").fadeToggle(50);
            $(".parameter-revenue").fadeToggle(50);
            $(".parameter-payback").fadeToggle(50);
        },
        done: () => {
            if ($(".wrapper1").css("display") === "none") {
                $(".wrappers").css("margin-top", "0px")
                $(".btn").css("border-bottom", "1px solid #D8AC7A")
                $(".btn").css("color", "#D8AC7A")
                $(".add-filters").css("top", "0px")
                $(".add-filters img").css("top", "0px")
                $(".arrow-add").attr("src", "img/arrow-add.svg")
                $(".arrow-add").css("margin-bottom", "0")
            } else {
                $(".wrappers").css("margin-top", "150px")
                $(".btn").css("border-bottom", "1px solid white")
                $(".btn").css("color", "white")
                $(".add-filters").css("top", "15px")
                $(".arrow-add").attr("src", "img/arrow-add-close.svg", "margin-bottom", "-5px")
                $(".arrow-add").css("margin-bottom", "-5px")

            }
        }
    });
});
// MODAL WINDOW -----------------------------
// open with button
$('.modal-btn').click(function () {
    $('main').css('filter', 'blur(7px)');
    $('.overlay-suggest').fadeIn();
    $('.overlay-suggest').addClass('disabled');
});
// close with button
$('.suggest-close').click(function () {
    $('.overlay-suggest').fadeOut();
    $('main').css('filter', 'none');
});