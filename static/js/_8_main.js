$(document).ready(function() {
    $('.overlay__intro').addClass('is-hide');
    if ($(window).width() > 767) {
        delay($('header'),1600);
        delay($('.scroll'), 2200);
    }
});

function delay(el,timer) {
    el.delay(parseInt(timer)).queue(function(next) {
        $(this).addClass("is-visible");
        next();
    });
}

var mySplitText = new SplitText("#quote", {type:"words,chars"});
var mySplitText2 = new SplitText("#quote2", {type:"words,chars"});

TweenMax.staggerFrom(mySplitText.chars, 0.6, {opacity:0, scale:0, y:-60, ease:Power1.easeOut, delay: 0.8}, 0.02, allDone1);
if ($(window).width() > 767) {
    TweenMax.staggerFrom(mySplitText2.chars, 0.3, {opacity:0, scale:0, y:40, ease:Power1.easeOut, delay: 1.1}, 0.02, allDone2);
} else {
    TweenMax.staggerFrom(mySplitText2.chars, 0.3, {opacity:0, scale:0, y:-40, ease:Power1.easeOut, delay: 1.4}, 0.02, allDone2);
}

function allDone1(){
    mySplitText.revert();
}
function allDone2(){
    mySplitText2.revert();
}