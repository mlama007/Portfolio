//Carousel//
$(document).ready(function(){

    // Activate Carousel
    $(".myCarousel").carousel({interval: 3000});
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $(".myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $(".myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $(".myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $(".myCarousel").carousel(3);
    });
    $(".item5").click(function(){
        $(".myCarousel").carousel(4);
    });
    $(".item6").click(function(){
        $(".myCarousel").carousel(5);
    });
    $(".item7").click(function(){
        $(".myCarousel").carousel(6);
    });
    $(".item8").click(function(){
        $(".myCarousel").carousel(7);
    });
    $(".item9").click(function(){
        $(".myCarousel").carousel(8);
    });
    $(".item10").click(function(){
        $(".myCarousel").carousel(9);
    });
    $(".item11").click(function(){
        $(".myCarousel").carousel(10);
    });
    $(".item12").click(function(){
        $(".myCarousel").carousel(11);
    });
    $(".item13").click(function(){
        $(".myCarousel").carousel(12);
    });
    $(".item14").click(function(){
        $(".myCarousel").carousel(13);
    });
    $(".item15").click(function(){
        $(".myCarousel").carousel(14);
    });
    $(".item16").click(function(){
        $(".myCarousel").carousel(15);
    });
    $(".item17").click(function(){
        $(".myCarousel").carousel(16);
    });
    $(".item18").click(function(){
        $(".myCarousel").carousel(17);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $(".myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $(".myCarousel").carousel("next");
    });
    

    /*scroll*/
    $("#aboutme").click(function() {
        $('html,body').animate({
            scrollTop: $(".aboutMe").offset().top},
            'slow');
    });

    $(".projectsroll").click(function() {
        $('html,body').animate({
            scrollTop: $(".projectSection").offset().top},
            'slow');
    });

    $("#contactme").click(function() {
        $('html,body').animate({
            scrollTop: $(".Contact").offset().top},
            'slow');
    });

});


