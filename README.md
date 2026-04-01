# COMP484 HW9 – JavaScript Mini Demo

## 1. Built-in Objects and Methods Used
- `Date` – `new Date()`, `getMonth()`, `getDate()`, `getFullYear()`
- `Number()` – convert strings into numbers
- `Number.isNaN()` – check if a value is actually `NaN`
- `Number.isInteger()` – check for whole numbers
- `toFixed()` – format numbers with two decimal places

## 2. GitHub Pages Link
https://sergio-2026.github.io/COMP484_HW9/

## 3. Screenshot
images/screenshot.png

## 4. Reflection
- What part was easiest?
The easiest part for me was setting up the HTML since we already did that a alot in earlier homeworks.  

- What part was hardest?
The hardest part was remembering that JavaScript months are 0-based, so I kept getting the wrong month until I added 1.  

- What did you learn about the `Date` object?
I learned that the Date object is created with `new Date()` and then you call methods like `getMonth()` and `getFullYear()` to pull out pieces.  

- What did you learn about the `Number` object?
From the Number object I learned that `Number()` will try to convert anything, but `Number.isNaN()` and `Number.isInteger()` let you check if the result is what you actually want.  

- What did you learn about displaying results in the browser?
Putting the results into the page with `document.getElementById(...).innerHTML` felt very efficient because you can instantly see the output instead of only in the console.