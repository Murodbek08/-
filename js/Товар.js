let tovarCardHtml = document.querySelector(".tovar-card");

let mahsulotUrl = new URLSearchParams(window.location.search).get("Mahsulot");
let tovarProduct = products.filter((el) => el.id == mahsulotUrl);

function tovarCard({ images, discount, price, id }) {
  let chekcLikeRed = likeCountData.find((pr) => pr.id == id);
  let chekcCardeRed = korzinkaCardData.find((pr) => pr.id == id);
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
      <span onClick=addLike(${id}) class="like">
        <svg viewBox="0 0 512 512">
          <path class="${chekcLikeRed ? "active-like" : ""}" 
            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" class="active-like">
          </path>
        </svg>
      </span>
      <p>В избранное</p>
    </div>
  </div>
  <div class="product-detail">
    <div class="product-image">
      <div class="product-image__small">
        <img src=${images[0]} alt="Item image !"/>
        <img src=${images[1]} alt="Item image !" />
        <img src=${images[2]} alt="Item image !" />
        <img src=${images[3]} alt="Item image !" />
        <img src=${images[1]} alt="Item image !" />
      </div>
      <div class="product-image__big">
        <img class="product-image-biggest" src="${images[0]}" alt="Item big image !" />
        <div class="foiz"><h4>${discount + "%"}</h4></div>
      </div>
    </div>
    <div class="product-korzinka">
      <div class="product-korzinka__narh">
        <div class="product-korzinka__narh__price">
          <h5>${price} ₽</h5>
          <p>Обычная цена</p>
        </div>
        <div class="product-korzinka__narh__discount">
          <h5>${price} ₽</h5>
          <div>
            <p>С картой Северяночки</p>
            <img src="../images/tovar/info.svg" alt="Info logo !" />
          </div>
        </div>
      </div>
      <div class="product-button">
        <button onClick="addCard(${id})" class= ${chekcCardeRed ? "active-card" : ""} > 
          <img src="../images/tovar/shopping-cart.svg" alt="Savat logo !" />
          <span>В корзину</span>
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
function tovarFunction() {
  tovarCardHtml.innerHTML = "";
  tovarProduct.map((el) => (tovarCardHtml.innerHTML += tovarCard(el)));
  let ratingImg = document.querySelector("#rating-img");
  let rating = tovarProduct.map((el) => el.rating);
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
  let productImageSmall = document.querySelector(".product-image__small");
  let productImageBig = document.querySelector(".product-image-biggest");
  productImageSmall.addEventListener("click", function (e) {
    e.target.src && (productImageBig.src = e.target.src);
  });
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
