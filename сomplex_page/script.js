$('.slider-pro').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        variableWidth: true,
        arrows: false,
        arrows:true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
                {
                        breakpoint: 650,
                        settings: {
                                dots: true,
                                arrows:false
                        }
                }
        ]
});
$(".five li ul").hide();
$(".five li:has('.submenu')").hover(
    function(){
        $(".five li ul").stop().fadeToggle(300);}
);
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



function DropDown(el) {
        this.wrapper = el;
        this.placeholder = this.wrapper.children('span');
        this.opts = this.wrapper.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
}
DropDown.prototype = {
        initEvents : function() {
                let obj = this;

                obj.wrapper.on('click', function(event){
                        $(this).toggleClass('active');
                        return false;
                });

                obj.opts.on('click',function(){
                        let opt = $(this);
                        obj.val = opt.text();
                        obj.index = opt.index();
                        obj.placeholder.text(obj.val);
                });
        },
        getValue : function() {
                return this.val;
        },
        getIndex : function() {
                return this.index;
        }
};

$(function() {

        let wrapper = new DropDown( $('#wrapper') );

        $(document).click(function() {
                $('.wrapper').removeClass('active');
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