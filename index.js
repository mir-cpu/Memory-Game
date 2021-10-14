var randomNumber1;
randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomimg="images/dice" + randomNumber1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomimg);


var randomNumber2;
randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimg2);
