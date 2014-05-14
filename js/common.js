head.ready(function() {
	$(document).click(function(){
		$(".js-search").removeClass("is-active");
		//$(".js-popup").hide();
		$(".js-overlay").hide();
		$("body").removeClass("has-open-popup");
		$(".js-header-drop").removeClass("is-active");
	});  

	$(".js-search-key").on("click", function(event){
		$(this).parents(".js-search").addClass("is-active");
		$(".js-search-text").focus();
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
		event.stopPropagation();
		return false;
	});
	$(".js-header-drop").on("click", function(event){
		event.stopPropagation();
	});
	function fixedMenu() {
		if ($(".js-header-target").length) {
			var top =  $(".js-header-target").offset().top;
	        if ($(window).scrollTop() >= top) {
	            $("body.index-page").addClass("has-fixed-header");
	        }
	        else {
	             $("body.index-page").removeClass("has-fixed-header");
	        }
		}
    }
    fixedMenu();
    $(document).scroll(function(){
        fixedMenu();
    });
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

	$(".js-gallery").each(function(){
		var gallery = $(this);
		var img = gallery.find(".js-gallery-img img");
		var preview_first = gallery.find(".js-gallery-preview a").first();
		var first_img = preview_first.attr("href");
		preview_first.addClass("is-active");
		img.attr("src", first_img);
	});
	$(".js-gallery-preview a").on("click", function(){
		var img = $(this).attr("href");
		$(".js-gallery-preview a").removeClass("is-active");
		$(this).addClass("is-active");
		$(this).parents(".js-gallery").find(".js-gallery-img img").attr("src", img)
		return false;
	});

	function choose() {
        var number = $(".js-choose");
        number.each(function(){
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus");
            var minus = $(this).find(".js-minus");
            plus.on("click", function(){
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.on("click", function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                else {
                    return false;
                }
            });
        });
    }
    choose();

    $(".js-del-row").on("click", function(){
    	if ($(".js-basket").find("tbody tr").length >= 2) {
    		$(this).parents("tr").addClass("is-remove-ready");
	    	setTimeout(function(){
	    		$("tr.is-remove-ready").remove();
	    	}, 200);
    	}
	    else {
	    	$(".js-basket").remove();
	    	$(".js-basket-action").remove();
	    	$(".js-basket-message").removeAttr("hidden");
	    	//alert();
	    }

    });
    $(".js-validate-form").each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: "has-error",
				rules: {
					firstname: "required",
					lastname: "required",
					username: {
						required: true,
						minlength: 2
					},
					password: {
						required: true,
						minlength: 5
					},
					confirm_password: {
						required: true,
						minlength: 5,
						equalTo: "#password"
					},
					email: {
						required: true,
						email: true
					},
					tel: {
						required: true,
						minlength: 2,
      					digits: true
					},
					address: {
						required: false,
						minlength: 2
					},
					message: {
						minlength: 4
					}
				},
				messages: {
					firstname: "Вас так зовут?",
					lastname: "У вас такая фамилия?",
					password: {
						required: "Пароли не совпадают",
						minlength: "Минимум 5 символов"
					},
					confirm_password: {
						required: "Пароли не совпадают",
						minlength: "Минимум 5 символов",
						equalTo: "Пароли не совпадают"
					},
					email: "Неверный формат",
					address: "Это Ваш адрес?",
					tel: {
						required: "Телефон с ошибкой",
						digits: "Только цифры без пробелов"
					},
					message: {
						required: "Это Ваш вопрос?",
						minlength: "Это Ваш вопрос?"
					}
				}
			});
		}
	});
	$(".js-validate-enter").each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: "has-error",
				rules: {
					password: {
						required: true,
						minlength: 5
					},
					email: {
						required: true,
						email: true
					},
				},
				messages: {
					password: {
						required: "Неверный пароль",
						minlength: "Минимум 5 символов"
					},
					email: "Неверный формат"
				}
			});
		}
	});

	$(".js-popup-link").on("click", function(event){
		var popup = $(this).attr("data-popup");
		$("body").addClass("has-open-popup");
		$("."+popup).parent().fadeIn(200);
		event.stopPropagation();
		return false;
	});
  	$(".js-popup-close").on("click", function(){
  		$(".js-overlay").fadeOut(200); 
  		$("body").removeClass("has-open-popup")
		return false;
	});
  	$(".js-popup").on("click", function(event){
		event.stopPropagation();
	});

});

