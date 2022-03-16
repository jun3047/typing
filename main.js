let target = document.querySelector("#dynamic");

let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JS"];

let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];

let selectStringArr = 

function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500)

