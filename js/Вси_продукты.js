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
