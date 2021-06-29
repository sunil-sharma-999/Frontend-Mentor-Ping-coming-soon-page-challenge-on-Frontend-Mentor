const verification =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const email = document.querySelector('.email');
const form = document.querySelector('form');
const m1 = document.querySelector('.message-1');
const m2 = document.querySelector('.message-2');
const m3 = document.querySelector('.message-3');
form.addEventListener('submit', (e) => {
  if (verification.test(email.value)) {
    e.preventDefault();
    valid();
  } else {
    e.preventDefault();
    if (email.value === '') {
      m2.classList.add('visible');
      m1.classList.remove('visible');
      m3.classList.remove('visible');
      email.classList.remove('err', 'valid');
    } else {
      notValid();
    }
  }
});

function notValid() {
  // add
  email.classList.add('err');
  m1.classList.add('err', 'visible');
  //remove
  email.classList.remove('valid');
  m2.classList.remove('visible');
  m3.classList.remove('visible');
}
function valid() {
  // add
  email.classList.add('valid');
  m3.classList.add('valid', 'visible');
  //remove
  email.classList.remove('err');
  m1.classList.remove('visible');
  m2.classList.remove('visible');
}
