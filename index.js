var readlineSync = require("readline-sync");

var que = readlineSync.question;




var superman = {
  name : "superman",
  ability : "flight",
  costumecolor : "red and blue",
  speed : 1000,
  inteligence : 100,
  weekness : 10,
  origin : "Kripton",
  strength : 1000,
  stelth : 100
}

var batman = {
  name : "batman",
  ability : "technology",
  costumecolor : "black",
  speed : 500,
  inteligence : 1000,
  weekness : 50,
  origin : "Gotham",
  strength : 100,
  stelth : 1000
}

//ex12
console.log(superman.origin);
console.log(batman.ability);
console.log(superman.speed > batman.speed)
console.log(superman.stelth < batman.stelth)


// print name and costume color
var superheros = [superman , batman ];

for(var i=0; i<superheros.length; i++){
  var currenthero = superheros[i];
  console.log(currenthero.name);
  console.log("------------------");
  console.log(currenthero.costumecolor);
  console.log("------------------");
}


//ex13
var queOne ={
  question : "Where do I live ?",
  answer : "pune"
}
var queTwo ={
  question :"Who is my favourite super Hero ?",
  answer : "spiderman"
}
var queThree ={
  question :"Peter Parker is ____.",
  answer : "spiderman"
}
var queFour ={
  question :"Who is God of Thunder ? ",
  answer :"thor"
}
var queFive ={
  question :"Do you love Marvels Super Heroes ?",
  answer : "yes"
}

var score = 0 ;
var questionList = [queOne ,queTwo , queThree ,queFour ,queFive]

var userName = que("Enter Your Name \n")
console.log("Welcome " + userName +" in do you know Marvels Heroes !! ") 



function quize(question, answer){
  for(var i=0; i<questionList.length; i++){
    var currentQuestion = questionList[i]
    var userAnswer = que(currentQuestion.question + "\n")
    if(userAnswer === currentQuestion.answer){
      console.log("Right !!!")
      score++;
    } else {
      console.log("Wrong !!!")
    }
  }
  console.log(userName +" your total score is  " + score)
}

quize();