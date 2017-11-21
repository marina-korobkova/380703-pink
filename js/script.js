var header = document.querySelector(".page-header");
var header_toggler = document.querySelector(".page-header__toggler");

header.classList.remove("page-header--opened");
header_toggler.classList.remove("page-header__toggler--opened");

header_toggler.addEventListener("click", function (evt) {
  header.classList.toggle("page-header--opened");
  header_toggler.classList.toggle("page-header__toggler--opened");
});

// Проверка валидности формы и механика всплывающих сообщений
if (document.querySelector(".contest")) {
  var form = document.querySelector(".contest-form");
  var form_submit = document.querySelector(".contest-form__button");
  var user_surename = form.querySelector("[name=user-surename]");
  var user_name = form.querySelector("[name=user-name]");
  var user_email = form.querySelector("[name=user-email]");
  var modal_fail = document.querySelector(".modal--fail");
  var modal_success = document.querySelector(".modal--success");
  var modal_fail_close = modal_fail.querySelector(".modal__button");
  var modal_success_close = modal_success.querySelector(".modal__button");

  form_submit.addEventListener("click", function (evt) {
    if (!user_surename.value || !user_name.value || !user_email.value || !(user_email.value.indexOf("@") > -1)) {
      evt.preventDefault();
      modal_fail.classList.add("modal--active");
      user_surename.classList.add("form__text-input--error");
      user_name.classList.add("form__text-input--error");
      user_email.classList.add("form__text-input--error");
    } else {
      modal_success.classList.add("modal--active");
      if (user_surename.classList.contains("form__text-input--error")) {
        user_surename.classList.remove("form__text-input--error");
        user_name.classList.remove("form__text-input--error");
        user_email.classList.remove("form__text-input--error");
      }
    }
  });

  modal_fail_close.addEventListener("click", function (evt) {
    modal_fail.classList.remove("modal--active");
  });

  modal_success_close.addEventListener("click", function (evt) {
    modal_success.classList.remove("modal--active");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal_fail.classList.contains("modal--active")) {
        modal_fail.classList.remove("modal--active");
      } else if (modal_success.classList.contains("modal--active")) {
        modal_success.classList.remove("modal--active");
      }
    }
  });
}
