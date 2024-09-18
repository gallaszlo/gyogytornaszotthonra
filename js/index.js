$(document).ready(function() {

    $('a[href^="#"]').on('click',function(event){
        event.preventDefault();
        // $('html,body').animate({scrollTop:$(this.hash).offset().top-120}, 500);
        window.scrollTo({
            top: $(this.hash).offset().top-100,
            behavior: 'smooth'
        });
    });

// document ready
});


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         console.log("scroll")
//         e.preventDefault();
//
//         const targetElement = document.querySelector(this.getAttribute('href'));
//         const offset = 120; // A görgetés mennyisége
//
//         window.scrollTo({
//             top: targetElement.offsetTop - offset,
//             behavior: 'smooth'
//         });
//     });
// });

// $(document).ready(function(){
//     $('a[href^="#"]').on('click',function (e) {
//         e.preventDefault();
//         $('html,body').animate({scrollTop:$(this.hash).offset().top-140}, 500);
//
//         // var target = this.hash,
//         //     $target = $(target);
//         //
//         // $('html, body').stop().animate({
//         //     'scrollTop': $target.offset().top-1400
//         // }, 900, 'swing', function () {
//         //     window.location.hash = target;
//         // });
//     });
// });