function closeNav(){document.getElementById("myNav").style.display="none",document.getElementById("myNav").style.opacity="0"}function openNav(){document.getElementById("myNav").style.display="block",document.getElementById("myNav").style.opacity="1"}function onScroll(){var o=$(document).scrollTop();$("nav a").each(function(){var t=$(this),e=$(t.attr("href"));e.position().top<=o&&e.position().top+e.height()>o?($("nav--desktop-link").removeClass("active"),t.addClass("active")):t.removeClass("active")})}$(document).ready(function(){$(document).on("scroll",onScroll),$('a[href^="#"]').on("click",function(o){o.preventDefault(),$(document).off("scroll"),$("a").each(function(){$(this).removeClass("active")}),$(this).addClass("active");var t=this.hash,e=$(t);$("html, body").stop().animate({scrollTop:e.offset().top},600,"swing",function(){window.location.hash=t,$(document).on("scroll",onScroll)})})});