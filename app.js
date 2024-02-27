console.log('hello');

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadTitle() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => loadTitledisplay(json))
}

function loadTitledisplay(json) {
    console.log(json.title);
}