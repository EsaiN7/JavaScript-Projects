/*jslint browser */

// CS 3312, spring 2022
// Studio 6
// YOUR NAME: Esai Barron

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR createToDoList FUNCTION HERE
      const createToDoList = function () {
         //create priv object
         const priv = {
            toDoList: {}
         };
         //create self object and methods
         const self = {
            addItem: function (item) {
               if (typeof item === 'string') {
                  priv.toDoList[item.toLowerCase()] = item; //dont forget () for toLowerCase
               }
            },
            removeItem: function (item) {
               delete priv.toDoList[item.toLowerCase()];
            },
            toString: function () {
               let string = '';
               Object.keys(priv.toDoList).forEach(function (prop) { //print out VALUES of properties
                  string += priv.toDoList[prop] + '\n';
               });
               return string; //RETURN THIS OUTSIDE OF FOR EACH LOOP!!!!!!
            }
         };
         return Object.freeze(self); //RETURN THE OBJECT!!!!
      };

      (function () {

         // Create a new object that keeps track of a to-do list.
         const toDoList = createToDoList();

         document.querySelector('#add-to-do-list-item').addEventListener('click', function () {
            // Add a new to-do list item and output the new to-do list.
            toDoList.addItem(document.querySelector('#to-do-list-item-to-add').value);
            document.querySelector('#to-do-list-output').value = toDoList.toString();
         });

         document.querySelector('#remove-to-do-list-item').addEventListener('click', function () {
            // Remove a to-do list item and output the new to-do list.
            toDoList.removeItem(document.querySelector('#to-do-list-item-to-remove').value);
            document.querySelector('#to-do-list-output').value = toDoList.toString();
         });
      }());
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR findUniqueLetters FUNCTION HERE
      const findUniqueLetters = function (inputString) {
         //convert inputString to all upper case
         inputString = inputString.toUpperCase();
         //empty object for unique letters and string for return
         const uniqueLetters = {};
         let result = '';
         //go through chars of inputString and add to object
         [...inputString].forEach(function (charValue) { //add PROPS and VALUES to object
            uniqueLetters[charValue] = true;
         });
         //go through uniqueLetters object and build a String
         Object.keys(uniqueLetters).forEach(function (prop) { //only print out PROPS
            result += prop + '\n';
         });

         return result;
      };

      document.querySelector('#find-unique-letters').addEventListener('click', function () {
         // Filter the characters in the textbox, leaving only the first of each letter found.
         const wordElement = document.querySelector('#unique-letters-word');
         wordElement.value = findUniqueLetters(wordElement.value);
      });
   }());

});
