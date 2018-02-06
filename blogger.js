$(document).ready(() => {
    $("a", "body").each((idx, el) => {

        var $a = $(el);
        var href = $a.attr("href");
        if (!href) return;
        console.log(href);
        var idx = href.indexOf("#");
        if (idx !== -1) {
            let newurl = href.substring(idx, href.length);
            $a.attr("href", newurl);
        }
    });
});
