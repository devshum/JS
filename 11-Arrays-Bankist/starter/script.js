'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = movements => {
  containerMovements.innerHTML = '';
  
  movements.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${movement} €</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((movementPrev, movementCur) => movementPrev + movementCur);

  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = account => {
  const incomes = account.movements
                  .filter(movement => movement > 0)
                  .reduce((prevMovement, nextMovement) => prevMovement + nextMovement);

  labelSumIn.textContent = `${incomes} €`;

  const expenses = account.movements
                  .filter(movement => movement < 0)
                  .reduce((prevMovement, nextMovement) => prevMovement + nextMovement);

  labelSumOut.textContent = `${Math.abs(expenses)} €`;

  const interest = account.movements
                   .filter(movement => movement > 0)
                   .map(deposit => deposit * account.interestRate / 100)
                   .filter((deposit, _, arr) => {
                     console.log(arr)
                     return deposit >= 1;
                   })
                   .reduce((prevDeposit, nextDeposit) => prevDeposit + nextDeposit);

  labelSumInterest.textContent = `${interest} €`;
};

const createUserNames = accounts => {
  accounts.forEach(account => {
    account.username = account.owner
                       .toLowerCase()
                       .split(' ')
                       .map(namePart => namePart[0])
                       .join('');
  });
}

createUserNames(accounts);

const updateUI = currentAccount => {
  displayMovements(currentAccount.movements);

  calcDisplayBalance(currentAccount);

  calcDisplaySummary(currentAccount);
};

let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    inputLoginPin.blur();

    updateUI(currentAccount);
  }

  inputLoginUsername.value = inputLoginPin.value = '';
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && 
      receiverAcc &&
      currentAccount.balance >= amount && 
      receiverAcc?.username !== currentAccount.username) {
    
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  };
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(movement => movement >= amount * .1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  };

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (currentAccount.username === inputCloseUsername.value && Number(inputClosePin.value) === currentAccount.pin) {

    labelWelcome.textContent = `Log in to get started`;
    containerApp.style.opacity = 0;

    const index = accounts.findIndex(account => account.username === currentAccount.username);
    
    accounts.splice(index, 1);
  }

  inputCloseUsername.value = inputClosePin.value = '';
});