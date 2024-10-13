// cahpter 6-9:

// Answer no 1:
var a = prompt("Enter any number")
document.write("Result:")
document.write("<br>")

document.write("The Value of a is: "+ a)
document.write("<br>")
document.write("..........................................")
document.write("<br>")
document.write("<br>")
++a
document.write("The Value of ++a is: "+ a)
document.write("<br>")
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("The Value of a++ is: "+ a)
document.write("<br>")
a++
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("<br>")
--a
document.write("The Value of --a is: "+ a)
document.write("<br>")
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("The Value of a-- is: "+ a)
a--
document.write("<br>")
document.write("Now the value of a is : " + a)

// answer no 2:
var a =2 , b = 1 
document.write("a is:" + a)
document.write("<br>")
document.write("b is:" + b)
document.write("<br>")
result = --a - --b + ++b + b--
document.write("Result is:" + result)
document.write("<br>")

// answer no 3:
var userName = prompt("Please write your name here")
alert("Hi welcome to our website " + userName)


// a) Take subject names 
// document.write("<h3>subject total mark obtained marks percentage</h3>");
// let english = "english <br>";
// let math = "math <br>"
// let urdu = "urdu <br>";

// let totalmarkspersubject = 100;
// let marks1 - 54;

// let marks2 = 54;
// let marks3 = 48;

// let totalmarks = totalmarkspersubject * 3;
// let totalobtainedmarks= marks1 + marks2 + marks3;
// let percentage - (totalobtainedmarks / totalmarks) * 100;


// // console.log("marks and  percentage calculation")

// document.write("subject :" +  english + " | total marks: " + totalmarkspersubject + " | obtained marks: " + marks + <br>);
// document.write ("subject: " +  urdu + " | total marks: " + totalmarkspersubject + "  | obtained marks:  " + marks + <br>);
// document.write (" subject : " + math + " | total marks: " + totalmarkspersubject + " | obtained marks: " + marks + <br>);
                                                                                                                   
// document.write("total marks:" + totalmarks + "<br>");
// document.write("total obtained marks:" + totalobtainedmarks+"<br>");
// document.write("percentage:" + percentage + "%" + "<br>");

// chapter 9-11:

// Answer no 1:

var userValue = prompt("Enter city name :")
if (userValue == "karachi") {
    alert("Welcome to city of light")
}

// Answer no 2:
var gender = prompt("Are you Male or Female")
if (gender == "Male") {
    alert("Good Morning Sir")
}
else if ( gender == "Female"){
    alert("Good Morning Ma'am")   
}

// Answer no 3:
var signalColor = prompt("Please type  a color name of traffic signal")
 if (signalColor == "Red") {
    alert("Must Stop")
 }
 if (signalColor == "Yellow") {
    alert("Ready to move")
 }
 if (signalColor == "Green") {
    alert("Move now")
 }

// Answer no 4:
var fule = prompt("How many liters of fule are reamins in your Car?")
if (fule < 0.25) {
    alert("Please refill the fule in your Car")
}

// Answer no 5:
// a ( The  given Condition is true )
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b ( The  given Condition is false )
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c  ( In given statement Condition 2 and 4  is true 7 condition 1 and 3 are false )
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d   ( The  given Condition is true )
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e  (The  given condition will print True)
 if (true){
alert("True");
}
if (false){
alert("False");
}

// f (The condition is true because the letter r is less then t in a sequence manner)
if("car" < "cat"){
    alert("car is smaller than cat");
    }

// Answr no 5:
var obtainedMarks = prompt("Enter obtained marks of your subject: ")
var totalMarks = prompt("Enter Total Marks")
var percentage = (obtainedMarks*100)/totalMarks

if (percentage >= 80 )
{
    var garde = "A-one"
var remarks = "Excellent"
}
else if ( percentage < 80 && percentage > 69 )
{
    var garde = "A "
    var remarks = "Good"
}
else if (percentage < 70 && percentage > 59 )
{
    var garde = "B "
    var remarks = "You need to improve"
}
else if (percentage < 60 )
{
    var garde = "Fail"
    var remarks = "Sorry"
}

document.write("<h1>Mark Sheet</h1>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("Total Marks : " + totalMarks)
document.write("<br>")
document.write("Marks Obtained : " + obtainedMarks)
document.write("<br>")
document.write("Percentage : " + percentage)
document.write("<br>")
document.write("Grade: " + garde )
document.write("<br>")
document.write("Remarks: " + remarks)

// Answer no 7:
var  secreteNumber = 7
var userGuess = prompt("Guess any number between 1 - 10: ")
if (userGuess == secreteNumber) {
    document.write("Bingo! Correct answer")
}
else if ( userGuess ==  secreteNumber+1) {
    document.write("Close enough to the correct answer")
}

// Answer no 8:
var num = prompt("Enter a number: ")
if( num%3 == 0){
    alert("The number is divisble by 3")
}

//  Answer no 9:
var num1 = prompt("Enter a number: ")
if( num1%2 == 0){
    alert("Even number")
}
else{
    alert("Odd number")
}

// Answer no 10:
var temp = prompt("Enter a Temprature: ")
if (temp > 40 ){
    alert("It is too hot outside.")
}
else if (temp > 30 ){
    alert("The Weather today is Normal.”")
}
else if (temp > 20 ){
    alert("Today’s Weather is cool.")
}
else if (temp > 10 ){
    alert("OMG! Today’s weather is so Cool.")
}

// Answer no 11:
var num1 = parseInt(prompt("Enter First number: "))
var num2 = parseInt(prompt("Enter Second number: "))
var operator = prompt("Enter Operator ")
if (operator == "+") {
    alert(num1+ num2)
}
else if ( operator == "-") {
    alert(num1 - num2)
}
else if ( operator == "*") {
    alert(num1 * num2)
}
else if ( operator == "/") {
    alert(num1 / num2)
}
else if ( operator == "%") {
    alert(num1% num2)
}






























