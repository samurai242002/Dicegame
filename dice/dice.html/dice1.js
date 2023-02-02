let a=Math.floor(Math.random()*6+1)
let b=Math.floor(Math.random()*6+1)
const fi='images/dice'+a+'.png';
const si='images/dice'+b+'.png';
if(a>b)
{
    document.querySelector(".winner h1").innerHTML="player 1 wins";
    document.querySelector(".d1 img").src=fi;
    document.querySelector(".d2 img").src=si;
    document.querySelector(".pf2 img").style.visibility="hidden"
}
else if(a<b)
{
    document.querySelector(".winner h1").innerHTML="player 2 wins";
    document.querySelector(".d1 img").src=fi;
    document.querySelector(".d2 img").src=si;
    document.querySelector(".pf1 img").style.visibility="hidden"
}
else
{
    document.querySelector(".winner h1").innerHTML="Its a tie";
    document.querySelector(".d1 img").src=fi;
    document.querySelector(".d2 img").src=si;
}
