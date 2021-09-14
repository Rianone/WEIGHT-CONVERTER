var grams = document.getElementById("gram");
var kilograms = document.getElementById("kilo");
var ounces = document.getElementById("oun");
var input = document.getElementById("number");


input.addEventListener("input",function()
{
    var index = input.value;

    grams.innerHTML = index*453.59237;
    kilograms.innerHTML = index/2,205;
    ounces.innerHTML = index*16;

});