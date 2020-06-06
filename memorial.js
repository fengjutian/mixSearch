$(document).ready(function () {

    $.get('./markdown.md', function(res, status, xhr) {
        $("#content").html(marked(res));
    })
    
})