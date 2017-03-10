// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame =
(
	function()
	{
		return  window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			function(callback)
			{
				window.setTimeout(callback, 1000 / 60);
			};
	}
)();

// main function
function scrollToY(scrollTargetY, speed, easing)
{
	// scrollTargetY: the target scrollY property of the window
	// speed: time in pixels per second
	// easing: easing equation to use

	var scrollY = window.scrollY;
	var scrollTargetY = scrollTargetY || 0;
	var speed = speed || 2000;
	var easing = easing || 'easeOutSine';
	var currentTime = 0;

	// min time .1, max time .8 seconds
	var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	var PI_D2 = Math.PI / 2;
	var easingEquations =
	{
		easeOutSine: function(pos)
		{
			return Math.sin(pos * (Math.PI / 2));
		},
		easeInOutSine: function(pos)
		{
			return (-0.5 * (Math.cos(Math.PI * pos) - 1));
		},
		easeInOutQuint: function(pos)
		{
			if ((pos /= 0.5) < 1)
			{
				return 0.5 * Math.pow(pos, 5);
			}
			else
			{
				return 0.5 * (Math.pow((pos - 2), 5) + 2);
			}
		}
	};

	// add animation loop
	function tick()
	{
		currentTime += 1 / 60;

		var p = currentTime / time;
		var t = easingEquations[easing](p);

		if (p < 1)
		{
			requestAnimFrame(tick);
			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
		}
		else
		{
			console.log('scroll done');
			window.scrollTo(0, scrollTargetY);
		}
	}
	// call it once to get started
	tick();
}

// scroll it!
document.getElementById('scroll').onclick = function()
{
	scrollToY(Math.max(document.documentElement.clientHeight, window.innerHeight || 0), 600, 'easeInOutQuint');
}

/*var jobs = document.getElementsByClassName("job");
for(var i = 0; i < jobs.length; ++i)
{
	jobs[i].onclick = function()
	{
		alert('fuck')
		if(window.location.hash === this.getAttribute("href"))
		{
			history.replaceState("", document.title, window.location.pathname + window.location.search);
			return false;
		}
	}
}*/

var TINY={};function T$(i){return document.getElementById(i)}function T$$(e,p){return p.getElementsByTagName(e)}TINY.accordion=function(){function slider(n){this.n=n;this.a=[]}slider.prototype.init=function(t,e,m,o,k){var a=T$(t),i=s=0,n=a.childNodes,l=n.length;this.s=k||0;this.m=m||0;for(i;i<l;i++){var v=n[i];if(v.nodeType!=3){this.a[s]={};this.a[s].h=h=T$$(e,v)[0];this.a[s].c=c=T$$('div',v)[0];h.onclick=new Function(this.n+'.pr(0,'+s+')');if(o==s){h.className=this.s;c.style.height='auto';c.d=1}else{c.style.height=0;c.d=-1}s++}}this.l=s};slider.prototype.pr=function(f,d){for(var i=0;i<this.l;i++){var h=this.a[i].h,c=this.a[i].c,k=c.style.height;k=k=='auto'?1:parseInt(k);clearInterval(c.t);if((k!=1&&c.d==-1)&&(f==1||i==d)){c.style.height='';c.m=c.offsetHeight;c.style.height=k+'px';c.d=1;h.className=this.s;su(c,1)}else if(k>0&&(f==-1||this.m||i==d)){c.d=-1;h.className='';su(c,-1)}}};function su(c){c.t=setInterval(function(){sl(c)},20)};function sl(c){var h=c.offsetHeight,d=c.d==1?c.m-h:h;c.style.height=h+(Math.ceil(d/5)*c.d)+'px';c.style.opacity=h/c.m;c.style.filter='alpha(opacity='+h*100/c.m+')';if((c.d==1&&h>=c.m)||(c.d!=1&&h==1)){if(c.d==1){c.style.height='auto'}clearInterval(c.t)}};return{slider:slider}}();
var accordion = new TINY.accordion.slider("accordion");
accordion.init("accordion", "h3");

particlesJS.load('particle', 'particles.json');
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');  ga('create', 'UA-63883319-1', 'auto');
ga('send', 'pageview');
