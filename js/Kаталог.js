"use strict";

//  ###################### Katalog Java Skript Card Kodlari ###############################
const heroKatalogCards = document.querySelector(".hero-katalog-cards");
const inputSearch = document.querySelector("#input-search");
const searchCount = document.querySelector("#search-count");

const catalogCard = ({ image, text }) => {
  return `
  <div>
    <img src=${image} alt="">
    <h3>${text}</h3>
  </div>
  `;
};

const getProducts = (data = productDataKatalog) => {
  heroKatalogCards.innerHTML = "";

  data.map((el) => {
    return (heroKatalogCards.innerHTML += catalogCard(el));
  });

  searchCount.textContent = data.length;
};

getProducts();

inputSearch.addEventListener("input", function () {
  const search = this.value.trim().toLowerCase();
  console.log(search);

  const searchProducts = productDataKatalog.filter((el) => {
    return el.text.toLowerCase().includes(search);
  });

  getProducts(searchProducts);
});

