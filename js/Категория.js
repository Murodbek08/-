let categoryPagecontentCards = document.querySelector(".category-page__content__cards");
let currentCategoryName = document.querySelector(".current-category-name h2");

let url = new URLSearchParams(window.location.search).get("MahsulotTuri");

let categoryNewProducts = products.filter((el) => el.category == url);

categoryNewProducts.map((el) => categoryPagecontentCards.append(aksiyaCard(el, "aksiya")));

currentCategoryName.textContent = url;
