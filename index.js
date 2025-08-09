let counter = 0;

document.getElementById("Increase").onclick = function(){
    counter++;
    document.getElementById("count").textContent=counter;
}

document.getElementById("Decrease").onclick = function(){
    counter--;
    document.getElementById("count").textContent=counter;
}

document.getElementById("Reset").onclick = function(){
    counter = 0;
    document.getElementById("count").textContent=counter;
}