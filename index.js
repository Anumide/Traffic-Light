var redLight = document.getElementById("circle_1");
var yellowLight = document.getElementById("circle_2");
var greenLight = document.getElementById("circle_3");
var button = document.getElementById("btn");

    clearColor = ()=>{
        redLight.className = "circumference";
        yellowLight.className = "circumference";
        greenLight.className = "circumference";
    }


 function redColor(){
     clearColor();
     redLight.className = "red";
 }

 function yellowColor(){
    clearColor();
    yellowLight.className = "yellow";
 }

 function greenColor(){
    clearColor();
     greenLight.className = "green";
 }




button.onclick = ()=>{
    redColor();

    setTimeout(yellowColor, 3000);
    setTimeout(greenColor, 6000);
}