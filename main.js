let searchBox = document.querySelector(".search-box");

searchBox.addEventListener('keypress', (e) => {
    if (e.which === 13) {
        createToDo();
    }
})

function createToDo() {
    if (searchBox.value !== "") {
        let ul = document.createElement("ul");
        let li = document.createElement('li');
        let span = document.createElement('span');
        let p = document.createElement('p');

        document.querySelector(".right").appendChild(ul);
        ul.appendChild(li);
        li.appendChild(span);
        // p.appendChild(span);
        li.textContent = searchBox.value;
        span.innerText = "DONE";
        searchBox.value = "";
    }
}