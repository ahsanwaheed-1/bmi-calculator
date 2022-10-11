var button = document.querySelector("button");

button.addEventListener("click", function() {
    var weight = document.querySelector(".weight").value;
    var height = document.querySelector(".height").value;
    var bmi;
    height = height*0.3048;
    bmi = weight/(height*height);
    calculateBmi(height, weight);

function calculateBmi(height, weight) {   
    if(bmi < 18.50){
        document.querySelector(".calculate").innerHTML="Your Bmi is "+bmi.toFixed(2)+" So, you are underweight";
        document.querySelector(".calculate").style.color="blue";
    } else if(bmi >= 18.50 && bmi <= 24.99){
        document.querySelector(".calculate").innerHTML="Your Bmi is "+bmi.toFixed(2)+" So, you have a normal weight";
        document.querySelector(".calculate").style.color="green";
    } else if(bmi > 24.99 && bmi <= 29.99){
        document.querySelector(".calculate").innerHTML="Your Bmi is "+bmi.toFixed(2)+" So, you are overweight";
        document.querySelector(".calculate").style.color="red";
    } else if(bmi >= 30) {
        document.querySelector(".calculate").innerHTML="Your Bmi is "+bmi.toFixed(2)+" So, you are obese";
        document.querySelector(".calculate").style.color="red";
    } else if(bmi < 0){
        document.querySelector(".calculate").innerHTML="Error... Bmi is negative "+bmi.toFixed(2);
        document.querySelector(".calculate").style.color="Grey";
    }
}
});