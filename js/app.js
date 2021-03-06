// search place 
const searchBook = ()=> {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))   
}
    // Showing Books 
const displaySearchResult = books =>{
    //  console.log(books)
     const resultNumber = document.getElementById('p')
    const searchResult = document.getElementById('search-result');
    const errorResult = document.getElementById('error')
    
     resultNumber.innerText =`Search Number: ${books.length}`
    
    
    
    if(books.length === 0){
        error.innerHTML= '<p>There is no result found.Please search something meaningful</p>'
    }
    else{
        books.forEach(book =>{
        error.innerHTML = ''
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = 
            `
               <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
             <div class="card-body">
              <h5 class="card-title">Books Name: ${book.title}<h5>
                 <h5 class="card-title">Author Name: ${book.author_name[0]}</h5>
                 <h5 class="card-title">Publisher Name: ${book.publisher[0]}</h5>
                 <h5 class="card-title">First Publish Year: ${book.first_publish_year}</h5>
             </div>
           </div>
            `;
         
            searchResult.appendChild(div)
            searchResult.appendChild(errorResult)
            
        })
    }    
}







