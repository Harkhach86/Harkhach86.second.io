let nav = document.querySelector(".nav_menu");
let nav_position = document.querySelector(".nav_position")


let navBar = "";
let navObj = ["О комплексе", "О компании", "Новости", "Медиа-банк", "Контакты"];
navObj.forEach((navMenu) => {
    navBar = `
    <a href="#" class="menue_li"><li >${navMenu}</li></a>
    `
    nav.insertAdjacentHTML("beforeend", navBar)
    nav_position.insertAdjacentHTML("beforeend", navBar)
})

///// Новости
let newInfo = [
    {
        img: "imges/info_img.jpeg",
        data: "08.11.2022",
        text: "Как объединилась реальность c и виртуальность – LIKEE PARTY"
    },
    {
        img: "imges/info_img_2.jpeg",
        data: "07.11.2022",
        text: "Как объединилась реальность a и виртуальность – LIKEE PARTY"
    },
    {
        img: "imges/info_img_3.jpeg",
        data: "06.11.2022",
        text: "Как объединилась реальность weffew и виртуальность – LIKEE PARTY"
    },
];
let html_div = document.querySelector(".cont_info");

let info_div = "";
newInfo.forEach((item) => {
    info_div = `<div class="new__info">
            <img src="${item.img}" alt="" class="obj_img">
        <div class="text_box_new__info">
            <p class="new__info_data" style="color: red">${item.data}</p>
            <p class="new__info_text">${item.text}</p>
        </div>
    </div>
`
    html_div.insertAdjacentHTML("beforeend", info_div);
})

// for (let x = 0; x < newInfo.length; x++) {
//     let info_div = `<div class="new__info">
//             <img src="${newInfo[x].img}" alt="" class="obj_img">
//         <div class="text_box_new__info">
//             <p class="new__info_data" style="color: red">${newInfo[x].data}</p>
//             <p class="new__info_text">${newInfo[x].text}</p>
//         </div>
//     </div>
// `
// html_div.insertAdjacentHTML("beforeend",info_div)
// }

/////// Event

let x = window.matchMedia('(max-width: 1100px)')
let y = window.matchMedia('(max-width: 500px)');
let z = window.matchMedia('(min-width: 1100px)');
let search = document.querySelector(".fa-search");
document.querySelector(".login").classList.add("media_off_width");
let nav_burger = document.querySelector(".burger_menu");
let nav_position_close = document.querySelector(".nav_position_close");
let burger = document.querySelector(".nav_position");


nav_burger.addEventListener("click", () => {
    burger.style.display = "block";
    burger.style.transition = "all .5s";
    nav_position_close.addEventListener("click", () => {
        burger.style.display = "none"
    })
})


search.addEventListener("click", () => {
    document.querySelector(".login").style.width = "350px";
    let input = document.querySelector(".search_menu");
    input.style.display = "block";
    input.classList.add("input_search");
    document.querySelector(".login").style.transition = "0.8s";

    if (x.matches) {
        document.querySelector(".login").style.width = "450px";
    }
    if (y.matches) {
        document.querySelector(".login").style.width = "250px";
    }
});


search.addEventListener("mousedown", () => {
    document.querySelector(".login").style.width = "150px";
    if (x.matches) {
        document.querySelector(".login").style.width = "300px";
    }
    if (y.matches) {
        document.querySelector(".login").style.width = "200px";
    }
    let input = document.querySelector(".search_menu");
    input.style.display = "none";
    input.classList.remove("input_search");
    document.querySelector(".login").classList.add("media_off_width");
})

////// Harut

const container = [
    {
        image: "./imges/1.jpg",
        dates: "2 января 2020 г. – 7 января 2020 г.",
        title: "ЭКСПО ЕЛКА",
        text: "Парк интерактивных развлечений"
    },
    {
        image: "./imges/2.jpg",
        dates: "5 февраля 2020 г. – 9 февраля 2020 г.",
        title: "Junwex Петербург",
        text: "Выставка ювелирных изделий"
    },
    {
        image: "./imges/3.jpg",
        dates: "7 февраля 2020 г. – 9 февраля 2020 г.",
        title: "Невский ларец",
        text: "Выставка-ярмарка народных художественных промыслов и ремесел"
    },
    {
        image: "./imges/4.jpg",
        dates: "14 февраля 2020 г. – 23 февраля 2020 г.",
        title: "ПОНАЕХАЛИ!",
        text: "Специализированная арт-ярмарка"
    },
    {
        image: "./imges/5.jpg",
        dates: "18 февраля 2020 г. – 21 февраля 2020 г.",
        title: "VET.CAMP",
        text: "Конференция для ветеринарных врачей"
    },
    {
        image: "./imges/6.jpg",
        dates: "26 февраля 2020 г. – 28 февраля 2020 г.",
        title: "ExpoHoReCa",
        text: "Специализированная выставка"
    },
];



let toAdd = document.getElementsByClassName("content-items");

for (let i = 0; i < container.length; i++) {
    let newDivContent =
        `<div class="content-item">
        <div class="img">
            <img src="${container[i].image}" alt="Image">
        </div>
        <div class="text">
            <span class="content-first-text">${container[i].dates}</span>
            <h2 class="content-second-text">${container[i].title}</h2>
            <p class="content-thirth-text">${container[i].text}</p>
        </div>
    </div>`;
    toAdd[0].insertAdjacentHTML("beforeend", newDivContent);
}


let colourful_obj = [
    {
        text: "Календарь мероприятий",
        color: "#2378FC"
    },
    {
        text: "Как добраться до Экспофорума",
        color: "#30BCC9"
    },
    {
        text: "Календарь мероприятий Онлайн-заявка на организацию мероприятия",
        color: "#FFC41E"
    },
    {
        text: "План и инфраструктура комплекса",
        color: "#F6404F"
    }

]
let header_cont_mini_box = document.querySelector(".header_cont_mini_box");
let header_cont_mini_box_objet = "";
colourful_obj.forEach((headerBox) => {
    header_cont_mini_box_objet = `
    <div class="colourful_box" style = "background:${headerBox.color};" >
        <p>${headerBox.text}</p>
        <button class="header_but">Подробнее <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
    </div >
    `
    header_cont_mini_box.insertAdjacentHTML("beforeend", header_cont_mini_box_objet)
})

/// Servis Info 
let servisInfoObj = [
    {
        title:"Организаторам",
        textId_1:"Документы организаторам",
        textId_2:"Услуги организаторам",
        textId_3:"Выставочные площади",
        textId_4:"Рестораны и кафе",
        textId_5:"Конгресс-центр",
        textId_6:"Спорт-центр",
    },
    {
        title:"Экспонентам",
        textId_1:"Общие условия участиям",
        textId_2:"Услуги экспонентам",
        textId_3:"Документы экспонентам",
        textId_4:"Центр деловых контактов",
        textId_5:"Забронировать гостиницу",
        textId_6:" ",
    },
    {
        title:"Посетителям",
        textId_1:"Сервисы",
        textId_2:"Онлайн-регистрация на мероприятие ",
        textId_3:"Забронировать гостиницу",
        textId_4:"Центр деловых контактов",
        textId_5:"",
        textId_6:"",
    },
    {
        title:"Прессе",
        textId_1:"Аккредитация",
        textId_2:"Пресс-служба",
        textId_3:"Правила аккредитации",
        textId_4:"",
        textId_5:"",
        textId_6:"",
    },
]
let continer_meun = document.querySelector(".continer_servis");
let servisInfo = "";
servisInfoObj.forEach((itme)=>{
    
    servisInfo = `
    <div class="continer_meun">
        <h2 class="title">${itme.title}</h2>
        <p class="text">${itme.textId_1}</p>
        <p class="text">${itme.textId_2}</p>
        <p class="text">${itme.textId_3}</p>
        <p class="text">${itme.textId_4}</p>
        <p class="text">${itme.textId_5}</p>
        <p class="text">${itme.textId_6}</p>
    </div>
    ` 
    
    continer_meun.insertAdjacentHTML("beforeend",servisInfo)
})


// Delete
// const obj = {
//     a: undefined,
//     b: 'test',
//     c: undefined,
//   };
  
//   Object.keys(obj).forEach(key => {
//     if (obj[key] === undefined) {
//       delete obj[key];
//     }
//   });
  
//   console.log(obj);
