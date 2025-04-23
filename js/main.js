// ############################## Umumiy card FUNksiyasi Hamma pagelar uchun ############################################

function aksiyaCard(el, type) {
  let aksiyaCard = document.createElement("div");
  aksiyaCard.className = "aksiya__card";

  let aksiyaCardImage = document.createElement("a");
  aksiyaCardImage.className = "aksiya__card__image-1";
  aksiyaCardImage.href = "../pages/Товар.html";

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
  spanFoiz.innerText = el.discount + " %";

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

// ############################## Katalog menu funksiya kodlar ############################################

let navMenuUl = document.querySelector(".nav-menu-ul");

function navMenuKatalog(el) {
  let katalogDiv = document.createElement("div");
  let katalogA = document.createElement("a");

  katalogA.href = "#";
  katalogA.innerText = el.text;

  katalogDiv.append(katalogA);

  return katalogDiv;
}

katalogData.map((el) => navMenuUl.append(navMenuKatalog(el)));

// ############################## Katalog menu hamburger ############################################

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
});
