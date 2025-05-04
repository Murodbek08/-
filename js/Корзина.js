//Korzinka Page Card ---> HTML
function korzinkaCardPro({ images, description, price, quantity, id }) {
  return `
  <div class="korzinka-page__content__card">
      <div class="korzinka-img-name">
        <div class="korzinka-img">
          <label class="custom-checkbox">
            <input onclick="checkboxFunc(${id})" type="checkbox" />
            <span class="checkmark">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M5 12l5 5l9-9"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </label>
          <img src=${images[0]} alt="" />
        </div>
        <div class="korzinka-name">
          <h3>${description}</h3>
          <p>
            ${price} ₽
            <span>за шт.</span>
          </p>
        </div>
      </div>
      <div class="korzinka-count">
        <button onclick="cardUchirildi(${id})" ><img src="../images/korzinka/minus.svg" alt="" /></button>
        <span>${quantity}</span>
        <button onclick="cardQushildi(${id})" ><img src="../images/korzinka/plus.svg" alt="" /></button>
      </div>
      <div class="korzinka-price">
        <h3>${price * quantity} ₽</h3>
      </div>
  </div>
  `;
}

//korzinka Page Content Cards
let korzinkaPageContentCards = document.querySelector(".korzinka-page__content__cards");
function korzinkaCardDAtaBig(data = korzinkaCardData) {
  korzinkaPageContentCards.innerHTML = "";
  data.map((el) => (korzinkaPageContentCards.innerHTML += korzinkaCardPro(el)));
}
korzinkaCardDAtaBig();

//Zakaz Oformit
function zakazBuyurtma() {
  let countCardPrice = 0;
  let countCardCommonPrice = 0;
  let countDiscount = 0;

  korzinkaCardData.forEach((el) => {
    countCardPrice = el.price * el.quantity;
    countCardCommonPrice += countCardPrice;
    countDiscount += parseFloat((((el.price * el.discount) / 100) * el.quantity).toFixed(2));
  });

  const orderData = {
    items: korzinkaCardData,
    total: parseFloat(countCardCommonPrice.toFixed(2)),
    discount: parseFloat(countDiscount.toFixed(2)),
    final: parseFloat((countCardCommonPrice - countDiscount).toFixed(2)),
  };
  localStorage.setItem("localStorageZakaz", JSON.stringify(orderData));
  const savedData = localStorage.getItem("localStorageZakaz");
  const localStorageZakaz = JSON.parse(savedData) || [];

  let zakazOformilena = document?.querySelector(".zakaz-oformilena");
  return (zakazOformilena.innerHTML = `
    <div class="chekbox-menu">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
      <h4>Списать 200 ₽</h4>
    </div>
    <p class="zakaz-karta-p">На карте накоплено 200 ₽</p>
    <div class="zakas-tovarlar">
      <p>${localStorageZakaz.items?.length || 0} товара</p>
      <h4>${localStorageZakaz.total || 0} ₽</h4>
    </div>
    <div class="zakaz-skidka">
      <p>Скидка</p>
      <h3>-${localStorageZakaz.discount || 0} ₽</h3>
    </div>
    <div class="zakaz-itog">
      <p>Итог</p>
      <h3>${localStorageZakaz.final || 0} ₽</h3>
    </div>
    <button>Оформить заказ</button>
  `);
}
zakazBuyurtma();

//+ 1 - card Push
function cardQushildi(id) {
  korzinkaCardData.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }
    return el;
  });
  getCardCount();
  localStorage.setItem("korzinkaCardData", JSON.stringify(korzinkaCardData));
  zakazBuyurtma();
  korzinkaCardDAtaBig();
}

//+ 1 - card Delete
function cardUchirildi(id) {
  let korzinkaCardDataDelete = korzinkaCardData.find((el) => el.id == id);
  if (korzinkaCardDataDelete.quantity === 1) {
    if (korzinkaCardDataDelete.quantity == 1) {
      confirm("Siz ohirgi mahsulotni ucirishni hohlaysizmi !");
    }
    korzinkaCardData = korzinkaCardData.filter((el) => el.id != id);
  } else {
    korzinkaCardData.map((el) => {
      if (el.id == id) {
        el.quantity--;
      }
      return el;
    });
  }
  getCardCount();
  localStorage.setItem("korzinkaCardData", JSON.stringify(korzinkaCardData));
  zakazBuyurtma();
  korzinkaCardDAtaBig();
}

// Выделить всё Button
let korzinkaDeleteProdact = document.querySelector("#korzinka-delete-prodact");
korzinkaDeleteProdact.addEventListener("click", () => {
  korzinkaCardData.shift();
  getCardCount();
  localStorage.setItem("korzinkaCardData", JSON.stringify(korzinkaCardData));
  zakazBuyurtma();
  korzinkaCardDAtaBig();
});

//Удалить выбранные Button
let korzinkaDescUdalit = document.querySelector(".korzinka-desc-udalit");
function checkboxFunc(id) {
  korzinkaCardData = korzinkaCardData.filter((item) => item.id !== id);
}
document.querySelector(".korzinka-desc-udalit").onclick = function () {
  localStorage.setItem("korzinkaCardData", JSON.stringify(korzinkaCardData));
  korzinkaCardDAtaBig();
  checkboxFunc();
  zakazBuyurtma();
};

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
  korzinkaCardDAtaBig();
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
  korzinkaCardDAtaBig();
}
