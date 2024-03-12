// let output = document.querySelector(".calcOutput p");
let cm = document.querySelector(".unitHeight h2");
let kg = document.querySelector(".unitWeight h2");
// var heightVal = document.querySelector("#heightInput").value;
// var weightVal = document.querySelector("weightInput").value;


let a = 0;
function checkSelectedRadioButton() {
    var radioButtons = document.getElementsByName('radioButton');

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            if (radioButtons[i].value === 'metric') {

                a =1;

            } else if (radioButtons[i].value === 'imperial') {

                a=2;
            }
            break;
        }
    }
    handleRadioSelected();


}



function handleRadioSelected(){
    if(a===1){
        cm.innerText = "Cm";
        kg.innerText = "Kg";

    }else if(a===2){
        kg.innerText = "Ib";
        cm.innerText = "In";

    }
}


// function logInputValueH(inputH) {
// var heightVal = inputH.value;

// console.log(heightVal);
// }

// function logInputValueW(inputW){
//     var weightVal = inputW.value;
//     console.log(weightVal);
// }



function calculateBmi(){
    var height = document.querySelector("#heightInput").value;
    var weight = document.querySelector("#weightInput").value;
    if(height && weight && a===1){
        var bmi = (weight/(height*height))*10000
        displayBmiResult(bmi);
    }else if(height && weight && a===1){
        displayBmiResult(null);
    }


    else if(height && weight && a===2){
        var bmi = ((weight*0.453592)/(height*0.0254)**2)
        displayBmiResult(bmi);
    }else if(height && weight && a===2){
        displayBmiResult(null);
    }else{
        displayBmiResult(null);

    }

}


function displayBmiResult(bmi){
    var output = document.querySelector(".calcOutput h2");
    if (bmi !== null){
        output.innerText = bmi.toFixed(2);

        document.querySelector(".calcOutput p").textContent = "Your BMI suggests you're a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs.";
    }else{
        output.innerText = "Welcome";
    }



}






