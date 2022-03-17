let target = document.querySelector("#dynamic");

function randomSet(){
let stringArr = ["Learn to HTML"];
let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];
let selectStringArr = selectString.split("");
orginStringArr = selectStringArr 
return selectStringArr;
}


function typing(randomArr){ 
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            typing(randomArr);
        },80);
    }else{
        setTimeout(resetTyping,3000);
    }
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

