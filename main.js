$(function() {
    setTimeout(function(){
        $('.start p').fadeIn(1600);
    },500); 
    setTimeout(function(){
        $('.start').fadeOut(500);
    },2500); 
});

$(function(){
$('.burger-btn').on('click', function () {
    $('.burger-btn, .main-menue').toggleClass('show');
});
})