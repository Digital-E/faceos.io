//Scroll Reveal

ScrollReveal({ reset: true }).reveal('.reveal', { delay: 300 });

//Particles

window.onload = function() {
  Particles.init
  ({
   selector:'.background',
   color: '#D3D3D3',
   connectParticles: true,
   maxParticles: 100,
   speed:0.1,
   sizeVariations: 3,
   responsive: [
    {
      breakpoint:
768
,
      options: {
        maxParticles:
50
      }
    }, {
      breakpoint:
425
,
      options: {
        maxParticles:
40
      }
    }, {
      breakpoint:
320,
options: {
  maxParticles:
30
      }
    }
  ]
  });
};

$('.filter-button').on('click', function() {
  $(this).children('.filter-links').children().toggleClass('show-links', 500);
  // $('.filter-links a:nth-child(1)').animate({top:"0px",left:"0px"},0);
  // $('.filter-links a:nth-child(2)').animate({top:"0px",left:"0px"},200);
  // $('.filter-links a:nth-child(3)').animate({top:"0px",left:"0px"},400);
  // $('.filter-links a:nth-child(4)').animate({top:"0px",left:"0px"},600);

  $(this).toggleClass('filter-button-open', 500);

})
