//  card in JS ###################################################################

function aksiyaCard(el, type) {
  let aksiyaCard = document.createElement("div");
  aksiyaCard.className = "aksiya__card";

  let aksiyaCardImage = document.createElement("a");
  aksiyaCardImage.className = "aksiya__card__image-1";
  aksiyaCardImage.href = "../pages/Каталог.html";

  let spanLike = document.createElement("span");
  spanLike.className = "like";

  let labelLikeImage = document.createElement("label");
  labelLikeImage.className = "like-image";

  let inputChecked = document.createElement("input");
  inputChecked.type = "checkbox";

  let checkmark = document.createElement("div");
  checkmark.className = "checkmark";

  let svgHeart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgHeart.setAttribute("viewBox", "0 0 256 256");

  let rectHeart = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rectHeart.setAttribute("fill", "none");
  rectHeart.setAttribute("height", "256");
  rectHeart.setAttribute("width", "256");

  let pathHeart = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathHeart.setAttribute(
    "d",
    "M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
  );
  pathHeart.setAttribute("stroke-width", "20px");
  pathHeart.setAttribute("stroke", "#ff0000");
  pathHeart.setAttribute("fill", "none");

  svgHeart.append(rectHeart, pathHeart);
  checkmark.append(svgHeart);
  labelLikeImage.append(inputChecked, checkmark);
  spanLike.append(labelLikeImage);

  let spanFoiz = document.createElement("span");
  spanFoiz.className = "foiz";
  spanFoiz.innerText = "-50%";

  let imgBig = document.createElement("img");
  imgBig.src = el.images[0];
  imgBig.alt = "No img !";

  aksiyaCardImage.append(spanLike, spanFoiz, imgBig);

  let sectionАкцииCardTexts = document.createElement("div");
  sectionАкцииCardTexts.className = "section-Акции-card-texts";

  let divNarh = document.createElement("div");
  divNarh.className = "цена";

  let narhH3 = document.createElement("h3");
  narhH3.innerText = el.price + " ₽";

  divNarh.append(narhH3);

  if (type === "aksiya") {
    let narhH4 = document.createElement("h4");
    narhH4.innerText = "50,50 ₽";
    divNarh.append(narhH4);
  }

  let divUdobstvo = document.createElement("div");
  divUdobstvo.className = "удобство";

  if (type === "aksiya") {
    let divUdobstvoP1 = document.createElement("p");
    divUdobstvoP1.innerText = "С картой";
    let divUdobstvoP2 = document.createElement("p");
    divUdobstvoP2.innerText = "Обычная";
    divUdobstvo.append(divUdobstvoP1, divUdobstvoP2);
  }

  let textH5 = document.createElement("h5");
  textH5.innerText = el.name;

  let textDesP = document.createElement("p");
  textDesP.className = "text-description-p";
  textDesP.innerText = el.description;

  let imgRating = document.createElement("img");
  imgRating.src = "../images/index/rating.svg";
  imgRating.alt = "Rating !";

  let cardButton = document.createElement("button");
  cardButton.innerText = "В корзину";

  sectionАкцииCardTexts.append(divUdobstvo);
  sectionАкцииCardTexts.append(divNarh);
  sectionАкцииCardTexts.append(textH5);
  sectionАкцииCardTexts.append(textDesP);
  sectionАкцииCardTexts.append(imgRating);
  sectionАкцииCardTexts.append(cardButton);

  aksiyaCard.append(aksiyaCardImage);
  aksiyaCard.append(sectionАкцииCardTexts);

  return aksiyaCard;
}
// Katalog card in Data JS ##########################################################
let aksiyaCards = document.querySelector(".aksiya__cards");
let aksiyaProducts = products.filter((el) => el.discount > 0).slice(-4);
aksiyaProducts.map((el) => aksiyaCards.append(aksiyaCard(el, "aksiya")));

let novinkiCards = document.querySelector(".novinki__cards");
let novinkiProducts = products.filter((el) => el.discount > 0).slice(-8);
novinkiProducts.map((el) => novinkiCards.append(aksiyaCard(el, "novinki")));

let pokupaliCards = document.querySelector(".pokupali__cards");
let pokupaliProducts = products.filter((el) => el.discount > 0).slice(-16);
pokupaliProducts.map((el) => pokupaliCards.append(aksiyaCard(el, "pokupali")));

// Reklama card in js ################################################################

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

let sectionReklamaCards = document.querySelector(".section-reklama-cards");

sectionReklamaCards.append(reklamaCard(reklamaProducts[0], "card-1"));
sectionReklamaCards.append(reklamaCard(reklamaProducts[1], "card-2"));

// Stati card products in js ###############################################

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
