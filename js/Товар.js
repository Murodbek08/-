let localStoragedataTovarCard = localStorage.getItem("imgCardMainData");
cardTovarCode = JSON.parse(localStoragedataTovarCard);

// console.log(URLSearchParams(isx));

function tovarCard() {
  return `
  <h3>Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</h3>
  <div class="product-meta">
    <div class="product-meta__code">
      <p>арт. 371431</p>
    </div>
    <div class="product-meta__reviews">
      <img id="rating-img" src="../images/tovar/rating.svg" alt="Rating Logo !" />
      <p>3 отзыва</p>
    </div>
    <div class="product-meta__share">
      <img src="../images/tovar/share.svg" alt="Share Logo !" />
      <p>Поделиться</p>
    </div>
    <div class="product-meta__favorite ">
      <img src="../images/tovar/love.svg" alt="Heart Logo !" />
      <p>В избранное</p>
    </div>
  </div>
  <div class="product-detail">
    <div class="product-image">
      <div class="product-image__small">
        <img src=${cardTovarCode.images[0]} alt="Item image !"/>
        <img src=${cardTovarCode.images[1]} alt="Item image !" />
        <img src=${cardTovarCode.images[2]} alt="Item image !" />
        <img src=${cardTovarCode.images[3]} alt="Item image !" />
        <img src=${cardTovarCode.images[1]} alt="Item image !" />
      </div>
      <div class="product-image__big">
        <img class="product-image-biggest" src="${
          cardTovarCode.images[0]
        }" alt="Item big image !" />
        <div class="foiz"><h4>${cardTovarCode.discount + "%"}</h4></div>
      </div>
    </div>
    <div class="product-korzinka">
      <div class="product-korzinka__narh">
        <div class="product-korzinka__narh__price">
          <h5>${cardTovarCode.price} ₽</h5>
          <p>Обычная цена</p>
        </div>
        <div class="product-korzinka__narh__discount">
          <h5>${cardTovarCode.price} ₽</h5>
          <div>
            <p>С картой Северяночки</p>
            <img src="../images/tovar/info.svg" alt="Info logo !" />
          </div>
        </div>
      </div>
      <div class="product-button">
        <button>
          <img src="../images/tovar/shopping-cart.svg" alt="Savat logo !" />
          <span onClick="addCard(${cardTovarCode.id})" >В корзину</span>
        </button>
      </div>
      <div class="product-specs-1">
        <p>Бренд</p>
        <span>ПРОСТОКВАШИНО</span>
      </div>
      <div class="product-specs-2">
        <p>Страна производителя</p>
        <span>Россия</span>
      </div>
      <div class="product-specs-3">
        <p>Упаковка</p>
        <span>180 г</span>
      </div>
    </div>
  </div>
  `;
}
function dsvsagdgsfdgs() {
  let tovarCardHtml = document.querySelector(".tovar-card");
  tovarCardHtml.innerHTML += tovarCard();

  let ratingImg = document.querySelector("#rating-img");
  let rating = cardTovarCode.rating;
  for (let i = 1; i <= rating; i++) {
    if (i == 1) {
      ratingImg.src = "../images/tovar/rating-1.svg";
    } else if (i == 2) {
      ratingImg.src = "../images/tovar/rating-2.svg";
    } else if (i == 3) {
      ratingImg.src = "../images/tovar/rating-3.svg";
    } else if (i == 4) {
      ratingImg.src = "../images/tovar/rating-4.svg";
    } else if (i == 5) {
      ratingImg.src = "../images/tovar/rating-5.svg";
    }
  }
}
dsvsagdgsfdgs();

let productImageSmall = document.querySelector(".product-image__small");
let productImageBig = document.querySelector(".product-image-biggest");
productImageSmall.addEventListener("click", function (e) {
  e.target.src && (productImageBig.src = e.target.src);
});

function tovarFunction() {
  let aksiyaCardsTovar1 = document?.querySelector(".aksiya__cards__tovar-1");
  aksiyaCardsTovar1.innerHTML = "";
  let aksiyaProducts1 = products.filter((el) => el.discount > 0).slice(-4);
  aksiyaProducts1.map((el) => aksiyaCardsTovar1.append(aksiyaCard(el, "tovar")));
  let aksiyaCardsTovar2 = document?.querySelector(".aksiya__cards__tovar-2");
  aksiyaCardsTovar2.innerHTML = "";
  let aksiyaProducts2 = products.filter((el) => el.discount > 0).slice(-4);
  aksiyaProducts2.map((el) => aksiyaCardsTovar2.append(aksiyaCard(el, "aksiya")));
}
tovarFunction();
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
  tovarFunction();
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
  tovarFunction();
}
