function setup() {
  createCanvas(600,600);
}

  var x = 255;
var snow  = (x,x,x);
var p = 196;
var o = 167;
var add = 1;
var y = 96;

var draw = function() {
strokeWeight(3);
background( 0, 0,255);//sky
stroke(61, 45, 1);
line(121,141,52,y);//moving arm
line(337,152,281,142);//other arm

noStroke();
fill(snow);
rect(0,357,400,85);//ground
ellipse(200, 277, 230, 230);//bottom
ellipse(200, 180, 185, 185);//body
ellipse(200, 74, 125, 125);//head
fill(255, 145, 0);
triangle(196,58,196,79,163,71);//nose
fill( 0, 0, 0);
ellipse(172,38,14,14);
ellipse(219,38,14,14);
ellipse(185,96,7,7);//mouth
ellipse(176,90,7,7);
ellipse(207,96,7,7);
ellipse(196,97,7,7);
ellipse(214,91,7,7);
fill(65,3,1);
rect(335,145,6,231);//broom
arc(338,388,50,139,181,360);
fill(255, 0, 0);
rect(145,104,111,12);//scarf
fill( 0, 0, 0);
rect(158,10,84,17);//hat
rect(172,-2,57,14);
stroke(255, 0, 0);

strokeWeight(1);
stroke(snow);


noStroke();
if(y<=96){
 add = 5;   
}
if(y>=175){
add=-5;    
}
y+=add;    
  
var button = function(p,o){

fill( 0, 0, 0);
ellipse(p+1,o,16,16);//button
stroke(snow);
point(p+4,o-1);
point(p,o-5);
point(p,o+3);
point(p-3,o-1);
    
};
button(200,212);
button(200,143);
button(200,175);
}