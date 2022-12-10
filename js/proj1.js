function getInputValue() {
    let inputVal = document.getElementById("typeNumber").value
    
    const celsius = document.getElementById("typeNumber").value - 273;
    let fahrenheit = celsius*9/5+32;
    fahrenheit = Math.floor(fahrenheit);
    fahrenheit = 'The temperature is ' + fahrenheit + ' degrees fahrenheit'
    document.getElementById("result").innerHTML = fahrenheit;
}


function clear_inputs() {
    inputs = document.getElementsByClassName('inputs')
    for(input of inputs ) {
        input.value= ' '
    }

     
   
}

function clear() {
    documet.getElementByClassName("result").innerHTML= " ";
}