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
            $('.sidebar__number').fadeOut();
        },
        afterLoad: function(anchorLink, index) {
            $(this).addClass('section--animate');
            $('.sidebar__number').html('00' + String(index));
            $('.sidebar__number').fadeIn();
        }
    });
});
