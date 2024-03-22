// Write your solution in this file!
var customerName ='Bob';
var customerName = 'bob';

function returnCustomerName() {
  return customerName;
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.');
}

console.log({
  returnCustomerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
});
