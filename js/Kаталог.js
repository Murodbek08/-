//  ###################### Katalog Java Skript Card Kodlari ###############################
let heroKatalogCards = document.querySelector(".hero-katalog-cards");
let inputSearch = document.querySelector("#input-search");
let searchCount = document.querySelector("#search-count");

catalogCard = ({ image, text }) => {
  return `
  <div>
    <img src=${image} alt="No img ?">
    <h3>${text}</h3>
  </div>
  `;
};

getProducts = (data = productDataKatalog) => {
  heroKatalogCards.innerHTML = "";
  data.map((el) => (heroKatalogCards.innerHTML += catalogCard(el)));
  searchCount.textContent = data.length;
};

getProducts();

inputSearch.addEventListener("input", function () {
  let search = this.value.trim().toLowerCase();
  let searchProducts = productDataKatalog.filter((el) => {
    return el.text.toLowerCase().includes(search);
  });
  getProducts(searchProducts);
});
