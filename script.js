
$(document).ready(function(){
    var cur = -1;
    var blueBarHeight = $('#blueBar').height(); // floated bar
    var isFocus = function(){
        return $('input,textarea').is(':focus');
    };
    var doScroll = function(){
        var $li = $('#home_stream li.uiUnifiedStory:eq(' + cur + ')');
        if ($li.length === 0) {
            cur = 0;
            return;
        }
        $(window).scrollTop($li.offset().top-blueBarHeight);
    };

    // bindings

    Mousetrap.bind('j', function(){
        cur++;
        doScroll();
        return; 
    });
    Mousetrap.bind('k', function(){
        cur--;
        doScroll();
        return; 
    });
    Mousetrap.bind('u', function(){
        cur = 0;
        doScroll();
        return; 
    });
});
