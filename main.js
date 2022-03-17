let target = document.querySelector("#dynamic");
let orginStringArr;

function randomSet(){
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JS"];
let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];
let selectStringArr = selectString.split("");
orginStringArr = selectStringArr 
console.log("randomSet : " + orginStringArr);
return selectStringArr;
}


function typing(randomArr){
    if(randomArr.length > 0){
        console.log("typing : " + orginStringArr);
        target.textContent += randomArr.shift();
        setTimeout(function(){
            typing(randomArr);
        },80);
    }else{
        setTimeout(reversedTyping(),3000)
    }
}

function reversedTyping(){
}

function resetTyping(){
    target.textContent = "";
    typing(randomSet());
}

typing(randomSet());
setInterval(blink,500);

function blink(){
    target.classList.toggle("active");
}

