$( document ).ready(function() {
	// $(function() {

	// 	$('body').fadeOut(1500);

	// });
	// video-background

	$('#video-bg').YTPlayer({
	    fitToBackground: false,
	    videoId: 'lQ-Xn75tzVI',
	    playerVars: {
	      modestbranding: 0,
	      autoplay: 1,
	      controls: 0,
	      mute: 0,
	      showinfo: 0,
	      branding: 0,
	      rel: 0,
	      autohide: 0,
	      end: 21,
	    }
	});

	// equalHeights
	$('.reason-icon').equalHeights();
	$('.equal-list').equalHeights();
	$('.feedback-card').equalHeights();
	$('.intro-card').equalHeights();
	$('.match').equalHeights();
	$('.tips-equal-wrapper').equalHeights();
	$('.catalog-card').equalHeights();
	// tipy tooltip
	Tippy('.tooltip-lamzac');

	 // smooth scroll
		$("#mnu").on("click","a", function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),

				top = $(id).offset().top;
			
			$('body,html').animate({scrollTop: top}, 700);
		});
		$("#arrow-down").on("click", function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),

				top = $(id).offset().top;
			
			$('body,html').animate({scrollTop: top}, 700);
		});
		
	// form
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "js/mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$('.form_set .thanks').addClass('active');
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
					$.fancybox.close();
				}, 5000);
			});
			return false;
		});
	// attributes delivery to form from button
		// $('button[data-src="#popup-form"]').click(function() {
		// 	var dataFormHead = $(this).data('fhead');
		// 	var dataFormDescription = $(this).data('fdescr');
		// 	var dataFormInfo = $(this).data('finfo');
		// 	var metrika = $(this).data('fmetrika');
		// 	$('.modal_form_head h4').text(dataFormHead);
		// 	$('.modal_form_head p').text(dataFormDescription);
		// 	$('.modal_form_popup [name=form_subject]').val(dataFormInfo);
		// 	$('.modal_form_popup [onsubmit]').text(metrika);
		// });

// masked input
$(function () {
            $.mask.definitions['~'] = "[+-]";
            //$("#date").mask("99/99/9999",{completed:function(){alert("completed!");}});
            //$("#phone").mask("(999) 999-9999");
            //$("#phoneExt").mask("(999) 999-9999? x99999");
            $(".masked-input").mask("8(999)-999-99-99", {
                placeholder: " "
            });
            //$("#tin").mask("99-9999999");
            //$("#ssn").mask("999-99-9999");
            //$("#product").mask("a*-999-a999", { placeholder: " " });
            //$("#eyescript").mask("~9.99 ~9.99 999");
            //$("#po").mask("PO: aaa-999-***");
            //$("#pct").mask("99%");
            //$("input").blur(function() {
            //    $("#info").html("Unmasked value: " + $(this).mask());
            //}).dblclick(function() {
            //    $(this).unmask();
            //});
        });

	// notifycation yved
		// var i = 0;
		// 	function yved(){
		// 	i=1;
		// 	$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);
		// 											В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
		// 	}
		// 	setTimeout(function(){
		// 	setInterval(
		// 	function(){
		// 	i=i+1;
		// 	if(i>10) i=1;
		// 											10 - количество уведомлений
		// 	$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);
		// 											В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
		// 	},20000);
		// 											15000 - задержка в мс меду показами уведомлений
		// 	yved();
		// 	},12000);
		// 											5000 - задержка в мс перед показом первого уведомления
});
