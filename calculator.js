const display = document.getElementById("display");

function afisare(valoare)
{
    display.value += valoare;
}

function stergere()
{
    display.value = '';
}

function calculare(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "scrie, fa, corect!"
    }
}

function _delete(){
    let v = display.value;
    display.value = v.substring(0, v.length-1)
}