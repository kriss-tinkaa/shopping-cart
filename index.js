window.addEventListener('load', function () {
  let amount;
  let totalPrice = 0;
  let priceItem = 540;

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
    document.querySelector('.total-price').innerHTML = '$' + totalPrice;
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
});
