document.addEventListener('touchmove', function(e) { 
    e.preventDefault(); 
});

var section = document.querySelector('main');
var sectionHeight = section.getBoundingClientRect().height;

var targetY = 0;

VirtualScroll.on(function(e) {
	e.deltaY; // <- amount of pixels scrolled vertically since last call
    targetY += e.deltaY;
    targetY = Math.max( (sectionHeight - window.innerHeight) * -1, targetY);
    targetY = Math.min(0, targetY);
});

var currentY = 0, ease = 0.08;

var run = function() {
    requestAnimationFrame(run);
    currentY += (targetY - currentY) * ease;

    $(function(){
        $("[data-scroll]").click(function(e){
            var target = 0;
            e.preventDefault();
            var scrollTo = $(this).attr('data-scroll');
            target = $("[data-scroll-target='" + scrollTo + "']");
            targetY = ((target.offset().top)*-1) + currentY;
        });
    });

    var t = 'translateY(' + currentY + 'px) translateZ(0)';
    var s = section.style;
    s["transform"] = t;
    s["webkitTransform"] = t;
    s["mozTransform"] = t;
    s["msTransform"] = t;

    var st = currentY;
    var wh = $(window).height(),
        ww = $(window).width();

    $('[data-visible]').each(function(){

        var elem = $(this);

        if (isElementInViewport(elem)) {
            elem.addClass("is-visible");
        }
    })

    function setWindowDimension () {
        wh = $(window).height();
        ww = $(window).width();     
    }

    $(window).resize(function(){
        setWindowDimension();
    })

    function isElementInViewport (el) {
        el = el[0];
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= wh-100
        );
    }
    $('.parallax-bottom').css({
        '-webkit-transform' : "translate3d(0px," + st/8 + "px, 0px)",
        '-moz-transform'    : "translate3d(0px," + st/8 + "px, 0px)",
        '-ms-transform'     : "translate3d(0px," + st/8 + "px, 0px)",
        '-o-transform'      : "translate3d(0px," + st/8 + "px, 0px)",
        'transform'         : "translate3d(0px," + st/8 + "px, 0px)"
    });
    if ($(window).width() > 768) {
        $('.parallax-bg').css({
            '-webkit-transform' : "translate(0px," + st/14 + "px)",
            '-moz-transform'    : "translate(0px," + st/14 + "px)",
            '-ms-transform'     : "translate(0px," + st/14 + "px)",
            '-o-transform'      : "translate(0px," + st/14 + "px)",
            'transform'         : "translate(0px," + st/14 + "px)"
        });
    }
    var scrollbarHeight = 0.1*window.innerHeight;
    $('.scrollbar').css({'height': scrollbarHeight + "px"});
    var scrollbar = ((currentY/(sectionHeight - window.innerHeight))*-1)*(window.innerHeight)/(1 + (scrollbarHeight/window.innerHeight));
    $('.scrollbar').css({
        '-webkit-transform' : "translate3d(0px," + scrollbar + "px, 0px)",
        '-moz-transform'    : "translate3d(0px," + scrollbar + "px, 0px)",
        '-ms-transform'     : "translate3d(0px," + scrollbar + "px, 0px)",
        '-o-transform'      : "translate3d(0px," + scrollbar + "px, 0px)",
        'transform'         : "translate3d(0px," + scrollbar + "px, 0px)"
    });
}

run();