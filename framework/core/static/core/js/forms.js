(function() {
    var changed, messageBlur, messageFocus, messageKeypress, toggleSubmitted;

    messageFocus = function() {
        $(this).animate({
            'height': '150px'
        }, {
            duration: 250,
            queue: false
        });
        return $('label').animate({
            'color': '#bbb'
        }, {
            duration: 250,
            queue: false
        });
    };

    changed = false;

    messageBlur = function() {
        if (!changed) {
            $(this).animate({
                'height': '21px'
            }, {
                duration: 250,
                queue: false
            });
            return $('label').css({
                'visibility': 'visible'
            }).animate({
                'color': '#333'
            }, {
                duration: 250,
                queue: false
            });
        }
    };

    messageKeypress = function() {
        changed = true;
        return $('label').animate({
            'color': '#ddd'
        }, {
            duration: 250,
            queue: false
        }).css({
            'visibility': 'hidden'
        });
    };

    toggleSubmitted = function() {
        return $('#submitted').delay(6000).slideToggle('slow');
    };

    $('#message').focus(messageFocus);
    $('#message').blur(messageBlur);
    $('#message').keypress(messageKeypress);

    $(document).ready(toggleSubmitted);
}).call(this);
