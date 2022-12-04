function rollDice (){
    var randomNumber=Math.floor(Math.random()*6)+1;
    var randomNumber2=Math.floor(Math.random()*6)+1;
    let temp= "images/dice"+randomNumber+".png"
    document.querySelectorAll("img")[0].setAttribute("src", temp)
    temp= "images/dice"+randomNumber2+".png"
    document.querySelectorAll("img")[1].setAttribute("src", temp);


    if(randomNumber==randomNumber2)
    {
        document.querySelector("h1").innerHTML="🚩 Draw 🚩";
    }
    else if(randomNumber>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 wins 🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML="🚩 Player 2 wins";
    }
}