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