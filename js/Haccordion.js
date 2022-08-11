/**
 * @author Alex
 */


(function($) {
	$.fn.extend({
		"Haccordion": function(options) {
			var defaults = {};
			options = $.extend(defaults, options); 
			this.each(function() {
				var $that = $(this);
				var $dl = $(this).children("dl");
				var $dt = $dl.children("dt");
				var $dd = $dl.children("dd");
				var dtWidth = $dt.width();
				var ddWidth = $dd.width(); 
				$that.width(dtWidth * $dl.length + ddWidth);
				//$that.height($dl.height());
				
				//init dl postion
				$dl.each(function(index) {
					var leftX = index * dtWidth;
					$(this).css({
						left: leftX
					});
				});
				
				//add click event for dt
				$dt.on("click", function() {
					var leftX = 0;
					var index = $dl.index($(this).parent("dl"));
					for(var i = 0; i < $dl.length; i++){
						if(index >= i){
							leftX = dtWidth * i;
							$dl.eq(i).animate({
								left: leftX
							}, 500);
						}else{
							leftX = dtWidth * i + ddWidth;
							$dl.eq(i).animate({
								left: leftX
							}, 500);
						}
					}
					
					//change arrow
					$(this).parent("dl").siblings("dl").each(function() {
						$(this).find("div.arrow").children("div").removeClass("arrow_div_down").addClass("arrow_div_right");
					});
					$(this).find("div.arrow").children("div").removeClass("arrow_div_right").addClass("arrow_div_down");
				});
				
				$dt.eq(0).trigger("click");
				
				
			});//global each function end
			
		}	
	});
	
})(jQuery);