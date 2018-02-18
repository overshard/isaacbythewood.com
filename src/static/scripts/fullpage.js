$(document).ready(function() {
    $('.fullpage').fullpage({
        dragAndMove: true,
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        anchors: ['landing', 'about', 'contact'],
        navigationTooltips: ['Landing', 'About', 'Contact'],
        onLeave: function(index, nextIndex, direction) {
            $(this).removeClass('section--animate');
        },
        afterLoad: function(anchorLink, index) {
            $(this).addClass('section--animate');
        }
    });
});
