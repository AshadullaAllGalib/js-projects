function addLanguage (langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}
addLanguage('Python')
addLanguage('Java')
addLanguage('php')

//edit
const first = document.querySelector("li:first-child");
// first.innerHTML = "Mojo";
const newEl = document.createElement('li');
newEl.textContent = "Mojo"
first.replaceWith(newEl);

//delete

const last = document.querySelector('li:last-child')
last.remove();