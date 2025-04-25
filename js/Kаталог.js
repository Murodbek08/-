//  ###################### Katalog Java Skript Card Kodlari ###############################
let heroKatalogCards = document.querySelector(".hero-katalog-cards");
let inputSearch = document.querySelector("#input-search");
let searchCount = document.querySelector("#search-count");

catalogCard = (el) => {
  return `<div><img src=${el.image} alt="No img !"><h3>${el.text}</h3></div>`;
};

getProducts = (data = productDataKatalog) => {
  heroKatalogCards.innerHTML = "";
  data.map((el) => (heroKatalogCards.innerHTML += catalogCard(el)));
  searchCount.textContent = data.length;
};
getProducts();

inputSearch.addEventListener("input", function () {
  let search = this.value.toLowerCase().trim();
  let searchProducts = productDataKatalog.filter((el) => el.text.toLowerCase().includes(search));
  getProducts(searchProducts);
});
