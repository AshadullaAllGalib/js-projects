const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = " Ouch Ha  !  🤔";
    event.target.style.color = "white";
})
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = " Don't Do it 🙄";
    event.target.style.color = "white";
})
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Click ME 🤨";
    event.target.style.color = "white";
})