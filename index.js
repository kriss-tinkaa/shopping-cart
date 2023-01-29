let amount;
let totalPrice = 0;
let priceItem = 540;
let btnClose = document.querySelector('.close');
let openMainModal = document.querySelector('#pay');
let mainModal = document.querySelector('#mainDialog');

if (localStorage.getItem('amount') === null) {
  amount = 1;
} else {
  amount = localStorage.getItem('amount');
}
console.log(amount);
setCount();
setPrice();

let minusBtn = document.querySelector('.minus-btn');
let plusBtn = document.querySelector('.plus-btn');

function setCount() {
  document.querySelector('.amount-input').value = amount;
  document.querySelector('.amount span').innerHTML = amount;
}

function setPrice() {
  totalPrice = amount * priceItem;
  document.querySelector('.total-price span').innerHTML = '$' + totalPrice;
  document.querySelector('.cart-total-price').innerHTML = '$' + totalPrice;
}

function minusCount() {
  console.log(amount);
  minusBtn.addEventListener('click', () => {
    if (amount >= 1) {
      amount--;
      setCount();
      setPrice();
      localStorage.setItem('amount', amount);
    }
  });
}
minusCount();

function plusCount() {
  plusBtn.addEventListener('click', () => {
    if (amount < 20) {
      amount++;
      setCount();
      setPrice();
      localStorage.setItem('amount', amount);
    }
  });
}
plusCount();

/// HW POP-up
function openModal() {
  openMainModal.addEventListener('click', () => {
    mainModal.parentElement.classList.add('show');
  });
}
openModal();

function closeModal() {
  btnClose.addEventListener('click', () => {
    mainModal.parentElement.classList.remove('show');
  });
}
closeModal();

/// HW select

function getGender() {
  let getGender = document.querySelector('.getGender'),
    getGenderFemale = document.querySelector('.getGender-female'),
    getGenderMale = document.querySelector('.getGender-male');

  getGender.addEventListener('change', () => {
    let getGenderValue = getGender.value;

    getGenderFemale.classList.remove('show');
    getGenderMale.classList.remove('show');

    if (getGenderValue === 'female') {
      getGenderFemale.classList.add('show');
    } else {
      getGenderMale.classList.add('show');
      getDate();
    }
  });
}
getGender();

function getDate() {
  let getDate = document.querySelector('.getDate');
  getDate.max = new Date().toISOString().split('T')[0];

  getDate.addEventListener('change', () => {
    let date = new Date(getDate.value);
    let dateYear = date.getFullYear();
    let today = new Date().getFullYear();
    let personAge = today - dateYear;
    showAge(personAge);
  });
}

function showAge(age) {
  let personAgeBlock = document.querySelector('.getGender-age');
  personAgeBlock.classList.remove('show');
  if (age < 18) {
    personAgeBlock.classList.add('show');
    personAgeBlock.innerHTML = `You are so young, your age is ${age}`;
  } else {
    personAgeBlock.classList.add('show');
    personAgeBlock.innerHTML = `You are adults, you are over 18, your age is ${age}`;
  }
}
