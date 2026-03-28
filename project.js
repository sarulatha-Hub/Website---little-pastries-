function calculateBmi() {
    let w = document.getElementById("weight").value;//this get the value of weight in html (it use to . value)
    let h = document.getElementById("height").value;
    h=h*100//(.innerHTML) this use to show the any text in html page
    let bmi = w/(h*h);//toFixed(2) use to show only two decimal point
   let category = "";
   let color = "";

   // Using if conditions for BMI categories
   if (bmi < 18.5) {
     category = "Underweight";
     color = "blue";
   } else if (bmi >= 18.5 && bmi < 25) {
     category = "Normal weight";
     color = "green";
   } else if (bmi >= 25 && bmi < 30) {
     category = "Overweight";
     color = "orange";
   } else {
     category = "Obese";
     color = "red";
   }

   document.getElementById("result").innerHTML = "Your BMI is " + bmi + " (" + category + ")";
   // alert("Your BMI is " + bmi);
}