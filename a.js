var $root = $('html, body');
console.log('fuck')
$('a[href*=#]').click
(
	function()
	{
		if(this.getAttribute("href") === "#join")
		{
			var href = $.attr(this, 'href');
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
			$(this).next().slideToggle("fast");
		}
	}
);

particlesJS.load('particle', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});