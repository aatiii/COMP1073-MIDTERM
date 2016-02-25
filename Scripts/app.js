// setup your IIFE (Immediately Invoked Function Expression)
// var travelReport = (function () {

// "use strict";
// console.log("App Started...")

//     var replaceIntro = function(){
//         var intro;
        
//         intro = document.getElementById("IntroParagraph");
//         intro.innterHTML = "Now is the time to travel to Greece. The country may be going through an economic crisis, "+
//                             "but many travellers say that it hasn't impacted the experience of visiting. Plus, there may"+
//                             "be some great deals. Greece has 1,400 islands, though only 230 of them are inhabited. "+
//                             "And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
//     }
//     replaceIntro();
                       
// })();
"use strict";
(function () {

    console.log("App Started...")

    var replaceIntro = function(){
        var intro;
        
        intro = document.getElementById("IntroParagraph");
        intro.innterHTML = "Now is the time to travel to Greece. The country may be going through an economic crisis, "+
                            "but many travellers say that it hasn't impacted the experience of visiting. Plus, there may"+
                            "be some great deals. Greece has 1,400 islands, though only 230 of them are inhabited. "+
                            "And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
    }
    replaceIntro();
                       
})();


