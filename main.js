let target = document.querySelector("#dynamic");


typing(randomString());
setInterval(blink,500);

function randomString(){
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JS"];

let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];

let selectStringArr = selectString.split("");

return selectStringArr;
}

function resetTyping(){
    target.textContent = "";
    typing(randomString());
}

function typing(randomArr){
    console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            typing(randomArr);
        },80);
    }else{
        setTimeout(resetTyping,3000)
    }
}

function blink(){
    target.classList.toggle("active");
}

