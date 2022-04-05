/*jslint browser */

// CS 3312, spring 2022
// Studio 4
// YOUR NAME:Esai Barron

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Add your JavaScript code here.

   //fahrenheit to celsius
   document.querySelector('#convert-f-to-c').addEventListener('click', function () {
      //empty Output
      document.querySelector('#celsius').value = '';

      //make varaibles and take input
      let fahrenheit = parseFloat(document.querySelector('#fahrenheit').value);
      let convertedTemp;
      //make sure input is valid
      if (Number.isFinite(fahrenheit)) {
         //make calculation
         convertedTemp = (fahrenheit - 32) * 0.5556;
         document.querySelector('#celsius').value = convertedTemp.toFixed(3);
      } else {
         document.querySelector('#celsius').value = 'Bad input...';
      }

   });

   //celsius to fahrenheit
   document.querySelector('#convert-c-to-f').addEventListener('click', function () {
      //empty output
      //empty Output
      document.querySelector('#fahrenheit').value = '';

      //make varaibles and take input
      let celsius = parseFloat(document.querySelector('#celsius').value);
      let convertedTemp;
      //make sure input is valid
      if (Number.isFinite(celsius)) {
         //make calculation
         convertedTemp = (celsius * 1.8) + 32;
         document.querySelector('#fahrenheit').value = convertedTemp.toFixed(3);
      } else {
         document.querySelector('#fahrenheit').value = 'Bad input...';
      }

   });

   //draw a box of stars
   document.querySelector('#draw-star-box').addEventListener('click', function () {
      //declare needed variables
      const dimension = parseInt(document.querySelector('#size-of-box').value, 10); //dimensions of the box
      let boxString;                                                            //will be what is printed out
      let whichColumn;                                                          //keep track of columns
      let whichRow;                                                             //keep track of rows

      //make sure dimension is positive
      if (dimension > 0 && Number.isFinite(dimension)) {
         boxString = '';
         //start building output string
         for (whichRow = 0; whichRow < dimension; whichRow += 1) {
            for (whichColumn = 0; whichColumn < dimension; whichColumn += 1) {
               if (whichRow === 0 || whichRow === dimension - 1) {
                  boxString += '*';
               } else {

                  if (whichColumn === 0 || whichColumn === dimension - 1) {
                     boxString += '*';
                  } else {
                     boxString += ' ';
                  }
               }
            }
            boxString += '\n';
         }
         document.querySelector('#star-box-output').value = boxString;
      } else {
         document.querySelector('#star-box-output').value = 'I need a number to start with.';
      }
   });

   //print hailstone sequence
   document.querySelector('#print-hailstone').addEventListener('click', function () {
      //declare needed variable
      const output = document.querySelector('#hailstone-output');
      const givenNum = document.querySelector('#starting-number');
      let length = 0;
      //clear Output
      output.value = '';
      //convert to int
      let num = parseInt(givenNum.value, 10);

      if (num > 0) {
         output.value += num + '\n';
         //start sequence
         while (num !== 1) {
            if (num % 2 === 0) {
               num = num / 2;
               output.value += num + '\n';
            } else {
               num = (num * 3) + 1;
               output.value += num + '\n';
            }
            length += 1;
         }
         output.value += 'length = ' + length;
      } else {
         output.value += 'I need a number to start with.';
      }
   });

});
