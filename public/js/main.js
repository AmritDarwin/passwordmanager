(function ($) {
  "use strict";

  // Form
  var contactForm = function () {
    if ($("#contactForm").length > 0) {
      $("#contactForm").validate({
        rules: {
          website: "required",
          email: "required",
          password: "required",
        },
        messages: {
          website: "Please enter your website",
          email: "Please enter your email/username",
          password: "Please enter a password",
        },
      });
    }
  };
  contactForm();

  var LoginForm = function () {
    if ($("#loginForm").length > 0) {
      $("#loginForm").validate({
        rules: {
          username: "required",
          password: "required",
        },
        messages: {
          username: "Please enter Username",
          password: "Please enter password",
        },
      });
    }
  };
  LoginForm();

  var RegisterForm = function () {
    if ($("#registerForm").length > 0) {
      $("#registerForm").validate({
        rules: {
          username: "required",
          password: "required",
        },
        messages: {
          username: "Please enter Username",
          password: "Please enter password",
        },
      });
    }
  };
  RegisterForm();
})(jQuery);

function add() {
  window.location.href = "/add-password";
}
function list() {
  window.location.href = "/password-list";
}
function login() {
  window.location.href = "/login";
}
function register() {
  window.location.href = "/register";
}
