fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(data => {
    ramenCollector(data);
    ramenImgInit(ramenContainer);
    ramenDetails();
  })

// console.log(data)

document.addEventListener('DOMContentLoaded', (event) => {
    render.;
});


const menu = document.querySelector('div#ramen-menu')
const form = document.querySelector( 'form#new-ramen')
const details = document.querySelector ('div#ramen-detail')

const image = document.querySelector('img.detail-image') 
const name = document.querySelector('h2.name' ) 
const restaurant = document.querySelector('h3.restaurant')
const rating = document.querySelector('span#rating-display')
const comments = document.querySelector('p#comment-display') 

const ramenContainer = []
const ramenSubmit = []

const displayRating = (rating) => {
    const card = document.createElement('li')
    const title = document.createElement ( 'h3')
    const subHeading = document.createElement ( 'p')
    const price = document.createElement ( 'p')
    const img = document.createElement ('img' )
    const btn = document.createElement ( 'button')
}

.addEventListener('click'.ramen, (event) => {
    render: ramenobj.rating in );
});


function ramenCollector (param) {
    param.forEach((ramen, i) => {
        ramenContainer.push (param[i]) 
    })
    console. log(ramenContainer)
  }
  
  function imageInit(source) {
        source.forEach ((keyValue) => {
            ramenBuilder(keyValue)
        })
  }