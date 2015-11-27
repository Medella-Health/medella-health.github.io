var $root = $('html, body');
$(window.location.hash + ' + section').slideToggle("fast");
$('a[href*=#]').click
(
	function()
	{
		var href;
		if((href = this.getAttribute("href")) === "#join")
		{
			$root.animate
			(
				{
					scrollTop: $(href).offset().top
				},
				750,
				function()
				{
					window.location.hash = href;
				}
			);
			return false;
		}
		else
		{
			$(href + ' + section').slideToggle("fast");
		}
	}
);

particlesJS.load('particle', 'particles.json');