$(document).ready(function() {
    var commitsUrl = 'https://api.github.com/repos/overshard/isaacbythewood.com/commits';

    $.getJSON(commitsUrl, function(commits) {
        for (commit in commits) {
            var commitJson = JSON.stringify(commits[commit].commit, null, 2);
            var addition =  '<div class="commits__commit">' +
                                '<pre>' +
                                    '<code class="language-json">' +
                                        commitJson +
                                    '</code>' +
                                '</pre>' +
                            '</div>';
            $('.commits__overflow').append(addition);
        }
        $('.commits__overflow').height($('.commits__overflow').height());
        Prism.highlightAll();
    });
});
