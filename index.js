// Write your solution in this file!


var customerName = 'bob';



function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Use 'bestCustomer' instead of 'BestCustomer'
}

const leastFavoriteCustomer = 'bob';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'sam';
}



