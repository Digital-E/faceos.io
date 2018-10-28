$(document).ready(
  $('.initial-link').on('click', ajaxCategory));

function ajaxCategory (e) {
  e.preventDefault();
  var category = $(this).text();

  $.ajax({
    url: `http://localhost:3000/ajax-${category}`,
    timeout: 5000,
    method: 'POST',
    data: {next},
    success: (response) => {
      console.log(response);
      let users = response.users;
      next = response.next;
      total = response.totalCount;
      console.log(total);

      ScrollReveal({ reset: true }).reveal('.reveal', { delay: 300 });
      users = users.map((i) => (

        `
        <div class="container" style="opacity:0">
        <div class="card reveal" >
        <div class="card-front">
        <div class="description">
        <p>${i.name.alt}</p>
        </div>
        <div class="image-placeholder">
        <img class="profile-image" src="${i.url}" alt="">
        <div class="gradient-overlay"></div>
        </div>
        <div class="text-placeholder">
        <div class="name">${i.name.caption}</div>
        <div class="role">${i.tags[0]}</div>
        </div>
        <div class="seemore-button"><img class="plus-icon" src="assets/plus.svg" alt="">
        </div>
        </div>
        </div>
        </div>
        </div>
        `

      ));
      window.scrollTo(0, 0);
      $('.wrapper').empty();
      let numberOfCards = $('.wrapper').children().length;
      console.log(total);
      console.log(numberOfCards);
      console.log(numberOfCards < total);
      if (numberOfCards < total) {
        console.log("Loading...");
        $('.wrapper').append(users);
        $('.container').animate({opacity:1},1000)
      } else {
        console.log("No more to load!");
      };

    },
    error : (e) => {
				console.log("ERROR: ", e);
			}
  })
};
