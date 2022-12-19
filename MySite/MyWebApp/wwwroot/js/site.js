// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var typed = new Typed(".auto-type", {
    strings: ["I'm Luiz Antonio Freire Araujo", "I'm a full stack developer based on Quebec/CA", "I'm remotely working with C#.net for a Montreal's ecommerce company", "How can I help you?"],
    typeSpeed: 75,
    backSpeed: 50,
    cursorChar: '_',
    loop: false,
    onComplete: (self) => {
        self.strings = "I'm a full stack developer based on Quebec/CA, currently working for a Montreal's ecommerce company.<br>How can I help you?",
        self.onComplete += (instance) => {
                instance.cursor.remove();
            }
        //todo:restart here after loop complete
        self.start();
        }
    })