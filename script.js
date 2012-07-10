
$(document).ready(function(){
    var cur = -1;
    var $html = $('html, body');
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
        $html.stop().animate({
            scrollTop: $li.offset().top - blueBarHeight
        }, 75);
        // $(document).scrollTop($li.offset().top-blueBarHeight);
    };

    // bindings

    Mousetrap.bind('j', function(){         // scroll down one item
        cur++;
        doScroll();
        return; 
    });
    Mousetrap.bind('k', function(){         // scroll up one item
        cur--;
        doScroll();
        return; 
    });
    Mousetrap.bind('u', function(){         // scroll to top
        cur = 0;
        doScroll();
        return; 
    });
    Mousetrap.bind('g f', function(){       // go to feed on 'g f'
        window.open("/", "_self");
    })
    Mousetrap.bind('g m', function(){       // go to messages on 'g m'
        window.open("/messages/", "_self");
        return;
    });
    Mousetrap.bind('g e', function() { window.open("/events/", "_self") }); // go to events on 'g e'

});
