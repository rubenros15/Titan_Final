$(function() {		
	
	var $container = $('.works');
    $container.isotope({
        filter: '*',
		itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.lista-works a').click(function(){
        $('.lista-works a').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
	
});