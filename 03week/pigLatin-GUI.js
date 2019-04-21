'use strict';
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function pigLatin() {
    //remove whitespace and change to lower case
    let word = document.getElementById("input").value;
    word = word.trim().toLowerCase();
    let newWord = word.split("");
    let final;

    const vowel = ['a','e','i','o','u'];
      if (vowel.includes(word.charAt(0))) {
        final = word + 'way';
        document.getElementById("translator").innerHTML = final;
      } else {
      for (let i=0; i < newWord.length; i++){
        if (!vowel.includes(word[i])) {
            newWord.push(newWord.shift());
          } else if (vowel.includes(word[i])){
            newWord.push('ay');
            final = newWord.join('');
            document.getElementById("translator").innerHTML = final;
            return final;
          }
      }
    }
    // document.getElementById("translator").innerHTML = final;
  }

  function returnWord() {
      document.getElementById("translator").innerHTML = pigLatin();
  }