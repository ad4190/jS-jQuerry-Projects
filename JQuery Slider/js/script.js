$(document).ready(function(){
    //alert("JS loads");
    //set variable
    var speed=500;//fade speed
    var autoswitch = true;//auto slider option
    var autoswitch_speed = 4000; //auto slider speed

    //add initial active class
    $('.slide').first().addClass('active');

    //hide all slides
    $('.slide').hide();

    //show first slide
    $('.active').show();

    //next button logic
    $('#next').on('click', nextSlide);
    //prev button logic
    $('#prev').on('click', prevSlide);


    //autoslide
    if(autoswitch == true){
        setInterval(nextSlide,autoswitch_speed);
    }

    //nextSlide function
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    //prevSlide function
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});