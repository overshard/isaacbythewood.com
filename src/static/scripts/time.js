$(document).ready(function() {
    function pad(integer) {
        var string = String(integer);
        if (string.length < 2) {
            return '0' + string;
        }
        return string;
    }

    var start = Date.now();
    function timer() {
        var current = Date.now();
        var since = new Date(current - start);
        var seconds = pad(since.getSeconds());
        var minutes = pad(since.getMinutes());
        $('.time__counter').text('00:' + minutes + ':' + seconds);
        setTimeout(timer, 1000);
    }
    timer();
});
