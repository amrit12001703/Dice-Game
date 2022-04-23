// First Dice//
let randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomImage1="images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",randomImage1);

// Second Dice//
let randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",randomImage2);

//Winner Announcement
if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins!!";
}
else if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins!!";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Draw!!";
}
