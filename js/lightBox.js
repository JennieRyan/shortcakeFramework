(function($){

	$.fn.lightBox = function() {
		$('.allImages img').click(function(e){
			var source = $(this).attr('src');
			var alt =  $(this).attr('alt');

			$("#myBox").css("display", "block");
			$("#myBox img").attr("src", source);
			$("#myBox img").attr("alt", alt);
			$("#caption").text(alt);
		
			});

		$(".close").click(function() { 
		  $('#myBox').css("display", "none");
		});
		
		$('#myBox').click(function(){
			$('#myBox').css("display", "none");
		});

		$("#myBox img").click(function(eve){
			eve.stopPropagation();
		});
	};
}) (jQuery);