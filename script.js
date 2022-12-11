const body = document.querySelector("body");
const link = document.querySelector('nav-link')
const API = 'FB5wRDAANjpoZHQ63pJv4AGdBRAHgoYM'

let home = 'home'
let world = 'world'
let politics = 'politics'
let technology = 'technology'
let science = 'science'
let arts = 'arts'
let fashion = 'fashion'
let food = 'food'
let travel = 'travel'

let homeBtn = document.getElementById('home')       
let worldBtn = document.getElementById('world')      
let politicsBtn = document.getElementById('politics')   
let technologyBtn = document.getElementById('technology') 
let scienceBtn = document.getElementById('science')    
let artsBtn = document.getElementById('arts')       
let fashionBtn = document.getElementById('fashion')    
let foodBtn = document.getElementById('food')       
let travelBtn = document.getElementById('travel')     

window.onload=function(){
 fetchApi(home)   
}

homeBtn.addEventListener('click',function(){
  fetchApi(home)
  console.log('whome')
}) 
worldBtn.addEventListener('click',function(){
  fetchApi(world)
  console.log('world')
})  
politicsBtn.addEventListener('click',function(){
  fetchApi(politics)
  console.log('politics   ')
})   
technologyBtn.addEventListener('click',()=>{
  fetchApi(technology)
  console.log('technology ')
}) 
scienceBtn.addEventListener('click',()=>{
  fetchApi(science)
  console.log('science    ')
})    
artsBtn.addEventListener('click',()=>{
  fetchApi(arts)
  console.log('arts       ')
})       
fashionBtn.addEventListener('click',()=>{
  fetchApi(fashion)
  console.log('fashion    ')
})

function fetchApi(e) {
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${e}.json?api-key=${API}`
  )
    .then((response) => {
      response.json().then((data) => {
        const datas = data.results;
        console.log(datas);
        datas.forEach((element) => {
          const title = element.title;
          const date = Date.parse(element.published_date);
          const d = new Date(parseInt(date) * 1000)
            .toLocaleDateString("en-ZA", {
              month: "long",
              day: "2-digit",
            })
            .replace(/\./g, "-");
          const fDate = d.toString();
          const content1 = element.abstract
          const content = document.createElement("div");
          content.className = "content";
          const card = document.createElement("div");
          const i = [];
          const i1 = [];
          const im = element.multimedia.forEach((e) => {
            i.push(e);
          });
          const im1 = i.forEach((e) => {
            i1.push(e.url);
          });
          card.innerHTML = `
          <div class="card mb-3" style="margin:20px 0px ;" id="card">
            <div class="row" id="c-row">
                <div class="col-md-8" id="c-col">
                    <div class="card-body" id="c-body">
                        <h5 class="card-title">${e.toLocaleUpperCase()}</h5>
                        <p class="card-subtitle" id="title">${title}</p>
                        <p class="card-subtitle">${fDate}</p>
                        <p class="card-text">${content1}</p>
                        <button type="button" class="bttn" >Continue Reading</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <img id="image"
                    src=${i1[0]} 
                        class="img-thumbnail rounded float-end" alt="...">
                </div>
            </div>
        </div>`;
          content.append(card);
          body.append(content);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}



    
