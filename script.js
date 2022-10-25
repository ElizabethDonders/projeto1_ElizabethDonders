function compute()
{
//Creation of Variables below 
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;

// Creating a variable to check the current year
var year = new Date().getFullYear()+parseInt(years);

// Creating a condition to check the input data
if (principal==undefined|| principal<=0){
    alert ("Enter a positive number");
    document.getElementById("principal").focus();
    return
}
else{
    var deposit = "If you deposit <mark>" + principal+",</mark><br>";
    var rt = "at an interest rate of <mark>" + rate+"%,</mark><br>";
    var amount = "You will receive an amount of <mark>"+ interest+",</mark><br>";
    var year1 = "in the year <mark>" + year +"</mark>"; 
    
    document.getElementById("result").innerHTML=deposit+rt+amount+year1;
}
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval
}



