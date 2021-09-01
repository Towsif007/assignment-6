const searchBook = ()=> {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs[0].seed))   
}

const displaySearchResult = books =>{
    
    const searchResult = document.getElementById('search-result');
    books.forEach(book =>{
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = 
        `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${book.docs[0].title}</h5>
         </div>
       </div>
        `;
        searchResult.appendChild(div)
    })
    
}



// ${data.docs[0].title}








// searchBook('title')

// const searchBook = ()=> {
//     const searchField = document.getElementById('search-field')
//     const searchText = searchField.value;
    
//     searchField.value = '';
//     const url = `http://openlibrary.org/search.json?q=javascript`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.docs[0].seed))   
// }

//