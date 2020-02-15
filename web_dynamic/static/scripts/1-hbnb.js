/* Pushes amenity.id and amenity.name and prints amenity.names to different arrays if checked
if not, pops and re-prints */
$(document).ready(function () {
  const arrayId = [];
  const arrayName = [];
  $('.amenities INPUT').click(function () {
    if ($(this).prop('checked') === true) {
      // Push id if checked
      arrayId.push($('.amenities INPUT').data('id'));
      // Push name if checked
      arrayName.push($(this).parents('LI').text());

      // Printing of amenity.name
      $('.amenities H4').text(arrayName);
    } else if ($(this).prop('checked') === false) {
      // Pop id if not checked
      arrayId.pop($('.amenities INPUT').removeData('id'));
      // Pop name if not checked
      arrayName.pop($(this).parents('LI').text());

      // Printing of amenity.name
      $('.amenities H4').text(arrayName);
    }
  });
});
