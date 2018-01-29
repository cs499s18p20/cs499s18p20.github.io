$(document).ready(function() {

	var docHeight = $(window).height();
	var footerHeight = $('footer').outerHeight();
	var footerTop = $('footer').position().top + footerHeight;

	if (footerTop < docHeight) {
		$('footer').css('margin-top', 15 + (docHeight - footerTop) + 'px');
	}
});