

  $('.card').on("click", animateCard);

  function animateCard(){

    let thisCard = $(this)[0];

    $(this).unbind('click');

    let children = $(this).children();

    //Image Translate
    if (children.children('.image-placeholder').css('left') == '0px') {
      children.children('.image-placeholder').animate({left:"-300",opacity:"0"},200);
    } else {
      children.children('.image-placeholder').animate({left:"0",opacity:"1"},0);
    }

let textPlaceholder = children.children('.text-placeholder');

    //Text Translate
    if (textPlaceholder.children('.name').css('left') == '0px' && textPlaceholder.children('.role').css('left') == '0px') {
      textPlaceholder.children('.name').animate({left:"-300",opacity:"0"},0);
      textPlaceholder.children('.role').animate({left:"-300",opacity:"0"},0);
    } else {
      textPlaceholder.children('.name').animate({left:"0",opacity:"1"},0);
      textPlaceholder.children('.role').animate({left:"0",opacity:"1"},0);
    }
let description = children.children('.description');
    //Description Reveal
    if(description.css('opacity') == "0"){
      description.animate({opacity:"1"},0);
    } else {
      description.animate({opacity:"0"},0);
    }

    let rotate = children.children('.seemore-button').children();
    //Rotate Plus Icon
    rotate.toggleClass('rotate');

    setTimeout(function(){
      thisCard.addEventListener('click', animateCard );
    },1100);

  };
