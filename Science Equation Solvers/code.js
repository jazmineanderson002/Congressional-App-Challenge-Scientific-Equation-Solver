onEvent("hardyButton", "click", function() 
{
  setScreen("2HardyProblemScreen");
});

onEvent("standDevButton", "click", function() 
{
  setScreen("4standardDevScreen");
});

onEvent("percentErrorButton", "click", function() 
{
  setScreen("6percentError");
});

onEvent("kinematicButton", "click", function() 
{
  setScreen("7kinematicEquations");
});




var population = getText("text_PopulationSize");
var dominant = getText("text_Dominant");
var recessive = getText("text_Recessive");

var int = 0;
var pq = 0;
//var root = 0;
//var valueQSquared = 0;



function findQSquared()
  {
   population = getText("text_PopulationSize");
   dominant = getText("text_Dominant");
   recessive = getText("text_Recessive");
   int = recessive / population;
   setText("qSquared_area", int.toFixed(2));

  }
  
function findQ()
{
    var squareRoot = Math.sqrt(int);
    population = getText("text_PopulationSize");
    recessive = getText("text_Recessive");
    int =  recessive / population;
    setText("q_area", squareRoot.toFixed(2));

}

function findP()
{
  var squareRoot = Math.sqrt(int);
  int = 1 - squareRoot;
  setText("p_area",int.toFixed(2));
  
}

function findPSquared()
{
  
  var answer = int;
  int = answer*answer;
  setText("pSquared_area", int.toFixed(2));
  
}

function findTwoPQ()
{
  
  var p = getText("p_area");
  var q = getText("q_area");
  int =  2*p*q;
  setText("2pq_area", int.toFixed(2));
  
  
}

function findLastAnswer()
{
  var answer = int;
  var p = getText("p_area");
  var q = getText("q_area");
  int = answer*answer + 2*p*q;
  setText("p²+2pq_area", (int+pq).toFixed(2));
  
}

onEvent("buttonAnswer", "click", function() 
{
  setScreen("3Hardyscreen");
  findQSquared();
  findQ();
  findP();
  findPSquared();
  findTwoPQ();
  findLastAnswer();
});

onEvent("buttonReset", "click", function() 
{
  setText("text_PopulationSize", "");
  setText("text_Dominant", "");
  setText("text_Recessive", "");
  setScreen("2HardyProblemScreen");
});

onEvent("homeButton", "click", function( ) {
  setScreen("1Screen");
});



var sum,mean,samples;
var square1, square2, square3, square4, square5, sumOfAllSquares,division,finalSquared;
samples = 5;

onEvent("subButton", "click", function() {
sum = getNumber("num1")+getNumber("num2")+getNumber("num3")+getNumber("num4")+getNumber("num5");
mean = sum/samples;
square1 = Math.pow((getNumber("num1")- mean), 2);
square2 = Math.pow((getNumber("num2")- mean), 2);
square3 = Math.pow((getNumber("num3")- mean), 2);
square4 = Math.pow((getNumber("num4")- mean), 2);
square5 = Math.pow((getNumber("num5")- mean), 2);
sumOfAllSquares = square1 +square2 + square3 + square4 + square5;
division = sumOfAllSquares / (samples - 1);
finalSquared = Math.sqrt(division);
setScreen("5StandardDev");
setText("MEAN", "Mean: " + mean.toFixed(2)); 
setText("STANDARDDEV","Standard Deviation: " + finalSquared.toFixed(2));
});

onEvent("resBut", "click", function( ) {
  setText("num1", "");
  setText("num2", "");
  setText("num3", "");
  setText("num4", "");
  setText("num5", "");
  setScreen("4standardDevScreen");
});

onEvent("homeBut", "click", function( ) {
  setScreen("1Screen");
});

var percentError, aVal, eVal;
onEvent("calcButton", "click", function( ) {
 aVal = getNumber("acceptVal");
 eVal = getNumber("exVal");
 percentError = ((aVal - eVal) / aVal )* 100;
 setText("percentErrorLabel", "Percent Error: " + percentError.toFixed(2) + "%"); 
});
onEvent("buttonreset", "click", function( ) {
  setText("acceptVal", "");
  setText("exVal", "");
  setText("percentErrorLabel", "");
});
onEvent("buttonHome", "click", function( ) {
  setScreen("1Screen");
});
var displacement, finalVelocity, averageDisplacement, accelVal, initVal, timeVal;
onEvent("calculate","click", function( ) {
  accelVal = getNumber("acceleration");
  initVal = getNumber("intiVelocity");
  timeVal = getNumber("time");
  displacement = (initVal*timeVal)+(accelVal*timeVal*timeVal)/2;
  finalVelocity = initVal + (accelVal*timeVal);
  averageDisplacement = ((initVal + finalVelocity)/2)* timeVal;
  setScreen("screen8");
  setText("avgArea", + averageDisplacement.toFixed(2) + " meters");
  setText("disArea", displacement.toFixed(2) + " meters");
  setText("finalArea", finalVelocity.toFixed(2) + " m/s");
});
onEvent("restBut", "click", function( ) {
  setScreen("7kinematicEquations");
  setText("finalArea","");
  setText("disArea","");
  setText("avgArea","");
});

