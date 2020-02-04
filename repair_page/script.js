$('.sl-home').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next'),
    prevArrow:('.prev'),
    responsive: [
        {
          breakpoint:375,
          settings: {
            arrows:false,
          }
        }
      ]
    
});
$('.sl-home1').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next1'),
    prevArrow:('.prev1'),
    responsive: [
        {
          breakpoint:375,
          settings: {
            arrows:false,
          }
        }
      ]
});
$('.sl-home2').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next2'),
    prevArrow:('.prev2'),
    responsive: [
        {
          breakpoint:375,
          settings: {
            arrows:false,
          }
        }
      ]
});
$('.sl-home3').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next3'),
    prevArrow:('.prev3'),
    responsive: [
        {
          breakpoint:375,
          settings: {
            arrows:false,
          }
        }
      ]
});
//  FORM --------------------------------------
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



