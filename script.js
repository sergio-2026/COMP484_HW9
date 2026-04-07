// part 1 - show todays date like MM/DD/YYYY
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

// validate, make sure month/day always 2 digits (03 not 3)
if (month < 10) { month = "0" + month; }
if (day < 10) { day = "0" + day; }

var dateText = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").innerHTML = dateText;

// part 2 - number conversion tests (no arrays or loops here)

var val1 = "55";        //value that can be converted to an number
var val2 = "29.95";     //one value must include a decimal
var val3 = "example";   //one value cannot be converted to a number
var val4 = "200";       //a second value that can be converted to a number

var conv1 = Number(val1);
var conv2 = Number(val2);
var conv3 = Number(val3);
var conv4 = Number(val4);

/*Requirement: Your code must use all of the following:
`Number()`
`Number.isNaN()`
`Number.isInteger()`*/

var line1 = "Original: '" + val1 + "' → Converted: " + conv1 +
  " → isNaN: " + Number.isNaN(conv1) +
  " → isInteger: " + Number.isInteger(conv1) + "<br>";

var line2 = "Original: '" + val2 + "' → Converted: " + conv2 +
  " → isNaN: " + Number.isNaN(conv2) +
  " → isInteger: " + Number.isInteger(conv2) + "<br>";

var line3 = "Original: '" + val3 + "' → Converted: " + conv3 +
  " → isNaN: " + Number.isNaN(conv3) +
  " → isInteger: " + Number.isInteger(conv3) + "<br>";

var line4 = "Original: '" + val4 + "' → Converted: " + conv4 +
  " → isNaN: " + Number.isNaN(conv4) +
  " → isInteger: " + Number.isInteger(conv4) + "<br>";

var allLines = line1 + line2 + line3 + line4;
document.getElementById("numberConversionOutput").innerHTML = allLines;

// part 3 - price calculator with toFixed
var itemPrice = 49.99;
var taxRate = 0.095;
var shippingCost = 7.50;

var taxAmount = itemPrice * taxRate;
var subtotal = itemPrice + shippingCost;
var total = subtotal + taxAmount;

var mathText =
  "Item Price: $" + itemPrice.toFixed(2) + "<br>" +
  "Shipping: $" + shippingCost.toFixed(2) + "<br>" +
  "Tax (9.5%): $" + taxAmount.toFixed(2) + "<br>" +
  "Total: $" + total.toFixed(2);

document.getElementById("mathOutput").innerHTML = mathText;

// part 4 - if / else messages

// check the bad string, tell user its not a number
var nanMessage;
if (Number.isNaN(conv3)) {
  nanMessage = "<br><strong>'" + val3 + "' is not a valid number.</strong>";
} else {
  nanMessage = "<br><strong>'" + val3 + "' is a valid number.</strong>";
}
document.getElementById("numberConversionOutput").innerHTML =
  document.getElementById("numberConversionOutput").innerHTML + nanMessage;

// check if total price is too big
var shipMessage;
if (total > 50) {
  shipMessage = "<br><strong>Order qualifies for express shipping.</strong>";
} else {
  shipMessage = "<br><strong>Order does not qualify for express shipping.</strong>";
}
document.getElementById("mathOutput").innerHTML =
  document.getElementById("mathOutput").innerHTML + shipMessage;