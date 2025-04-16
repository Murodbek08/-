// Katalog card in JS
// let aksiyaCards = document.querySelectorAll(".aksiya__cards");
// function aksiyaCard(el) {
//   let aksiyaCard = document.createElement("div");
//   let aksiyaCardImage = document.createElement("a");
//   let spanLike = document.createElement("span");
//   let labelLikeImage = document.createElement("label");
//   let inputChecked = document.createElement("input");
//   let checkmark = document.createElement("div");
//   let svgHeart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   let rectHeart = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//   let pathHeart = document.createElementNS("http://www.w3.org/2000/svg", "path");
//   let spanFoiz = document.createElement("span");
//   let imgBig = document.createElement("img");
//   let sectionАкцииCardTexts = document.createElement("div");
//   let divNarh = document.createElement("div");
//   let narhH3 = document.createElement("h3");
//   let narhH4 = document.createElement("h4");
//   let divUdobstvo = document.createElement("div");
//   let divUdobstvoP1 = document.createElement("p");
//   let divUdobstvoP2 = document.createElement("p");
//   let textH5 = document.createElement("h5");
//   let textDesP = document.createElement("p");
//   let imgRating = document.createElement("img");
//   let cardButton = document.createElement("button");

//   aksiyaCard.className = "aksiya__card";
//   aksiyaCardImage.className = "aksiya__card__image-1";
//   aksiyaCardImage.href = "../pages/Каталог.html";
//   spanLike.className = "like";
//   labelLikeImage.className = "like-image";
//   inputChecked.type = "checkbox";
//   checkmark.className = "checkmark";
//   svgHeart.setAttribute("viewBox", "0 0 256 256");
//   rectHeart.setAttribute("fill", "none");
//   rectHeart.setAttribute("height", "256");
//   rectHeart.setAttribute("width", "256");
//   pathHeart.setAttribute(
//     "d",
//     "M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
//   );
//   pathHeart.setAttribute("stroke-width", "20px");
//   pathHeart.setAttribute("stroke", "#ff0000");
//   pathHeart.setAttribute("fill", "none");
//   spanFoiz.className = "foiz";
//   spanFoiz.innerText = "-50%";
//   imgBig.src = el.images[0];
//   imgBig.alt = "No img !";
//   sectionАкцииCardTexts.className = "section-Акции-card-texts";
//   divNarh.className = "цена";
//   narhH3.innerText = el.price + " ₽";
//   narhH4.innerText = "50,50 ₽";
//   divUdobstvo.className = "удобство";
//   divUdobstvoP1.innerText = "С картой";
//   divUdobstvoP2.innerText = "Обычная";
//   textH5.innerText = el.name;
//   textDesP.className = "text-description-p";
//   textDesP.innerText = el.description;
//   imgRating.src = "../images/index/rating.svg";
//   imgRating.alt = "Rating !";
//   cardButton.innerText = "В корзину";

//   divUdobstvo.append(divUdobstvoP1, divUdobstvoP2);
//   sectionАкцииCardTexts.append(divUdobstvo);
//   aksiyaCard.append(aksiyaCardImage);
//   aksiyaCard.append(sectionАкцииCardTexts);
//   divNarh.append(narhH3);
//   divNarh.append(narhH4);
//   sectionАкцииCardTexts.append(divNarh);
//   sectionАкцииCardTexts.append(textH5);
//   sectionАкцииCardTexts.append(textDesP);
//   sectionАкцииCardTexts.append(imgRating);
//   sectionАкцииCardTexts.append(cardButton);
//   svgHeart.append(rectHeart, pathHeart);
//   checkmark.append(svgHeart);
//   labelLikeImage.append(inputChecked, checkmark);
//   spanLike.append(labelLikeImage);
//   aksiyaCardImage.append(spanLike, spanFoiz, imgBig);
//   return aksiyaCard;
// }
// // Katalog card in Data JS
// let newProducts = products.filter((el) => el.discount > 0).slice(-4);
// newProducts.map((el) => aksiyaCards.append(aksiyaCard(el)));

let novinkiCards = document.querySelectorAll(".novinki__cards");
function novinkiCardAdd(el) {
  let novinkiCard = document.createElement("div");
  let novinkiCardImage = document.createElement("a");
  let novinkiSpanLike = document.createElement("span");
  let novinkiLabelLikeImage = document.createElement("label");
  let novinkiInputChecked = document.createElement("input");
  let novinkiCheckmark = document.createElement("div");
  let novinkiSvgHeart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let novinkiRectHeart = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  let novinkiPathHeart = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let novinkiSpanFoiz = document.createElement("span");
  let novinkiImgBig = document.createElement("img");
  let sectionNovinkiCardTexts = document.createElement("div");
  let novinkiDivNarh = document.createElement("div");
  let novinkiNarhH3 = document.createElement("h3");
  let novinkiNarhH4 = document.createElement("h4");
  let novinkiDivUdobstvo = document.createElement("div");
  let novinkiDivUdobstvoP1 = document.createElement("p");
  let novinkiDivUdobstvoP2 = document.createElement("p");
  let novinkiTextH5 = document.createElement("h5");
  let novinkiTextDesP = document.createElement("p");
  let novinkiImgRating = document.createElement("img");
  let novinkiCardButton = document.createElement("button");

  novinkiCard.className = "novinki__card";
  novinkiCardImage.className = "novinki__card__image-1";
  novinkiCardImage.href = "../pages/Каталог.html";
  novinkiSpanLike.className = "like";
  novinkiLabelLikeImage.className = "like-image";
  novinkiInputChecked.type = "checkbox";
  novinkiCheckmark.className = "novinkiCheckmark";
  novinkiSvgHeart.setAttribute("viewBox", "0 0 256 256");
  novinkiRectHeart.setAttribute("fill", "none");
  novinkiRectHeart.setAttribute("height", "256");
  novinkiRectHeart.setAttribute("width", "256");
  novinkiPathHeart.setAttribute(
    "d",
    "M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
  );
  novinkiPathHeart.setAttribute("stroke-width", "20px");
  novinkiPathHeart.setAttribute("stroke", "#ff0000");
  novinkiPathHeart.setAttribute("fill", "none");
  novinkiSpanFoiz.className = "foiz";
  novinkiSpanFoiz.innerText = "-50%";
  novinkiImgBig.src = el.images[0];
  novinkiImgBig.alt = "No img !";
  sectionNovinkiCardTexts.className = "section-Акции-card-texts";
  novinkiDivNarh.className = "цена";
  novinkiNarhH3.innerText = el.price + " ₽";
  novinkiNarhH4.innerText = "50,50 ₽";
  novinkiDivUdobstvo.className = "удобство";
  novinkiDivUdobstvoP1.innerText = "С картой";
  novinkiDivUdobstvoP2.innerText = "Обычная";
  novinkiTextH5.innerText = el.name;
  novinkiTextDesP.className = "text-description-p";
  novinkiTextDesP.innerText = el.description;
  novinkiImgRating.src = "../images/index/rating.svg";
  novinkiImgRating.alt = "Rating !";
  novinkiCardButton.innerText = "В корзину";

  novinkiDivUdobstvo.append(novinkiDivUdobstvoP1, novinkiDivUdobstvoP2);
  sectionNovinkiCardTexts.append(novinkiDivUdobstvo);
  novinkiCard.append(novinkiCardImage);
  novinkiCard.append(sectionNovinkiCardTexts);
  novinkiDivNarh.append(novinkiNarhH3);
  novinkiDivNarh.append(novinkiNarhH4);
  sectionNovinkiCardTexts.append(novinkiDivNarh);
  sectionNovinkiCardTexts.append(novinkiTextH5);
  sectionNovinkiCardTexts.append(novinkiTextDesP);
  sectionNovinkiCardTexts.append(novinkiImgRating);
  sectionNovinkiCardTexts.append(novinkiCardButton);
  novinkiSvgHeart.append(novinkiRectHeart, novinkiPathHeart);
  novinkiCheckmark.append(novinkiSvgHeart);
  novinkiLabelLikeImage.append(novinkiInputChecked, novinkiCheckmark);
  novinkiSpanLike.append(novinkiLabelLikeImage);
  novinkiCardImage.append(novinkiSpanLike, novinkiSpanFoiz, novinkiImgBig);
  return novinkiCard;
}
// console.log(novinkiCardAdd());

// Katalog card in Data JS
let newNovinkiProducts = products.filter((el) => el.discount > 0).slice(-4);
newNovinkiProducts.map((el) => novinkiCards.append(novinkiCardAdd(el)));
// console.log(newNovinkiProducts);
