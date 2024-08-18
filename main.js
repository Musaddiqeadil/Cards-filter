const cardsContainer = document.querySelector(".card-container");

const makeCards = (data) => {
    var elements = "";
    for (let i = 0; i < data.length; i++) {
        elements = elements + `
        <div class="card">
        <img src="${data[i].Image}" alt="">
        <div class="card-content">
            <h2>${data[i].name}</h2>
            <p>${data[i].discription}</p>
        </div>
      </div>
        `;
    }

    cardsContainer.innerHTML = elements;
}


const cards = makeCards(data);


const filterbutton = (type) => {

    if (type == "all") {
        makeCards(data)
    }
    else {
        const newArr = data.filter(item => item.type === type);
        makeCards(newArr)
    }



}


const btn1 =document.querySelector(".btn-1");
const btn2 =document.querySelector(".btn-2");
const btn3 =document.querySelector(".btn-3");
const btn4 =document.querySelector(".btn-4");
const btn5 =document.querySelector(".btn-5");

const activeToggle = (num)=>{
    btn1.classList.remove("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
    btn5.classList.remove("active")
   
    if(num == 1 ){
        btn1.classList.add("active");
    }
    else if(num ==2){
        btn2.classList.add("active");
    }
    else if(num == 3){
        btn3.classList.add("active");
    }
    else if(num == 4){
        btn4.classList.add("active");
    }
    else if(num == 5){
        btn5.classList.add("active");
    }
    
}