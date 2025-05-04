function generalFunction() {
  getHomeCards();
  izbrannoeCard();
  mainProductCard();
  tovarFunction();
}
function aksiyaCard({ discount, price, images, name, description, id, rating }, type) {
  let chekcLikeRed = likeCountData.find((pr) => pr.id == id);
  let chekcCardeRed = korzinkaCardData.find((pr) => pr.id == id);
  let aksiyaCard = document.createElement("div");
  aksiyaCard.className = "aksiya__card";
  let aksiyaCardImage = document.createElement("div");
  aksiyaCardImage.className = "aksiya__card__image-1";
  let spanLike = document.createElement("span");
  spanLike.className = "like";
  spanLike.addEventListener("click", () => addLike(`${id}`));
  let svgHeart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgHeart.setAttribute("viewBox", "0 0 512 512");
  let pathHeart = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathHeart.setAttribute(
    "d",
    "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
  );
  pathHeart.classList = `${chekcLikeRed ? "active-like" : ""}`;
  svgHeart.append(pathHeart);
  spanLike.append(svgHeart);
  let spanFoiz = document.createElement("span");
  spanFoiz.className = "foiz";
  spanFoiz.innerText = discount + " %";
  let imgMahsulot = document.createElement("a");
  imgMahsulot.className = "img-mahsulot";
  imgMahsulot.href = "../pages/Товар.html";
  let imgBig = document.createElement("img");
  imgBig.src = images[0];
  imgBig.alt = "No img !";
  imgMahsulot.append(imgBig);
  aksiyaCardImage.append(spanLike, spanFoiz, imgMahsulot);
  let sectionАкцииCardTexts = document.createElement("div");
  sectionАкцииCardTexts.className = "section-Акции-card-texts";
  let divNarh = document.createElement("div");
  divNarh.className = "цена";
  let narhH3 = document.createElement("h3");
  narhH3.innerText = price + " ₽";
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
  textH5.innerText = name;
  let textDesP = document.createElement("p");
  textDesP.className = "text-description-p";
  textDesP.innerText = description;
  let imgRating = document.createElement("img");
  for (let i = 1; i <= rating; i++) {
    if (i == 1) {
      imgRating.src = "../images/tovar/rating-1.svg";
    } else if (i == 2) {
      imgRating.src = "../images/tovar/rating-2.svg";
    } else if (i == 3) {
      imgRating.src = "../images/tovar/rating-3.svg";
    } else if (i == 4) {
      imgRating.src = "../images/tovar/rating-4.svg";
    } else if (i == 5) {
      imgRating.src = "../images/tovar/rating-5.svg";
    }
  }
  imgRating.alt = "Rating !";
  let cardButton = document.createElement("button");
  cardButton.innerText = "В корзину";
  cardButton.className = `${chekcCardeRed ? "active-card" : ""}`;
  cardButton.setAttribute("onClick", `addCard(${id})`);
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
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  const toggleStorage = localStorage.getItem("katalog-menu");
  if (toggleStorage === "active") {
    menu.classList.add("active");
  }
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      if (menu.classList.contains("active")) {
        localStorage.setItem("katalog-menu", "active");
      } else {
        localStorage.setItem("katalog-menu", "no-active");
      }
    });
  });
});
let korzinkaCardCount = document.querySelectorAll("#korzinka_card_count");
let JsonCardCount = localStorage.getItem("korzinkaCardData");
let korzinkaCardData = JSON.parse(JsonCardCount) || [];
function getCardCount() {
  korzinkaCardCount.forEach((countCards) => {
    countCards.textContent = korzinkaCardData.length;
  });
}
getCardCount();
let likeCount = document.querySelectorAll("#like-count");
let JsonLike = localStorage.getItem("likeCard");
let likeCountData = JSON.parse(JsonLike) || [];
function getCardLike() {
  likeCount.forEach((likeCounts) => {
    likeCounts.textContent = likeCountData.length;
  });
}
getCardLike();
