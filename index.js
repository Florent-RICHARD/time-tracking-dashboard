let cardDivTop = document.querySelector(".top");
let cardDivBottom = document.querySelector(".bottom");
let lstPeriod = document.querySelectorAll(".p");
let periodActually = "weekly";

function PeriodSelected(index){
    if(periodActually == "daily"){
        return datas[index].timeframes.daily;
    }else if(periodActually == "weekly"){
        return datas[index].timeframes.weekly;
    }else if(periodActually == "monthly"){
        return datas[index].timeframes.monthly;
    }
}

function addDivTop(){
    cardDivTop.innerHTML = ""
    for (let index = 0; index < 3; index++) {
        cardDivTop.innerHTML += 
        `
        <div class="card" id="${datas[index].title}">
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
                    ${PeriodSelected(index).current}hrs
                </span>
                <span class="previous-hours">
                    Last ${periodActually} - ${PeriodSelected(index).previous}hrs
                </span>
            </div>
        </div>
    </div>
        `
    }
}

function addDivBottom(){
    cardDivBottom.innerHTML = ""
    for (let index = 3; index < 6; index++) {
        cardDivBottom.innerHTML += 
        `
        <div class="card" id="${datas[index].title}">
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
                    ${PeriodSelected(index).current}hrs
                </span>
                <span class="previous-hours">
                    Last ${periodActually} - ${PeriodSelected(index).previous}hrs
                </span>
            </div>
        </div>
    </div>
        `
    }
}

addDivTop();
addDivBottom();

lstPeriod.forEach(period => {
    period.addEventListener("click", () => {
        for (let index = 0; index < lstPeriod.length; index++) {
            lstPeriod[index].classList.remove("period-active")
        }
        periodActually = period.id;
        period.classList.toggle("period-active");
        addDivTop();
        addDivBottom();
    })
});