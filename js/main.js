(function ($) {

  $('#apiCall').on('click', function (e) {
      let payload = {
        //token: "W3ZXS14QSsfVEcpoLY4kZQ",
        data: {
          name: "nameFirst",
          email: "internetEmail",
          phone: "phoneHome",
          _repeat: 300
        }
      };

      var outputArea = document.getElementById("outputArea");


      for (let i = 0; i < 10; i++) {
        $.ajax({
          type: "GET",
          url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
          headers: {}, // Here you can add authentication or API keys - depends on API architecture
          // Further reading: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
          success: function (resp) {
            // See what type of data we're dealing with
            outputArea.innerHTML += resp + "<br>";

          },
          error: function (xhr, statusText, errorThrown) {
            console.log(xhr.status);

            // If you are familiar with the various HTTP status codes, you can set up a switch case statement for each case
            // case 404:
            // "Page not found"

            // case 401:
            // "Not authenticated"

            // case 500:
            // "Something is wrong with the server"

            // etc.

            console.log(statusText);

            console.log(errorThrown);
          }
        });
      }
    }
  );

  // An example of the types of front end form handling we can do using AJAX
  // Focusing on UX signals: success message when form submit is successful, error when unsuccessful
  // Server-side processing of data can take place if a form is successfully submitted, such as sending an email or saving user data to a database

  // Listen for the submit event on the FORM (!!!) not the input of type submit
  $('#form').on('submit', function (e) {
    e.preventDefault();

    let formData = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    };

    $.ajax({
      // method and type are interchangable
      // if using jQuery < 1.9, use type
      method: 'GET',
      url: '/',
      crossDomain: true,
      data: formData,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      // We'll never hit the success function as HTTP requests from local files do not support CORS (Cross Origin Resource Sharing)
      // Further reading: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
      success: function (data) {
        $('.success').show();
        console.log("Success!");
      },
      error: function (xhr, statusText, errorThrown) {
        $('.error').show();
        console.log("Error!");
      },
      // There is also a 'complete' callback, that will fire when the response is returned, regardless of a success (HTTP status 200) or error (HTTP status 4xx/5xx)
    });
  });

}(jQuery))

// Some APIs to play around with can be found here: https://github.com/toddmotto/public-apis
