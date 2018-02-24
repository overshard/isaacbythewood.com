$(window).on('load', function() {
    function swapWords() {
        var keywords = [];
        $('.keywords__word span').each(function(i) {
            keywords.push($(this).text().trim());
        });

        var numberOfWords = $('.keywords__text').length;
        var first = Math.floor(Math.random() * numberOfWords);
        var second = Math.floor(Math.random() * numberOfWords);
        while (first === second) {
            second = Math.floor(Math.random() * numberOfWords);
        }

        var firstObject = $('.keywords__text').eq(first);
        var secondObject = $('.keywords__text').eq(second);
        var firstWord = $(firstObject).text().trim();
        var secondWord = $(secondObject).text().trim();
        $(firstObject).addClass('keywords__text--animate');
        $(secondObject).addClass('keywords__text--animate');
        setTimeout(function() {
            $(firstObject).text(secondWord);
            $(secondObject).text(firstWord);
        }, 500);
        setTimeout(function() {
            $(firstObject).removeClass('keywords__text--animate');
            $(secondObject).removeClass('keywords__text--animate');
        }, 1000);

        setTimeout(swapWords, 5000);
    }

    swapWords();
});
