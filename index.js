let cardDivTop = document.querySelector(".top");
let cardDivBottom = document.querySelector(".bottom");

datas.forEach(data => {
    console.log(data);
});


function addDivTop(){
    for (let index = 0; index < 3; index++) {
        cardDivTop.innerHTML += 
        `
        <div class="card" id="work">
        <div class="img" id="${datas[index].id}">
            <img src="${datas[index].img}" alt="">
        </div>
        <div class="description-container">
            <div class="description-title">
                <div class="title">
                    <span>${datas[index].title}</span>
                </div>
                <div class="icone">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div class="description-hours">
                <span class="hours">
                    ${datas[index].timeframes.weekly.current}hrs
                </span>
                <span class="previous-hours">
                    Last week - ${datas[index].timeframes.weekly.previous}hrs
                </span>
            </div>
        </div>
    </div>
        `
    }
}

function addDivBottom(){
    for (let index = 3; index < 6; index++) {
        cardDivBottom.innerHTML += 
        `
        <div class="card" id="work">
        <div class="img" id="${datas[index].id}">
            <img src="${datas[index].img}" alt="">
        </div>
        <div class="description-container">
            <div class="description-title">
                <div class="title">
                    <span>${datas[index].title}</span>
                </div>
                <div class="icone">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div class="description-hours">
                <span class="hours">
                    ${datas[index].timeframes.weekly.current}hrs
                </span>
                <span class="previous-hours">
                    Last week - ${datas[index].timeframes.weekly.previous}hrs
                </span>
            </div>
        </div>
    </div>
        `
    }
}

addDivTop();
addDivBottom();