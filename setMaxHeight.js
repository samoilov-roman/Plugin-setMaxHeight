/*  setMaxHeight.js v1.0, 

(c) 2016 Roman Samoilov */

(function($) {

	$.fn.setMaxHeight = function() {

		return this.each(function() {
			var $this = $(this).children();

			function setMaxHeightInit() {
				var maxHeight = 0;

				$this.height("auto").each(function () {
        if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();
	        }
		    }).height(maxHeight);

			};

			setMaxHeightInit();
			$(window).resize(function() {
				setMaxHeightInit();
			});

		});

	};

})(jQuery);
