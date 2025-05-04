let mainProductCards = document.querySelector(".main__product_cards");
let inputSearch = document.querySelector("#input-search");
let searchCount = document.querySelector("#search-count");

//Вси_продукты
function mainProductCard(data = products) {
  mainProductCards.innerHTML = "";
  data.map((el) => mainProductCards.append(aksiyaCard(el, "aksiya")));
  searchCount.textContent = data.length;
}
mainProductCard();

inputSearch.addEventListener("input", function () {
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

let localStorageProductsSearch = localStorage.getItem("productsSearch");
let localStorageProductsSearchCount = JSON.parse(localStorageProductsSearch) || [];
let searchInput = localStorageProductsSearchCount.toLowerCase().trim();
let mainProductCardSearch = products.filter((el) => el.name.toLowerCase().includes(searchInput));
mainProductCard(mainProductCardSearch);
