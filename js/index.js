// import { aksiyaCard } from "./main.js";/\

// ######################### Api Tab Java Skript dode iframe map uchin ishlatildi ##################################

const tabs = document.querySelectorAll(".ap-tab-link");
const tabs_content = document.querySelectorAll(".ap-tab-content");

function getActiveTab(i) {
  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");
  });
  tabs_content.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
    tabContent.style.display = "none";
  });

  const selectedTab = tabs[i];
  const selectedTabContent = tabs_content[i];

  selectedTab.classList.add("active-tab");
  selectedTabContent.classList.add("active-tab");
  selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    e.preventDefault();
    getActiveTab(i);
  });
}

// ###################################### Tugadi ############################################################

// ########################### Акции cardlari uchun Java Akript codi  ######################################

let aksiyaCards = document.querySelector(".aksiya__cards");
let aksiyaProducts = products.filter((el) => el.discount > 0).slice(-4);
aksiyaProducts.map((el) => aksiyaCards.append(aksiyaCard(el, "aksiya")));

// ########################### Новинки cardlari uchun Java Akript codi  ######################################

let novinkiCards = document.querySelector(".novinki__cards");
let novinkiProducts = products.filter((el) => el).slice(-4);
novinkiProducts.map((el) => novinkiCards.append(aksiyaCard(el, "novinki")));

// ########################### Покупали cardlari uchun Java Akript codi  ######################################

let pokupaliCards = document.querySelector(".pokupali__cards");
let pokupaliProducts = products.toSorted((a, b) => b.price - b.price).slice(0, 4);
pokupaliProducts.map((el) => pokupaliCards.append(aksiyaCard(el, "pokupali")));

// ######################################### Cardlar kodi Tugadi  ############################################

// ###################### Специальные предложения Java Skript Funksiyasi  ####################################
let sectionReklamaCards = document.querySelector(".section-reklama-cards");
function reklamaCard(el, card) {
  let reklamaCardbg = document.createElement("div");
  if (card === "card-1") {
    reklamaCardbg.className = "section-reklama-card-1";
  } else if (card === "card-2") {
    reklamaCardbg.className = "section-reklama-card-2";
  }

  let reklamaCardTexts = document.createElement("div");

  let reklamaCardTextsH3 = document.createElement("h3");
  reklamaCardTextsH3.innerText = el.name;

  let reklamaCardTextsP = document.createElement("p");
  reklamaCardTextsP.innerText = el.paragrapx;

  let reklamaCardImg = document.createElement("img");
  reklamaCardImg.src = el.img;
  reklamaCardTexts.append(reklamaCardTextsH3, reklamaCardTextsP);
  reklamaCardbg.append(reklamaCardTexts, reklamaCardImg);

  return reklamaCardbg;
}
// ###################### Специальные предложения Java Skript card 1  ####################################

sectionReklamaCards.append(reklamaCard(reklamaProducts[0], "card-1"));

// ###################### Специальные предложения Java Skript card 2  ####################################

sectionReklamaCards.append(reklamaCard(reklamaProducts[1], "card-2"));

// ###################################### Tugadi ##########################################################

// ################################ Stati card  Funksiyasi  ###############################################

function statiProductsCard(el) {
  let statiCard = document.createElement("div");
  statiCard.className = "section-Статьи-card";

  let statiImg = document.createElement("img");
  statiImg.src = el.img;
  statiImg.alt = "No img !";

  let statiSpan = document.createElement("span");
  statiSpan.innerText = el.date;

  let statiH4 = document.createElement("h4");
  statiH4.innerText = el.name;

  let statiP = document.createElement("p");
  statiP.innerText = el.paragrapx;

  let statiBtn = document.createElement("button");
  statiBtn.innerText = "Подробнее";

  statiCard.append(statiImg, statiSpan, statiH4, statiP, statiBtn);
  return statiCard;
}
let sectionStatiCards = document.querySelector(".section-Статьи-cards");

statiProducts.map((el) => sectionStatiCards.append(statiProductsCard(el)));
