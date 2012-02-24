(function() {
    var aInBackground, aInBorder, aOutBackground, aOutBorder, fadePage, footerAInBackground, footerAOutBackground, linksInBackground, linksOutBackground;

    linksInBackground = function() {
        return $(this).animate({
            'backgroundColor': 'rgba(255, 255, 255, 1)'
        }, {
            duration: 250,
            queue: false
        });
    };

    linksOutBackground = function() {
        return $(this).animate({
            'backgroundColor': 'rgba(255, 255, 255, 0.01)'
        }, {
            duration: 250,
            queue: false
        });
    };

    aInBorder = function() {
        return $(this).animate({
            'borderBottomColor': 'rgba(255, 255, 255, 0.01)'
        }, {
            duration: 250,
            queue: false
        });
    };

    aOutBorder = function() {
        return $(this).animate({
            'borderBottomColor': 'rgba(255, 255, 255, 1)'
        }, {
            duration: 250,
            queue: false
        });
    };

    aInBackground = function() {
        return $(this).animate({
            'backgroundColor': 'rgba(255, 255, 255, 1)'
        }, {
            duration: 250,
            queue: false
        }).animate({
            'color': '#5A82AF'
        }, {
            duration: 250,
            queue: false
        });
    };

    aOutBackground = function() {
        return $(this).animate({
            'backgroundColor': 'rgba(255, 255, 255, 0.01)'
        }, {
            duration: 250,
            queue: false
        }).animate({
            'color': '#2D445E'
        }, {
            duration: 250,
            queue: false
        });
    };

    footerAInBackground = function() {
        return $(this).animate({
            'backgroundColor': 'rgba(255, 255, 255, 1)'
        }, {
            duration: 250,
            queue: false
        }).animate({
            'color': '#99B3FF'
        }, {
            duration: 250,
            queue: false
        });
    };

    footerAOutBackground = function() {
        return $(this).animate({
            'backgroundColor': 'rgba(255, 255, 255, 0.01)'
        }, {
            duration: 250,
            queue: false
        }).animate({
            'color': '#708FAF'
        }, {
            duration: 250,
            queue: false
        });
    };

    fadePage = function() {
        return $('#fade-wrapper').fadeIn(1200);
    };

    $('.rgba #links li').hover(linksInBackground, linksOutBackground);
    $('.rgba a').not('.rgba #links a').hover(aInBorder, aOutBorder);
    $('.rgba section a').not('.rgba #links a').not('.rgba footer a').hover(aInBackground, aOutBackground);
    $('.rgba footer a').not('.rgba #links a').not('.rgba section a').hover(footerAInBackground, footerAOutBackground);

    $('a').tipTip({
        'defaultPosition': 'top',
        'delay': 250
    });
    $('.top-link').tipTip({
        'defaultPosition': 'top',
        'delay': 250
    });
    $('.bottom-link').tipTip({
        'defaultPosition': 'bottom',
        'delay': 250
    });

    $(document).ready(fadePage);
}).call(this);
