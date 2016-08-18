(function($){

	$.fn.filterSearch = function() {
		
		$("#keyWord").keyup(function() {
			
		var li, i;

		var input = $("#keyWord").val().toUpperCase();
//		console.log(input);
			
		li = $("#myUl li");
	
		for (i = 0; i < li.length; i++) {
			
			
//			console.log($(li[i]).text());
			
			if ($(li[i]).text().toUpperCase().indexOf(input) > -1) {
				
//				alert('HAS THIS WORD IN IT!');
				
				$(li[i]).css("display", "block");
			} else {
				$(li[i]).css("display", "none");

			}
		}
	});
	};
}) (jQuery);