const form = document.querySelector('.form');
const inputName = document.querySelector('.form__input--name');
const inputPhone = document.querySelector('.form__input--phone');

const validateName = (name) => {
  const pattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
  return pattern.test(name);
};

const validatePhone = (phone) => {
  const pattern = /^[^A-Za-zА-Яа-яЁё][0-9\s]+$/;
  return pattern.test(phone);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const name = inputName.value;
  const phone = inputPhone.value;

  if (!validateName(name)) {
    inputName.classList.add('form__input--invalid');
  } else {
    inputName.classList.remove('form__input--invalid');
  }

  if(!validatePhone(phone)) {
    inputPhone.classList.add('form__input--invalid');
  } else {
    inputPhone.classList.remove('form__input--invalid');
  }

  if (validateName(name) && validatePhone(phone)) {
    form.submit();
  }
});
