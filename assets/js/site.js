/* Quick and dirty "Show Password" feature */

var pw_button = document.querySelector('input#password + a.button');

pw_button.addEventListener('click', function(event) {
  event.preventDefault();
  var pw_field = document.querySelector('#password');
  pw_field.type = "text";
  pw_button.remove();
})
