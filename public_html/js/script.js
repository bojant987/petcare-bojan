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

    // bx slider
    $('.bxslider').bxSlider({
        auto: true,
        controls: false,
        pager: false
    });

    // scrolling animations
    function slideIn(element, animation) {
        var windowHeight = $(window).height();
        var windowTop = $(window).scrollTop();
        var windowBottom = windowHeight + windowTop;

        var elementHeight = element.outerHeight();
        var elementTop = element.offset().top;
        var elementBottom = elementHeight + elementTop;

        if (elementTop < windowBottom) {
            element.addClass(animation);
        } else {
            element.removeClass(animation);
        }
    }
    // animate intro articles
    $(window).scroll(function() {
        slideIn($(".intro article"), "fadeInDown");
        slideIn($(".services figure"), "fadeInRight");
    });


    // modal form validation
    function validate(e, location) {
        var name = $(location + " input[name=name]").val();
        var lastName = $(location + " input[name=last-name]").val();
        var email = $(location + " input[name=email]").val();
        var phone = $(location + " input[name=phone]").val();
        var pet = $(location + " select[name=pet]").val();
        var service = $(location + " select[name=service]").val();
        var date = $(location + " .datepicker").val();
        var time = $(location + " .timepicker").val();
        var errors = 0;
        // validate name
        if (name.length === 0) {
            $(location + " .name-error").html("*You must fill out your name.");
            errors++;
        } else if (name.length < 3 || name.length > 15) {
            $(location + " .name-error").html("*Name must be between 3 and 15 characters long.");
            errors++;
        }
        // validate last name
        if (lastName.length === 0) {
            $(location + " .last-name-error").html("*You must fill out your last name.");
            errors++;
        } else if (lastName.length < 3 || name.length > 20) {
            $(location + " .last-name-error").html("*Last name must be between 3 and 20 characters long.");
            errors++;
        }
        // validate email
        if (email.length === 0) {
            $(location + " .email-error").html("*You must fill out your email address.");
            errors++;
        } else if (email.indexOf("@") === -1) {
            $(location + " .email-error").html("*Email address must be valid.");
            errors++;
        }
        // validate phone number
        if (phone.length === 0) {
            $(location + " .phone-error").html("*You must fill out your phone number.");
            errors++;
        } else if (isNaN(parseInt(phone))) {
            $(location + " .phone-error").html("*Phone number must be valid.");
            errors++;
        }
        // validate pet select
        if (pet === "") {
            $(location + " .pet-error").html("*Please select pet type.");
            errors++;
        }
        // validate service select
        if (service === "") {
            $(location + " .service-error").html("*Please select service type.");
            errors++;
        }
        // validate date picker
        if (date === "") {
            $(location + " .date-error").html("*Please select visiting date.");
            errors++;
        }
        // validate time picker
        if (time === "") {
            $(location + " .time-error").html("*Please select visiting time.");
            errors++;
        }

        // check for errors
        if (errors === 0) {
            $(location + " .form-feedback").html("Thank you for trusting us with your pets!");
        } else {
            e.preventDefault();
            $(location + " .form-feedback").html("Validation errors occurred. Please confirm the fields and submit it again.");
            $(location + " .form-feedback").css("visibility", "visible");
        }
    }

    // submit event
    $("#myModal button[type=submit]").click(function(e) {
        validate(e, "#myModal");
    });
    $(".schedule button[type=submit]").click(function(e) {
        validate(e, ".schedule");
    })

    // remove error on input revisit
    $("#myModal form").on("focus", "input", function() {
        $(this).next().html("");
    });

    // re-route select to display in paragraph
    $(".visible-select p").click(function() {
        $(this).toggleClass("focused");
        $(this).next().slideToggle();
        $(this).parent().next().html("");
    });

    $(".visible-select ul").on("click", "li", function() {
        $(this).parent().prev().html($(this).text());
        $("." + $(this).parent().attr("data-parent") + " ." + $(this).parent().attr("data-for")).val($(this).attr("data-value"));
        $(this).parent().slideUp();
    });
    $(".get-appointment").click(function() {

    });

    // datepicker
    $(".datepicker").datepicker({
        firstDay: 1,
        constrainInput: true,
        minDate: 0,
        maxDate: "+3M",
        beforeShowDay: disableWeekends
    });

    function disableWeekends(theDate) {
        if (theDate.getDay() === 0 || theDate.getDay() === 6) {
            return [false, "", "We don't work on weekends!"];
        }
        return [true, ""];
    }

    // timepicker
    $(".timepicker").timepicker({
        "minTime": '9:00am',
        "maxTime": '5:00pm',
        "showDuration": false
    });
    
    // why choose us fade in animation
    
});
