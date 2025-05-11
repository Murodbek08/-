let mainProductCards = document.querySelector(".main__product_cards");
let inputSearch = document.querySelector("#input-search");
let searchCount = document.querySelector("#search-count");
let pagination = document.querySelector(".pagination");

let pages;
let activePages = 1;
function mainProductCard(data = products) {
  let pages = Math.ceil(data.length / 10);
  let firstPaginationCard = (activePages - 1) * 10;
  let lastPaginationCard = activePages * 10;
  let paginationData = data.slice(firstPaginationCard, lastPaginationCard);
  pagination.innerHTML = "";
  pagination.innerHTML += `<button onclick="goToFirstPage()" class="pagination-item">  <img src="../images/vse-product/chevrons-left.svg" alt="" /></button>`;
  pagination.innerHTML += `<button onclick="goToPrevPage()" class="pagination-item">  <img src="../images/vse-product/chevron-left.svg" alt="" /></button>`;
  for (let i = 1; i <= pages; i++) {
    pagination.innerHTML += ` <button onclick="pageActiveCards(${i})" class="pagination-item ${
      i == activePages ? "active-pegenation" : ""
    }">${i}</button>`;
  }
  pagination.innerHTML += `<button onclick="goToNextPage()" class="pagination-item">  <img src="../images/vse-product/chevron-right.svg" alt="" /></button>`;
  pagination.innerHTML += `<button onclick="goToLastPage()" class="pagination-item">  <img src="../images/vse-product/chevrons-right.svg" alt="" /></button>`;
  mainProductCards.innerHTML = "";
  paginationData.map((el) => mainProductCards.append(aksiyaCard(el, "aksiya")));
  searchCount.textContent = data.length;
}

mainProductCard();
inputSearch.addEventListener("input", function () {
  activePages = 1;
  let search = this.value.trim().toLowerCase();
  let mainProductCardSearch = products.filter((el) => el.name.toLowerCase().includes(search));
  mainProductCard(mainProductCardSearch);
});
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
  mainProductCard();
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
  mainProductCard();
}
// let MahsulotlarniQidirishUrl = new URLSearchParams(window.location.search).get(
//   "MahsulotlarniQidirish"
// );
// let mainProductCardSearch = products.filter((el) =>
//   el.name.toLowerCase().includes(MahsulotlarniQidirishUrl)
// );
// mainProductCard(mainProductCardSearch);

function pageActiveCards(page) {
  activePages = page;
  mainProductCard();
}
function goToPrevPage() {
  if (1 < activePages) {
    activePages--;
  }
  mainProductCard();
}
function goToNextPage() {
  if (4 > activePages) {
    activePages++;
  }
  mainProductCard();
}
function goToFirstPage() {
  switch (activePages) {
    case 1:
      activePages -= 0;
      break;
    case 2:
      activePages -= 1;
      break;
    case 3:
      activePages -= 2;
      break;
    case 4:
      activePages -= 3;
      break;
  }
  mainProductCard();
}
function goToLastPage() {
  switch (activePages) {
    case 1:
      activePages += 3;
      break;
    case 2:
      activePages += 2;
      break;
    case 3:
      activePages += 1;
      break;
    case 4:
      activePages += 0;
      break;
  }
  mainProductCard();
}
