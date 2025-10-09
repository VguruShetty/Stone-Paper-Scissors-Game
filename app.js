let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const idUserVal = document.querySelector("#user-score");
const idCompVal = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const getCompChoice = ()=>{
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random()*3);
    return options[rand];
};
const playGame = (userShoice) =>{
    // console.log("user choice = ", userShoice);
    //generate computer choice
    const compShoice = getCompChoice();
    // console.log("computer:", compShoice)
    if(userShoice == compShoice){
        DrawGame();
    }
    else{
        // if(userShoice == "rock" && compShoice == "scissors"){
        //     userScore += 1;
        //     msg.innerHTML = "You Win!!!";
        //     msg.style.backgroundColor = "green";
        // }else if(userShoice == "rock" && compShoice == "paper"){
        //     compScore += 1;
        //     msg.innerHTML = "You lose";
        //     msg.style.backgroundColor = "red";
        // }
        // if(userShoice == "scissors" && compShoice == "paper"){
        //     userScore += 1;
        //     msg.innerHTML = "You Win!!!";
        //     msg.style.backgroundColor = "green";
        // }else if(userShoice == "scissors" && compShoice == "rock"){
        //     compScore += 1;
        //     msg.innerHTML = "You lose";
        //     msg.style.backgroundColor = "red";
        // }
        // if(userShoice == "paper" && compShoice == "rock"){
        //     userScore += 1;
        //     msg.innerHTML = "You Win!!!";
        //     msg.style.backgroundColor = "green";
        // }else if(userShoice == "paper" && compShoice == "scissor"){
        //     compScore += 1;
        //     msg.innerHTML = "You lose";
        //     msg.style.backgroundColor = "red";
        // }
        // console.log(userScore, compScore);
        // idUserVal.innerHTML = userScore;
        // idCompVal.innerHTML = compScore;
        let userWin = true;
        if(userShoice === "rock"){
            //scissors, paper
            userWin = compShoice === "paper" ? false : true;
        }
        else if(userShoice === "paper"){
            //scissors, rock
            userWin = compShoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compShoice === "rock" ? false : true;
        }
        showWinner(userWin, userShoice, compShoice);
    }
    
};
const showWinner = (userWin, userShoice, compShoice) =>{
    if(userWin){
        userScore++;
        msg.innerHTML = `You Win! Your ${userShoice} beats ${compShoice}`;
        msg.style.backgroundColor = "green";
        idUserVal.innerHTML = userScore;        
    }
    else{
        compScore++;
        msg.innerHTML = `You lose. ${compShoice} beats your ${userShoice}`;
        msg.style.backgroundColor = "red";
        idCompVal.innerHTML = compScore;
    }
};

const DrawGame = () => {
    //console.log("Match Draw");
    msg.innerHTML = "Game was Draw Play again!!!";
    msg.style.backgroundColor = "#081b31";
};
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{        
        const userShoice = choice.getAttribute("id");
        playGame(userShoice);
        
    });
});