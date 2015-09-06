$(function() {
	var stopVideo = function(player) {
    var vidSrc = player.prop('src');
    player.prop('src', ''); // to force it to pause
    player.prop('src', vidSrc);
  };
	function checkViewPort(width) {
		if (width <= 320 || width <= 420 || width <= 756) {
			document.getElementById('video-link').setAttribute("href", "https://youtu.be/EN5xqCNbf9c");
			document.getElementById('video-link').setAttribute("target", "_blank");
		} else {
			$('#video-link').on('click', function(e) {
				e.preventDefault();
				if ($('.video-overlay').hasClass('hide')) {
		    		$('.video-overlay').removeClass('hide');
		    }
			});
			$('#hide-cta').on('click', function(e) {
				e.preventDefault();
				stopVideo($('.music-video'));
				$('.video-overlay').addClass('hide');
			});
		}
	};
	var viewportWidth = $(window).width();
	checkViewPort(viewportWidth);
});
