$(function () {
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    statusCode: {
      200: function () {
        $('div#api_status').addClass('available');
      }
    }
  });
});
