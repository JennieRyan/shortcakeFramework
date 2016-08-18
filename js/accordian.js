$(document).ready(function () {
    "use strict";
    $("p.accordian").hide();
    $("div").on("click", function () {
        if ($(this).hasClass("closedDiv")) {
            $(this).siblings("p").slideDown();
            $("div", this).removeClass("rightArrow").addClass("downArrow");
            $(this).removeClass("closedDiv").addClass("activeDiv");
        } else if ($(this).hasClass("activeDiv")) {
            $(this).siblings("p").slideUp();
            $("div", this).removeClass("downArrow").addClass("rightArrow");
            $(this).removeClass("activeDiv").addClass("closedDiv");
        }
    });
});
