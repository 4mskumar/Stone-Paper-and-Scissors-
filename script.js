let user =0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const ucore = document.querySelector("#user");
const ccore = document.querySelector("#comp");
const msgBox = document.querySelector("#msg");
const bg = document.querySelector("body");


const compCh = () => {
    let ch=["Rock", "Paper", "Scissor"];
    let rand = Math.floor(Math.random() * 3);
    // console.log(rand)
    // console.log(rand);
    return ch[rand];
}

const draw = ()=> {
    console.log("Game was draw");
    msgBox.innerText = "Game is draw"
}

const result = (userW, chId, compChoice) => {
    if(userW){
    let uScore = ++user;
    ucore.innerText = uScore;
    console.log("you win");
    msgBox.innerText = `You won! ${chId} beats ${compChoice}`;
    msgBox.classList.add("black");
        // document.style.backgroundColor="black";
        // bg.classList.remove("aliceblue");

}
else{
    let cScore = ++comp;
    ccore.innerText = cScore;
    console.log("you lose");
    msgBox.innerText = `You lose! ${compChoice} beats ${chId}`;
    msgBox.classList.add("red");
    }
}

const playGame = (chId) => {
    console.log("user choice = " + chId);
    const compChoice = compCh();
    console.log("computer choice = " + compChoice);

        if(chId === compChoice){
            draw();
        }
        else
        {
            let userW = true;
            if(chId === "Paper")
            {
                userW = compChoice === "Rock" ? true : false;
            }
                else if(chId === "Rock")
                {
                    userW = compChoice === "Scissor"? true : false;
                }
                    else
                    {
                        userW = compChoice === "Paper" ? true : false;
                    }
            result(userW, chId, compChoice);
        }
};


choices.forEach((choice)=> {
        choice.addEventListener("click",()=> {
            const chId = choice.getAttribute("id");
            console.log("Choice was clicked! " + chId)
            playGame(chId);
        });
});