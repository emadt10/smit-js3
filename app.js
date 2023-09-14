//chpt 12-13

//q1
// Function to check if a character is a number
// function isNumber(char) {
//     return !isNaN(char) && !isNaN(parseFloat(char));
//   }
  
 
//   function isUppercaseLetter(char) {
//     var charCode = char.charCodeAt(0);
//     return charCode >= 65 && charCode <= 90;
//   }
  
  
//   function isLowercaseLetter(char) {
//     var charCode = char.charCodeAt(0);
//     return charCode >= 97 && charCode <= 122;
//   }
  
 
//   var input = "A"; 
  
//   if (isNumber(input)) {
//     console.log(input + " is a number.");
//   } else if (isUppercaseLetter(input)) {
//     console.log(input + " is an uppercase letter.");
//   } else if (isLowercaseLetter(input)) {
//     console.log(input + " is a lowercase letter.");
//   } else {
//     console.log(input + " is not a number or letter.");
//   }


//q2
// var a=+prompt("Enter a number");
// var b=+prompt("enter 2nd no");
// if(a>b){
    
//             document.write("Larger number is: "+a);
//         }
//          else{ 
//              document.write("Larger number is: "+b);
//          }

//q3
// var num=+prompt("Enter 1st number: ");
// if (num>0) {
//     document.write("Number is postive!");
// }
// else if (num<0){
//     document.write("Number is negative!");
// }
// else {
//     document.write("Number is zero!");
// }// var num=+prompt("Enter 1st number: ");
// if (num>0) {
//     document.write("Number is postive!");
// }
// else if (num<0){
//     document.write("Number is negative!");
// }
// else {
//     document.write("Number is zero!");
// }

//q4
// var a = prompt("Enter a character: ");
// if (a.length==1 && (a == "a" || a =="e" || a =="i" || a =="o" || a =="u" ))
// {
//     document.write("vowel!");
// }
// else if (a.length>1)
// {
//     document.write("Error! Enter alphabet only!");
// }
// else if (a.length==1){
//     document.write("Not a vowel!");
// }

//q5

// var correctPassword = "abcdefghi";


// var userPassword = prompt("Please enter your password:");


// if (userPassword === null) {
//   alert("Cancelled. Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }



//q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }
// alert(greeting);








//chpt14-16
//q1
//var studentName=[];

//q3
//var studentName=["jack","anee","alex"];

//q4
//var arr=[2,4,5,6];

//q5
//var arr=[true,false,false,true];

//q6
//var arr=[true,"xyz",false,234];

//q7
// var quali=["SSC",
// "HSC",
// "BSC",
// "BS",
// "MS",
// "M.PHIL",
// "PHD"];
// var list = document.getElementById("myList");
//         for (i = 0; i < quali.length; ++i) {
//             let li = document.createElement('li');
//             li.innerText = quali[i];
//             list.appendChild(li);
//         }

//q8

// var studentName=["jack","anee","alex"];
// var score=[320,230,480];
// for( var i=0;i<3;i++){
//     document.write("Score of "+studentName[i]+" is "+score[i]+" Percentage:"+(score[i]/500)*100+"<br>");
// }


//9. Initialize an array with color names. Display the array elements in your browser.
// var colors=["yellow","orange","green","maroon","white"];
// document.write(colors);

// var add=prompt("Enter the color you want to add at the beginning");
// colors.unshift(add);
// document.write("<br>"+colors);

// var add2=prompt("Enter the color you want to add at the end");
// colors.push(add2);
// document.write("<br>"+colors);

// colors.unshift("purple");
// colors.unshift("silver");
// document.write("<br>"+colors);
// colors.shift();
// document.write("<br>"+colors);

// colors.pop();
// document.write("<br>"+colors);
// //f. 
// var i=+prompt("At which index you want to add a color");
// var add3=prompt("Enter color name");
// colors[i]=add3;
// document.write("<br>"+colors);
// //g. 
// var del=prompt("how many colors you want to delete");
// var x;
// for(x=index;x<del;x++){
//     colors.splice(index,del);
// }
// document.write("<br>"+colors);

//q10
// var studentscore=[320,230,480,120];
// document.write(studentscore.sort(function(a, b){return a - b}));

//q11
// var city = ["karachi", "lahore", "multan", "islamabad", "quetta", "peshawar"];
// document.write(city.slice(3, 5));

//q12
// var arr = ["This", "is", "my", "cat"];
// var String = arr.join(" ");

// console.log(String); 

// //q13
// var myArray = ["keyboard", "mouse", "printer", "monitor"];


// var v1 = myArray.shift(); // "keyboard"
// var v2 = myArray.shift(); // "mouse"
// var v3 = myArray.shift(); // "printer"
// var v4 = myArray.shift(); // "monitor"

//q14
// var arr = ["keyboard", "mouse", "printer", "monitor"];
// var v1 = arr.pop(); //monitor
// var v2 = arr.pop(); //printer
// var v3 = arr.pop(); //mouse
// var v4 = arr.pop();//keyboard


