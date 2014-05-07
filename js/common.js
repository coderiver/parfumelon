head.ready(function() {
	$(document).click(function(){
		$(".js-search").removeClass("is-active");
	});  
	$(".js-search-key").on("click", function(event){
		$(this).parents(".js-search").addClass("is-active");
		event.stopPropagation();
	});
	$(".js-search").on("click", function(event){
		event.stopPropagation();
	});
	$(".js-search-clear").on("click", function(){
		$(this).parents(".js-search").find(".js-search-text").val("");
		return false;
	});
	$(".js-header-key").on("click", function(event){
		$(this).toggleClass("is-active");
		$(".js-header-drop").toggleClass("is-active");
		return false;
	});
	function fixedMenu() {
        if ($(window).scrollTop() > 0) {
            $("body").addClass("has-fixed-header");
        }
        else {
             $("body").removeClass("has-fixed-header");
        }
    }
    fixedMenu();
    $(document).scroll(function(){
        fixedMenu();
    });
    console.log($(window).width());
    $(window).resize(function(){
    	console.log($(window).width());
    })

    $(".js-sort-special-key a").on("click", function(){
    	var el = $(this).attr("href");
    	if ($(this).hasClass("is-active")) {
    		$(this).removeClass("is-active");
    		$(".js-sort-special").slideUp(200);
    	}
    	else {
    		$(".js-sort-special-key a").removeClass("is-active");
    		$(this).addClass("is-active");
    		$(".js-sort-special").hide();
    		$("."+el).slideDown(200);
    	}
		return false;
	});
	$(".js-sort-gender a").on("click", function(){
    	$(".js-sort-gender a").removeClass("is-active");
    	$(this).addClass("is-active");
		return false;
	});
	$(".js-sort-options a").on("click", function(){
    	$(".js-sort-options a").removeClass("is-active");
    	$(this).addClass("is-active is-top-sort");
		return false;
	});

});

