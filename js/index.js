$(document).ready(function(){
    var winh=$(window).height(),
    ubberh=$('.upper-bar').innerHeight(),
    navh=$('.navbar').innerHeight() ;

    $('.slider, .carousel-item').height(winh-(ubberh+navh))
    $('.work button').on('click',function(){
        $(this).addClass('activ').siblings('button').removeClass('activ')

        if($(this).data('shiful')==='ALL'){
            $('.shiful-img .col-sm').css('opacity','1')
        }else{
            $('.shiful-img .col-sm').css('opacity','.08')

           $($(this).data('shiful')).parent().css('opacity','1')
        }
    })

    $('.timer').countTo({
        from: 0,
        to: 75,
        speed: 3000,
        refreshInterval: 50
    });
  
    $('.timer-one').countTo();
    $('.timer-tow').countTo({
        from: 3000,
        to: 13222,
        speed: 3000,
        refreshInterval: 50
    });


    $('.timer-therr').countTo({
        from: 1000,
        to: 3689,
        speed: 3000,
        refreshInterval: 50
    });

    $(window).scroll(function(){
if($(window).scrollTop() >= 700){
    $('.up').fadeIn(400)
}else{
    $('.up').fadeOut(400)
}
    })


    $('.up').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000)
    })
    $('.form .tags-input').on('keyup', function (e) {
		
		var keyboardKey = e.keyCode || e.which,
			inputVal = $(this).val().slice(0, -1).toLowerCase();
			
    //add span with tag name when press (,) and add class the same name as tag on parent('.tag') for Validate
		if (keyboardKey === 188 && !$('.form .tags').hasClass(inputVal)) {
			
			$('.form .tags').prepend('<span class="tag-span">' + inputVal + ' <i class="fas fa-times"></i> </span>');
			$('.form .tags').addClass(inputVal);
			$(this).val('');
			
		} else if (keyboardKey === 188 && $('.form .tags').hasClass(inputVal)) {
			
			$(this).val('This tag is already exist');
		}
	});
	
 
	$('.form .tags').on('click', '.tag-span .fa-times', function () {
    
		$(this).parent('.tag-span').fadeOut(500, function () {
      $(this).remove();
    });
		$('.form .tags').removeClass($(this).parent('.tag-span').text());
    });
    


    $('.tag-addd').on('click',function(e){
        var code = e.keyCode || e.which;
        if(code === 188){
            var thisval=$(this).Val().slice(0,-1);
            console.log(thisval)
            $('.tags').append('<span class="taged"><i class="fas fa-times-circle"></i>' + thisval + '</span>')
            $(this).val('')
        }
    })
})