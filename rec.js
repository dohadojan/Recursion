// /*
// 1
// Create a function called sum 
// that takes a single parameter n, 
// and return the sum of all integers up to n starting from 0

// Ex: sum(2); => 2 + 1 + 0 => 3 
// Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

function sum(n) {
  if (n == 0) {

    return n
  }
  return n + sum(n - 1)
}
console.log(sum(4))

// 2
// Create a function called factorial 
// that takes a single parameter n, 
// and return the product of all integers up to n starting from 1

// Ex: factorial(2); => 2 * 1 => 6 
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 


function factorial(n) {
  if (n == 1) {

    return n
  }
  return n * factorial(n - 1)
}
console.log(factorial(4))


/*
4
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number

Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1

fib(n): 1 1 2 3 5 8 13 21
        | | | | | |  |  |
n:      0 1 2 3 4 5  6  7
*/
function fibon(num) {

  if (num < 0)
    return 0;
  if (num === 0)
    return 1;
  return fibon(num - 1) + fibon(num - 2);
}
fibon(5)

/*





/*
5
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

function sum2(x, y) {

  if (x === y) {

    return y;

  }
  return (x + sum2((x + 1), y))
}


/*


// /*
// // 6
// // Create a function called repeatStr2
// // that takes 2 string parameters,
// // and return the first string number time
// // (of the lenght of the secend string) with space betweeen it
// // Important: the stop condition should be [somthing=== 0]
// // Ex: repeatStr2("ro","cc"); => "ro ro"
// // Ex: repeatStr2("ro","fff"); => "ro ro ro"
// // */
// function repeatStr2(str1,str2){

// if(str2.length===0){

//     return""
// }
// return str1+""+repeatStr2(str1,str2.slice(1,str2.length))


// }

// repeatStr2("do","fff")





// /*
// 7
// Create a function called multiOf
// that takes 3 parameters,
// and return the first number mutiple by
// the second one ^ the third one
// Ex: multiOf(4,3,10); => 4000
// Ex: multiOf(6,2,4); => 96
// 

function multiOf(n1, n2, n3) {
  if (n3 === 0) {
    return n1;
  }

  return (n2 * multiOf(n1, n2, n3 - 1))

}
console.log(multiOf(5, 4, 10))


// /*
// 8
// Create a function called muti2
// that take two parameter
// and will return the multiplication from the first number to the second number
// Ex: muti2(4, 5); => 4 * 5 => 20
// Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
// */


function muti2(x, y) {

  if (x === y) {

    return y;

  }
  return (x * muti2((x + 1), y))





}

console.log(muti2(4, 5))

//9
function numberBetweenUs(num1, num2) {
  if (num1 === num2 - 1 || num1 === num2 - 2) {

    return num2 - 1;

  }


  return (num1 + 1) + " " + (numberBetweenUs((num1 + 1), num2));
}
console.log(numberBetweenUs(2, 8))




//  10
//  Write a function called countDown
//  that takes one parameter
//  and return a string represent the count down from the number
//  that insert to 0
//  instead of 0 need to ahve "done"
//  between each number a comma and space
//  ** you need to use recursion
//  ** Important: You should dint have extra space at the end or comma
//  countDown(5)
//  => "5, 4, 3, 2, 1, done"
//  countDown(2)
//  => "2, 1, done"
//  countDown(7)
//  => "7, 6, 5, 4, 3, 2, 1, done"
//  */


/*
11
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/


function multiplication2(num1, num2) {
  if (num2 === 0) {
    return 0;
  }
  return (num1 + multiplication2(num1, num2 - 1));

}

console.log(multiplication2(5, 4))






/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
*/
function mod2(num1, num2) {
  if (num1 < num2) {
    return num1;
  }

  return mod2(num1 - num2, num2)
}
console.log(mod2(8, 5))

/*
12
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/
function reverseString(str) {

  return str.split("").reduce((revString, char) => char + revString, "");

}

console.log(reverseString("school"))

/*
13
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/




/*
14
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/

/*
15
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/







