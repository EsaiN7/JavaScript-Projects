/*jslint browser */

// CS 3312, spring 2022
// Studio 5
// YOUR NAME: Esai Barron

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Each little web app is hidden from the others using an IIFE.
   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR isPrime FUNCTION HERE
      const isPrime = function (number) { //name not needed here, can put if you want
         //convert given number to int
         parseInt(number);
         //make sure number is not less than 2 or infite
         if (Number.isFinite(number) && number > 2) {
            //check to see if number is isPrime
            //let divCount = 0;
            let i;
            //start loop counter at 2
            for (i = 2; i < number; i += 1) {
               if (number % i === 0) {
                  return false;
               }
            }
            return true;

         } else {
            return false;
         }
      }; //semi colon since assigning to variable
      // The report function is hidden from the isPrime function using an IIFE.
      (function () {
         // Do not declare any other variables here, but you may declare variables inside your function.

         // WRITE YOUR report FUNCTION HERE
         const report = function (number) {
            //make input an int
            parseInt(number);
            //check for result of isPrime
            if (Number.isFinite(number) && isPrime(number)) {
               document.querySelector('#prime-or-not').textContent = 'prime';

            } else if (Number.isFinite(number) && isPrime(number) === false) {
               document.querySelector('#prime-or-not').textContent = 'not prime';

            } else if (Number.isFinite(number) === false) {
               document.querySelector('#prime-or-not').textContent = 'not a number';
            }

         };
         // Call the report function even before there's a value to use.
         report();
         // When the number is changed at all, immediately . . .
         document.querySelector('#primality-input').addEventListener('input', function () {
            // . . . call the report function and pass it the user's value.
            report(parseInt(document.querySelector('#primality-input').value, 10));
         });
      }());
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR fibonacci FUNCTION HERE
      const fibonacci = function fibonacci(n) {
         //input validation
         if (!Number.isInteger(n) || n < 0) {
            return 0;
         }
         //establish base case
         if (n < 2) {
            return n;
         } else { //recursive step
            return fibonacci(n - 2) + fibonacci(n - 1);
         }
      };
      // Do things when the "Calculate it" button is clicked.
      document.querySelector('#calculate-fibonacci').addEventListener('click', function () {
         // Get the user's number.
         const whichFibonacciNumber = parseInt(document.querySelector('#fibonacci-input').value, 10);
         // Use the fibonacci function to calculate the output.
         document.querySelector('#which-fibonacci-number').textContent = whichFibonacciNumber.toString();
         document.querySelector('#fibonacci-number').textContent = fibonacci(whichFibonacciNumber).toString();
      });
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR reverseString FUNCTION HERE
      const reverseString = function reverseString(str) {
         //estabish a base case
         if (str.length === 0) {
            return '';
         } else { //recursive step
            return reverseString(str.slice(1)) + str.charAt(0);
         }

      };
      (function () {
         const reversalInputElement = document.querySelector('#reversal-input');
         // When the user changes the string and focuses on another part of the page, reverse the new string.
         // Notice the difference between the 'change' event and the 'input' event.
         reversalInputElement.addEventListener('change', function () {
            reversalInputElement.value = reverseString(reversalInputElement.value);
         });
      }());
   }());

});
