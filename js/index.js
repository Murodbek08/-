const tabs = document.querySelectorAll(".ap-tab-link");
const tabs_content = document.querySelectorAll(".ap-tab-content");
let aksiyaCards = document?.querySelector(".aksiya__cards");
let novinkiCards = document?.querySelector(".novinki__cards");
let pokupaliCards = document?.querySelector(".pokupali__cards");
let sectionReklamaCards = document.querySelector(".section-reklama-cards");
let sectionStatiCards = document.querySelector(".section-Статьи-cards");
let inputSearch = document.querySelector("#input-search");
let searchCount = document.querySelector("#search-count");
let searchProdactCards = document.querySelector(".search-prodact-cards");

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

function getHomeCards() {
  aksiyaCards.innerHTML = "";
  let aksiyaProducts = products.filter((el) => el.discount > 0).slice(-4);
  aksiyaProducts.map((el) => aksiyaCards.append(aksiyaCard(el, "aksiya")));
  novinkiCards.innerHTML = "";
  let novinkiProducts = products.filter((el) => el).slice(-4);
  novinkiProducts.map((el) => novinkiCards.append(aksiyaCard(el, "novinki")));
  pokupaliCards.innerHTML = "";
  let pokupaliProducts = products.toSorted((a, b) => b.price - b.price).slice(0, 4);
  pokupaliProducts.map((el) => pokupaliCards.append(aksiyaCard(el, "pokupali")));
}
getHomeCards();

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
sectionReklamaCards.append(reklamaCard(reklamaProducts[0], "card-1"));
sectionReklamaCards.append(reklamaCard(reklamaProducts[1], "card-2"));

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

statiProducts.map((el) => sectionStatiCards.append(statiProductsCard(el)));
function addCard(id) {
  let newProduct = products.find((pr) => pr.id == id);
  let checkCard = korzinkaCardData.find((el) => el.id == id);
  if (checkCard) {
    korzinkaCardData = korzinkaCardData.map((product) => {
      if (product.id == id) {
        product.quantity++;
      }
      return product;
    });
  } else {
    newProduct.quantity = 1;
    korzinkaCardData.push(newProduct);
  }
  getCardCount();
  localStorage.setItem("korzinkaCardData", JSON.stringify(korzinkaCardData));
  getHomeCards();
}
function addLike(id) {
  let product = products.find((pr) => pr.id == id);
  let chekcLike = likeCountData.find((el) => el.id == id);
  if (chekcLike) {
    likeCountData = likeCountData.filter((el) => el.id != id);
  } else {
    likeCountData.push(product);
  }
  getCardLike();
  localStorage.setItem("likeCard", JSON.stringify(likeCountData));
  getHomeCards();
}

inputSearch.addEventListener("input", function () {
  let search = this.value.trim().toLowerCase();
  if (search === "") {
    searchProdactCards.style.display = "none";
  } else {
    searchProdactCards.style.display = "flex";
  }
  let productsSearch = products.filter((el) => el.name.toLowerCase().includes(search));
  function searchProdactsCardIndex({ images, name, description, price }) {
    return `
    <a href="../pages/Вси_продукты.html?MahsulotlarniQidirish=${search}">
      <div class="search-prodact-card">
        <img src="${images[0]}" alt="Products image !" />
      <div class="search-prodact-card__text">
        <h3>${name}</h3>
        <p>${description}</p>
        <span>Цена: ${price} ₽</span>
      </div>
      </div>
    </a>
    `;
  }
  function searchIputCards(data = productsSearch) {
    searchProdactCards.innerHTML = "";
    data.map((el) => (searchProdactCards.innerHTML += searchProdactsCardIndex(el)));
    searchCount.textContent = productsSearch.length;
  }
  if (productsSearch.length == 0) {
    searchProdactCards.style.display = "none";
  }
  searchIputCards(productsSearch);
  searchProdactsCardIndex();
});
