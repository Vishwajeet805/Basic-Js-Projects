const textbox=document.getElementById("textbox");
const toCelsiusBtn=document.getElementById("toCelsius");
const toFahrenheitBtn=document.getElementById("toFarenheit");
const result=document.getElementById("result");
let temp;

function Convert(){
    if(toCelsiusBtn.checked){
        temp=Number(textbox.value);
        temp=((temp-32)*5)/9;
        result.textContent=temp.toFixed(2)+`°C`;
    }   
    else if(toFahrenheitBtn.checked){
        temp=Number(textbox.value);
        temp=(temp*9)/5 +32;
        result.textContent=temp.toFixed(2)+`°F`;
    }   
    else{
        result.textContent="Please select a conversion option.";
    }
}