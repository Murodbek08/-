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
