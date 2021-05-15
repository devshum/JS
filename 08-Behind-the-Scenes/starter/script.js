'use strict';


const calcAge = birthYear => {
   const age = 2037 - birthYear;
   

   const printAge = () => {
       let output = `${firstName}, you are ${age}, born in ${birthYear}`;

       console.log(output);

       if(birthYear >= 1981 && birthYear <= 1996) {
           const firstName = 'Steven';
           const str = `Oh, and you're a millenial, ${firstName}`;
          
           console.log(str);

           const add = (a, b) => a + b;

           output = 'NEW OUTPUT';
       }
        // console.log(srt) error
       // add(1, 2) error
       console.log(output);
   }

   printAge();

   return age;
}

const firstName = 'Jonas';

calcAge(1991);