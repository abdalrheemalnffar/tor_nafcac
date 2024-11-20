$(document).ready(function () {

});


// loding screen
$(window).on("load", function () {
    $(".lds-spinner").fadeOut(500, function () {
        // $(".loading").fadeOut(500)
        $(this).parent().fadeOut(500, function () {
            $(this).remove()
        })
    });
})