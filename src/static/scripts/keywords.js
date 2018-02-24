$(window).on('load', function() {
    function swapWords() {
        var keywords = [];
        $('.keywords__word span').each(function(i) {
            keywords.push($(this).text().trim());
        });

        var numberOfWords = $('.keywords__word span').length;
        var first = Math.floor(Math.random() * numberOfWords);
        var second = Math.floor(Math.random() * numberOfWords);
        while (first === second) {
            second = Math.floor(Math.random() * numberOfWords);
        }

        var firstObject = $('.keywords__word span').eq(first);
        var secondObject = $('.keywords__word span').eq(second);
        var firstWord = $(firstObject).text().trim();
        var secondWord = $(secondObject).text().trim();
        $(firstObject).addClass('--animate');
        $(secondObject).addClass('--animate');
        setTimeout(function() {
            $(firstObject).text(secondWord);
            $(secondObject).text(firstWord);
        }, 500);
        setTimeout(function() {
            $(firstObject).removeClass('--animate');
            $(secondObject).removeClass('--animate');
        }, 1000);

        setTimeout(swapWords, 5000);
    }

    swapWords();
});
