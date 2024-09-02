const PI = 3.1415;
let radius;
let circumference;

document.getElementById("subbtn").onclick = function () {
    radius = document.getElementById("intext").value;
    circumference = 2 * PI * radius;
    document.getElementById("cirvalue").textContent = circumference + "cm";
}