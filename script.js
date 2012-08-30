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
            $html.stop().animate({
                scrollTop: 0
            }, 100);
            cur = -1;
            return;
        } else {
            $html.stop().animate({
                scrollTop: $li.offset().top - blueBarHeight
        }, 75);
        };
        $('#home_stream li.uiUnifiedStory:eq(' + cur + ')').waypoint(opts);
        console.log(cur);
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
        cur = -1;
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
    Mousetrap.bind('r', function(){                                         // focus comments box on when 'r' is pressed
        setTimeout(function(cur){
            $('#home_stream li.uiUnifiedStory:eq(' + cur + ') textarea').focus();
        }, 3000);
        return;
    });
    Mousetrap.bind('l', function(){                                         // like post by pressing 'l'
        $('#home_stream li.uiUnifiedStory:eq(' + cur + ') button').click();
        return;
    });
    Mousetrap.bind('n', function(){
        $('#fbNotificationsFlyout').toggle();
     
    });
});
