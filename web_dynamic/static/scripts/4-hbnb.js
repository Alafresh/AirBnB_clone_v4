// script 2
$.ajax({
  type: 'GET',
  url: 'http://0.0.0.0:5001/api/v1/status/',
  statusCode: {
    200: function () {
      $('div#api_status').addClass('available');
    }
  }
});

const arrayId = [];
const arrayName = [];
// script 1
$(document).ready(function () {
  $('.amenities INPUT').click(function () {
    if ($(this).prop('checked') === true) {
      // Push id if checked
      arrayId.push($('.amenities INPUT').data('id'));
      console.log(arrayId);
      // Push name if checked
      arrayName.push($(this).parents('LI').text());

      // Printing of amenity.name
      $('.amenities H4').text(arrayName);
    } else if ($(this).prop('checked') === false) {
      // Pop id if not checked
      arrayId.pop($('.amenities INPUT').removeData('id'));
      console.log(arrayId);
      // Pop name if not checked
      arrayName.pop($(this).parents('LI').text());

      // Printing of amenity.name
      $('.amenities H4').text(arrayName);
    }
  });
});

$(document).ready(function () {
  $('.filters button').click(function () {
    console.log('CLICK');
    console.log(arrayId);
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      contentType: 'application/json',
      data: JSON.stringify({ amenities: arrayId })
    }).done(data => {
      $('section.places').empty();
      $('section.places').append('<h1>Places</h1>');
      for (const place of data) {
        $('section.places').append(
          `<article>
          <div class="title">
            <h2>` + place.name + `</h2>
            <div class="price_by_night">
            ` + place.price_by_night + `
            </div>
          </div>
          <div class="information">
            <div class="max_guest">
        <i class="fa fa-users fa-3x" aria-hidden="true"></i>
        ` + place.max_guest + `Guests
            </div>
            <div class="number_rooms">
        <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
        ` + place.number_rooms + `Bedrooms
            </div>
            <div class="number_bathrooms">
        <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
        ` + place.number_bathrooms + `Bathroom
            </div>
          </div>
          <div class="description">
            ` + place.description + `
            </div>
          </article>`);
      }
    });
  });
});
