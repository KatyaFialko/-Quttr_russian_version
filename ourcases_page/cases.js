
/*слайдеры для квартир на продажу*/
$('.living-room1').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev1',
    nextArrow: '.next1'
   
});
$('.living-room2').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev2',
    nextArrow: '.next2'
   
});
$('.living-room3').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev3',
    nextArrow: '.next3'
   
});
$('.living-room4').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev4',
    nextArrow: '.next4'
   
});
$('.living-room5').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev5',
    nextArrow: '.next5'
   
});
$('.living-room6').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev6',
    nextArrow: '.next6'
   
});
$('.living-room7').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev7',
    nextArrow: '.next7'
   
});
$('.living-room8').slick({
    cssEasy: 'easy-in',
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,             
    variableWidth: true,
    arrows:true,
    prevArrow: '.prev8',
    nextArrow: '.next8'
   
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
$('.button-was-done1').click(function(){
    $(".text-fon1").fadeToggle(400);
});
$('.button-was-done2').click(function(){
    $(".text-fon2").fadeToggle(400);
});
$('.button-was-done3').click(function(){
    $(".text-fon3").fadeToggle(400);
});
$('.button-was-done4').click(function(){
    $(".text-fon4").fadeToggle(400);
});
$('.button-was-done5').click(function(){
    $(".text-fon5").fadeToggle(400);
});
$('.button-was-done6').click(function(){
    $(".text-fon6").fadeToggle(400);
});
$('.button-was-done7').click(function(){
    $(".text-fon7").fadeToggle(400);
});
$('.button-was-done8').click(function(){
    $(".text-fon8").fadeToggle(400);
});
$('.button-more').click(function(){
    $(".apartments4").fadeToggle(400);
});

