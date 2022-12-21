// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var typed = new Typed(".auto-type", {
    strings: ["I'm Luiz Antonio Freire Araujo", "I'm a full stack developer based on Quebec/CA", "I'm remotely working with C#.net for a Montreal's ecommerce company", "How can I help you?"],
    typeSpeed: 75,
    backSpeed: 50,
    cursorChar: '_',
    loop: true
})


function liveDate() {
    var currentDate = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    $('#currentServerDate').html(currentDate.toLocaleDateString("en-US", options) +" | "+ currentDate.toLocaleTimeString('en-US'));
    var t = setTimeout(liveDate, 100);
}

$(document).ready(function () {
    liveDate();
});