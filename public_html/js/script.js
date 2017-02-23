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

    // modal form validation
    function validate(e) {
        var name = $(".get-appointment input[name=name]").val();
        var lastName = $(".get-appointment input[name=last-name]").val();
        var email = $(".get-appointment input[name=email]").val();
        var phone = $(".get-appointment input[name=phone]").val();
        var errors = 0;
        // validate name
        if (name.length === 0) {
            $(".name-error").html("*You must fill out your name.");
            errors++;
        } else if (name.length < 3 || name.length > 15) {
            $(".name-error").html("*Name must be between 3 and 15 characters long.");
            errors++;
        }
        // validate last name
        if (lastName.length === 0) {
            $(".last-name-error").html("*You must fill out your last name.");
            errors++;
        } else if (lastName.length < 3 || name.length > 20) {
            $(".last-name-error").html("*Last name must be between 3 and 20 characters long.");
            errors++;
        }
        // validate email
        if (email.length === 0) {
            $(".email-error").html("*You must fill out your email address.");
            errors++;
        } else if (email.indexOf("@") === -1) {
            $(".email-error").html("*Email address must be valid.");
            errors++;
        }
        // validate phone number
        if (phone.length === 0) {
            $(".phone-error").html("*You must fill out your phone number.");
            errors++;
        } else if (isNaN(parseInt(phone))) {
            $(".phone-error").html("*Phone number must be valid.");
            errors++;
        }

        // check for errors
        if (errors === 0) {
            $(".form-feedback").html("Thank you for trusting us with your pets!");
        } else {
            e.preventDefault();
            $(".form-feedback").html("Validation errors occurred. Please confirm the fields and submit it again.");
            $(".form-feedback").css("visibility", "visible");
        }
    }

    // submit event
    $("#myModal button[type=submit]").click(function(e) {
        validate(e);
    });

    // remove error on input revisit
    $("#myModal form").on("focus", "input", function() {
        $(this).next().html("");
    });

});
