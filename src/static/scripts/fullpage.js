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
        },
        afterLoad: function(anchorLink, index) {
            $(this).addClass('section--animate');
        }
    });
});
