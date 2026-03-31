// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for today
var today = new Date();

// getMonth() is 0-based, so add 1
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

// Add leading zero if month or day is a single digit
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

// Build the formatted date string
var dateString = "Today is " + month + "/" + day + "/" + year;

// Display it on the page using the element's id
document.getElementById("dateOutput").innerHTML = dateString;

// ==========================
// Part 2: Number Conversion
// ==========================

// Four separate string variables
var val1 = "55";
var val2 = "29.95";
var val3 = "hello";
var val4 = "200";

// Convert each one using Number()
var converted1 = Number(val1);
var converted2 = Number(val2);
var converted3 = Number(val3);
var converted4 = Number(val4);

// Build result lines for each value
var line1 = "Original: '" + val1 + "' → Converted: " + converted1 +
            " → isNaN: " + Number.isNaN(converted1) +
            " → isInteger: " + Number.isInteger(converted1) + "<br>";

var line2 = "Original: '" + val2 + "' → Converted: " + converted2 +
            " → isNaN: " + Number.isNaN(converted2) +
            " → isInteger: " + Number.isInteger(converted2) + "<br>";

var line3 = "Original: '" + val3 + "' → Converted: " + converted3 +
            " → isNaN: " + Number.isNaN(converted3) +
            " → isInteger: " + Number.isInteger(converted3) + "<br>";

var line4 = "Original: '" + val4 + "' → Converted: " + converted4 +
            " → isNaN: " + Number.isNaN(converted4) +
            " → isInteger: " + Number.isInteger(converted4) + "<br>";
            
// Combine all lines into one string
var conversionResults = line1 + line2 + line3 + line4;

// Display on the page
document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// ==========================
// Part 3: Math and Formatting
// ==========================

// Define numeric values (price calculator)
var itemPrice = 49.99;
var taxRate = 0.095;
var shippingCost = 7.50;

// Calculations
var taxAmount = itemPrice * taxRate;
var subtotal = itemPrice + shippingCost;
var total = subtotal + taxAmount;

// Format results using toFixed(2) to show two decimal places
var mathResults = "Item Price: $" + itemPrice.toFixed(2) + "<br>" +
                 "Shipping: $" + shippingCost.toFixed(2) + "<br>" +
                 "Tax (9.5%): $" + taxAmount.toFixed(2) + "<br>" +
                 "Total: $" + total.toFixed(2);

// Display on the page
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// Conditional 1: Check if val3 conversion is NaN
var nanMessage = "";
if (Number.isNaN(converted3) === true) {
  nanMessage = "<br><strong>'" + val3 + "' is not a valid number.</strong>";
} else {
  nanMessage = "<br><strong>'" + val3 + "' is a valid number.</strong>";
}

// Append the message to the number conversion section
document.getElementById("numberConversionOutput").innerHTML =
  document.getElementById("numberConversionOutput").innerHTML + nanMessage;

// Conditional 2: Check if total is above a threshold
var totalMessage = "";
if (total > 50) {
  totalMessage = "<br><strong>Order qualifies for express shipping.</strong>";
} else {
  totalMessage = "<br><strong>Order does not qualify for express shipping.</strong>";
}

// Append to math section
document.getElementById("mathOutput").innerHTML =
  document.getElementById("mathOutput").innerHTML + totalMessage;
