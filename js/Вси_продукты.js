let mainProductCards = document.querySelector(".main__product_cards");
let inputSearch = document.querySelector("#input-search");
let searchCount = document.querySelector("#search-count");
let productDemo = document.querySelector(".product-demo");

let mainProductCard = (data = products) => {
  mainProductCards.innerHTML = ""; // Har safar ichini tozalaymiz

  if (data.length != 0) {
    data.map((el) => {
      mainProductCards.append(aksiyaCard(el, "aksiya"));
    });
  } else {
    mainProductCards.classList = "nocards";
    mainProductCards.innerHTML = `
        <img src="../images/main/no-prodact.png" alt="No product!" />
        <h3>Мы не смогли найти то, что вы искали.</h3>
        <p>Возможно, в названии продукта есть ошибка или такого продукта у нас еще нет.</p>
      `;
  }

  searchCount.textContent = data.length;
};

mainProductCard();

inputSearch.addEventListener("input", function () {
  let search = this.value.trim().toLowerCase();

  let mainProductCardSearch = products.filter((el) => {
    return el.name.toLowerCase().includes(search);
  });

  mainProductCard(mainProductCardSearch);
});
