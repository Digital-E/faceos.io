$(document).ready(
$('.load-more').on('click', (e) => {
  e.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/ajax-request',
    timeout: 2000,
    method: 'POST',
    data: {next},
    success: (response) => {
      console.log(response.next);
      location.reload();
    },
    error : (e) => {
				console.log("ERROR: ", e);
			}
  })
})
)
