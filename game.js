let userScore=0;
let compScore=0;

const messageBox=document.getElementById("message")
const messageBg=document.querySelector(".msg")
const UserScore=document.getElementById("User-score")
const CompScore=document.getElementById("comp-score")
const choices=document.querySelectorAll(".choice");
const genCompChoice=()=>{
    const options=["rock","paper","scizzors"]
    let randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}
const showWinner=(userWin)=>{
    if(userWin){
      console.log("you win");
      messageBox.innerHTML=`<p>You win</p>`
      messageBg.style.backgroundColor="green"
      userScore++;
      UserScore.innerText=`${userScore}`;
    }else{
     console.log("you lose");
     messageBox.innerHTML=`<p>You Lose</p>`
     messageBg.style.backgroundColor="red"
      compScore++;
      CompScore.innerText=`${compScore}`;
    }
}
const drawGame=()=>{
   
    console.log("its a draw");
    messageBox.innerHTML=`<p>Its a Draw</p>`
    messageBg.style.backgroundColor="blue"
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==="rock") {
            //paper,scizzors
            userWin=compChoice==="paper"? false:true;
        } else if(userChoice==="paper") {
            //rock,scizzors
            userWin=compChoice==="scizzors"? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin)
    }
};

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id")
        playGame(choiceId);
    })
})