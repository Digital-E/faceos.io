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
   sizeVariations: 3
  });
};
