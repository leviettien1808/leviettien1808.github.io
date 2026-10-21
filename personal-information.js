const email = document.getElementById('inputEmail1');
const submit = document.getElementById('submitEmail');
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const loginForm = document.getElementById('user-profile__login');
const verifiedPersonalInformation = document.getElementById('verified');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (regex.test(email.value)) {
    loginForm.style.display = 'none';
    verifiedPersonalInformation.classList.remove('d-none');
  }
  console.log(email.value);
});
