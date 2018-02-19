$(document).ready(function() {
    $('.fullpage').fullpage({
        dragAndMove: true,
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        anchors: ['landing', 'about', 'work', 'contact'],
        navigationTooltips: ['Landing', 'About', 'Work', 'Contact'],
        onLeave: function(index, nextIndex, direction) {
            $(this).removeClass('section--animate');
            $('.number__text').fadeOut();
        },
        afterLoad: function(anchorLink, index) {
            $(this).addClass('section--animate');
            $('.number__text').html('00' + String(index));
            $('.number__text').fadeIn();
        }
    });
});
