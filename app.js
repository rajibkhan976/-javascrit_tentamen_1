// JavaScript eller jQuery
$(document).ready(function(){
  $('body').html('<input id="loginForm" type="button" name="" value="Log in">');
  $('input').after('<div id="loginDiv"></div>');
  $('div').append('<p>Login</p>');
  $('div').append('<input id="userName" type="text" name="" value=""><br><br>');
  $('div').append('<input id="userPass" type="password" name="" value=""><br><br>');
  $('div').append('<input id="userLogin" type="submit" name="" value="skicka">');
  $('div').after('<h3 id="email">Email:</h3>');
  $('h3').after('<span id="userEmail"></span>');
  $('#loginDiv').css({"background-color": "pink",
  "max-width": "300px",
  "text-align": "center",
  "padding": "2%",
  "display": "none"});
  $('#email').hide();
  $('#loginForm').click(function () {
    $('#loginDiv').show();
  });
  $('#loginDiv > p').css("font-size", "24px");
  $('#loginDiv > input').css({"width": "90%"});
  $('#loginForm').click(function () {
    $('#loginDiv').show();
  });
  var userLogin = document.getElementById('userLogin');
  userLogin.addEventListener("click", checkLogin);
  function checkLogin () {
    var userName = document.getElementById('userName').value;
    var userPassword = document.getElementById('userPass').value;
    console.log(userName);
    console.log(userPassword);
    if (userName == "Steve" && userPassword == 123) {
      alert("Login successful!");
      $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {
            for (var i = 0; i < 1; i++) {
              var userdata = data[i];
                $('#email').show();
                $('#userEmail').text(userdata['email']);
            }
      });
    } else {
      $('#email').show();
      $('#userEmail').text("ops error, try again");
    }
  }
});
