// Main slide
// $(document).ready(function() {
  $('.sl').slick({
    dots: true,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint:376,
        settings: {
         fade:false,
        }
      }
    ]
});
// }); 
// Slide3
$('.sl3').slick({
  cssEasy: 'easy-in',
  slidesToScroll: 1, 
  centerMode: true, 
  arrows:false,             
  variableWidth: true, 
  arrows: true,
  prevArrow: '.slide3_prev',
  nextArrow: '.slide3_next',
  speed: 800,
  responsive: [
    {
      breakpoint:376,
      settings: {
        dots:true,
        arrows:false
      }
    }
  ]
});
// Slide2
$('.slider-pro').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  variableWidth: true,
  arrows: false,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint:376,
      settings: {
        dots:true,
        arrows:false
      }
    }
  ]
});
// Block9
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




