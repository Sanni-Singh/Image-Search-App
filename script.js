let inputBox = document.querySelector('#inputBox')
let seaBtn = document.querySelector('#seaBtn')
let container = document.querySelector('.dabba')
let body = document.querySelector('body')
let loadBtn = document.querySelector('#loadBtn')

let apiUrl = `https://api.unsplash.com/search/photos/?client_id=`
let KEY = "puXbNMC-XSqzxWvpIeFJrcK4tGd7ZGLc3cBCyoyI6qs"
let currPage = 1

let flag = true;
async function displayPicture() {
    if(inputBox.value === ""){
        alert("Enter the Text")
        return;
    }
    container.innerHTML=''
    let data = await fetch(`${apiUrl}${KEY}&query=${inputBox.value}&page=${currPage}&per_page=12`)
    let res = await data.json();
    console.log(res);
    res.results.forEach(ele => {
        console.log(ele);

        let dabba = `
            <div class="box">
                <img src="${ele.urls.regular}" alt="">
                <p>${ele.alt_description}</p>
            </div>
        `
        container.innerHTML += dabba;
        
    });
    if(container.innerHTML !== ""){
        loadBtn.style.display="flex"
    }
    else {
        loadBtn.style.display="none"
    }
    currPage++;
    
}
async function displayAnotherPicture() {
    let data = await fetch(`${apiUrl}${KEY}&query=${inputBox.value}&page=${currPage}&per_page=12`)
    let res = await data.json();
    console.log(res);
    res.results.forEach(ele => {
        console.log(ele);

        let dabba = `
            <div class="box">
                <img src="${ele.urls.regular}" alt="">
                <p>${ele.alt_description}</p>
            </div>
        `
        container.innerHTML += dabba;
        
    });
    currPage++;
}
seaBtn.addEventListener('click', displayPicture)
loadBtn.addEventListener('click',displayAnotherPicture)

if(container.innerHTML === ""){
    loadBtn.style.display="none"
}