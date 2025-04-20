const sound = new Audio("sound/click.mp3");
function clickSound(){
  sound.play();
}
function makeBubble(){
  let bubble = "";
  for(let i = 1; i<=112; i++){
    let rndNum = Math.floor(Math.random() * 10 + 1);
    bubble += `<div class="bubble">${rndNum}</div>`;
  }
  let btmBox = document.querySelector("#btmBox");
  btmBox.innerHTML = bubble;
}
let rndHints = 0;
function hints(){
  rndHints = Math.floor(Math.random() * 10 + 1);
  let hints = document.querySelector("#hints");
  hints.innerText = rndHints;
}

function timer(){
  let timeStamp = 60;
  let timeIntr = setInterval(() =>{
    if(timeStamp > 0){
      timeStamp--;
      let time = document.querySelector("#time");
      time.innerText = timeStamp;
    }else if(timeStamp == 0){
      let gameOver = document.querySelector(".gameOver");
      gameOver.style.display = "flex";
      let run = document.querySelector("#run");
      run.innerText = scoreValue;
      setTimeout(5000, reload()); 
    }else{
      clearInterval(timeIntr);
    }
  }, 1000)
}

let scoreValue = 0;
function score(){
  let btmBox = document.querySelector("#btmBox");
  btmBox.addEventListener("click", function(details){
    // console.log(details);
    if(details.target.innerText == rndHints){
      clickSound();
      scoreValue += 10; 
      let score = document.querySelector("#score");
      score.innerText = scoreValue;
      hints(); 
      makeBubble();
    }
  })
}



makeBubble();
hints(); 
timer();
score();