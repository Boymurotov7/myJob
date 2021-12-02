//let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

//let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'



let btns = document.querySelectorAll(".btns") 

let top_Rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1`
let popular = `https://api.themoviedb.org/3/movie/popular?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1`
let upComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1'


btns.forEach(item => {
    item.addEventListener('click',function(){
        localStorage.setItem(item.value)
        console.log(item.value)
        get(item.value)
    })
})

async function get(val){
    
    let product = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1`+ val)
    let parsedResponse = await product.json()
    render(parsedResponse)
}
function render(product){
    productAppend.innerHTML = null
    for(let item of product){
        let card = document.createElement('div')
        card.classList.add('append')
        card.innerHTML = `
        <div class="movie">
            <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
   
           <div class="movie-info">
               <h3>${item.original_title}</h3>
               <span class="orange">${item.vote_average}</span>
            </div>
                <span class="date">${item.querySelectorAllrelease_date}</span>
        </div>`
    }
}


async function films() {
    let response = await fetch(upComing)
    let data = await response.json()
    //console.log(data.results)
}
films()
