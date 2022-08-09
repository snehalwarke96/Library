//https://mocki.io/v1/832b645b-acf4-437e-8960-070f15851c52
//https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books

console.log('Our Library');

let authorSel = document.getElementById('authorSel');
let search = document.getElementById('search');
let tblBody = document.getElementById('tblBody');
let tblhead = document.getElementById('tblhead');
let optnall = document.getElementsByClassName('optnall');
let displayIdx;
let allBooks;

updateAuthor();


function updateAuthor(){
 
    let URL=`https://mocki.io/v1/832b645b-acf4-437e-8960-070f15851c52`;
    fetch(URL).then(response =>{
        return response.json();
    })
    .then(data => {
        allBooks=data;
        Array.from(data).forEach((Booklist, index) => {
            
            str=`<option class="optnall" value=${index}>${Booklist.title}</option>`
            authorSel.innerHTML+=str;
        })
        for (const Booklist of data) {
            str=`<option value="ok">${Booklist.author}</option>`
            authorSel.innerHTML+=str;
        }
    })
}

authorSel.addEventListener('click', (e => {
    // console.log(e.target.value); 
    displayIdx=e.target.value;
}))


search.addEventListener('click', (e => {
    console.log(displayIdx);
    console.log(allBooks[displayIdx]);
    let authorDecode =allBooks[displayIdx];
    tblStr=` <tr>
                <td>${authorDecode.author}</td>
                <td>${authorDecode.language}</td>
                <td>${authorDecode.pages}</td>
                <td>${authorDecode.year}</td>
                <td>${authorDecode.country}</td>
                <td> <a target="_blank" href="${authorDecode.link}">Click to More</a></td>
              </tr> `  
     tblBody.innerHTML += tblStr;
}))
   
