// console.log('hello');

function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dataDisplay(data))
}

function dataDisplay(data){
    const dataDisplayUl = document.getElementById('loadDataDisplayContainer');
    for(const userId of data){
        console.log(userId.title);
        const li = document.createElement('li');
        li.innerText = userId.title;
        dataDisplayUl.appendChild (li);
    }
}
// loadData2()

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'DELETE',
    })
}


/* 
function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
*/