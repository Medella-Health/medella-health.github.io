var foo;
var j = 0;
document.getElementById('scroll').onclick = function()
{
	foo = setInterval
	(
		function()
		{
			window.scroll(0, j += 10);
			if(j >= Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
			{
				j = 0;
				clearInterval(foo);
			}
		},
		1
	);
};
particlesJS.load('particle', 'particles.json');
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');  ga('create', 'UA-63883319-1', 'auto');
ga('send', 'pageview');