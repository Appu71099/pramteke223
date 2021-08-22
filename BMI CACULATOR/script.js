function bmi(){
    var Height = document.getElementById('height').value;
    var Width = document.getElementById('weight').value;
    // console.log(Height);
    // console.log(Width);
    var bmi = Width / (Height / 100 * Height / 100);
    // console.log(bmi);

    var total = bmi.toFixed(2);

     var Result = document.getElementById('result');
    Result.innerHTML = "Your BMI is " + " " + total;
}