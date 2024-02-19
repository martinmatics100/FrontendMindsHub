// function togglePassword() {
//   var passwordInput = document.getElementById("Password");
//   var toggleButton = document.getElementById("toggleButton");

//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//     toggleButton.textContent = "Hide";
//   } else {
//     passwordInput.type = "password";
//     toggleButton.textContent = "Show";
//   }
// }

function togglePassword() {
  var passwordInput = document.getElementById("Password");
  var eyeIcon = document.getElementById("eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}
