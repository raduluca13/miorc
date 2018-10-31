var modal = document.getElementById("login_modal");
var trigger = document.getElementById("trigger");
var closeButton = document.getElementById("login_modal_close");
var log1 = document.getElementById("log_button");
var log2 = document.getElementById("register_button");
var sig1 = document.getElementById("sign_in");
var sig2 = document.getElementById("sign_up");

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
log1.addEventListener("click", openLogin);
log2.addEventListener("click", openRegister);

function openLogin() {
  sig2.classList.add("active");
  sig1.classList.add("inactive");
  sig1.classList.remove("active");
  sig2.classList.remove("inactive");
}

function openRegister() {
  sig1.classList.add("active");
  sig2.classList.add("inactive");
  sig2.classList.remove("active");
  sig1.classList.remove("inactive");
}

function toggleModal() {
  modal.classList.toggle("open_modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

function openMenu() {
  var element = document.getElementById("round_menu");
  element.classList.toggle("open");
}
