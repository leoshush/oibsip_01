let displayval = "";
function appendTo(value)
{
    displayval += value;
    document.getElementById("display").value = displayval;
}

function clearDisplay()
{
    displayval ="";
    document.getElementById("display").value = displayval;
}
function calculateResult(){
    try{
        
        const result = eval(displayval);
        displayval = result.toString();
        document.getElementById("display").value = displayval;

    }
    catch(error){
        displayval =" Error";
        document.getElementById("display").value = displayval;
    }
}