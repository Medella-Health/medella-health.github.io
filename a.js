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

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');  ga('create', 'UA-42117548-1', 'auto');
 ga('send', 'pageview');