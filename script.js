let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const uScore= document.querySelector("#user-score");
const cScore= document.querySelector("#computer-score");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const choiceId= choice.getAttribute("id");
        playGame(choiceId);
    })
})

const playGame= (choiceId) =>{
    console.log("User Choice: ",choiceId);
    const compChoice= generateComputerChoice();
    console.log("Computer Choice: ",compChoice);

    let userWin= true;
    if(choiceId==compChoice){
    drawGame();
    }else{
        if(choiceId=="rock"){
            userWin= compChoice==="paper"? false:true;
        }else if(choiceId=="paper"){
            userWin= compChoice==="scissor"? false:true;
        }else{
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin, compChoice, choiceId);
    }
    uScore.innerText= userScore;
    cScore.innerText= compScore;
}

const generateComputerChoice= () =>{
    const options= ["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin, compChoice, choiceId) => {
    if(userWin==true){
        msg.innerText=`You win, your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore+=1;
    }else {
        msg.innerText=`You lose, ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor="red";
        compScore+=1;
    }
}

const drawGame=() =>{
    console.log("The game was a draw.");
    msg.innerText="Draw.";
    msg.style.backgroundColor="#242325";
    msg.style.color="#C8C8C8";
}

let meme= document.querySelector("#meme");

let mode="classic";

meme.addEventListener("click",() =>{
    if(mode=="classic"){
        mode="meme";
        meme.innerText="classic";
        rock.innerHTML="<img src=\"rock1.jpg\" alt=\"\">";
        paper.innerHTML="<img src=\"paper.png\" alt=\"\">";
        scissor.innerHTML="<img src=\"scissor.jpeg\" alt=\"\">";
    }else{
        mode="classic";
        meme.innerText="meme";
        rock.innerHTML="<img src=\"rock.jpg\" alt=\"\">";
        paper.innerHTML="<img src=\"paper.jpg\" alt=\"\">";
        scissor.innerHTML="<img src=\"scissor.jpg\" alt=\"\">";
    }
})
