$(document).ready(function() {

    // info open/close button
    $(".info-open").click(function() {
        if ($(".info-open span").hasClass("fa-inbox")) {
            $(".info-open span").removeClass("fa-inbox");
            $(".info-open span").addClass("fa-times");
            $(".info").slideDown(600);
        } else {
            $(".info-open span").addClass("fa-inbox");
            $(".info-open span").removeClass("fa-times");
            $(".info").slideUp(600);
        }
    });

});
