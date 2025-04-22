let aksiyaCardsTovar1 = document.querySelector(".aksiya__cards__tovar-1");
let aksiyaProducts1 = products.filter((el) => el.discount > 0).slice(-4);
aksiyaProducts1.map((el) => aksiyaCardsTovar1.append(aksiyaCard(el, "tovar")));

let aksiyaCardsTovar2 = document.querySelector(".aksiya__cards__tovar-2");
let aksiyaProducts2 = products.filter((el) => el.discount > 0).slice(-4);
aksiyaProducts2.map((el) => aksiyaCardsTovar2.append(aksiyaCard(el, "aksiya")));
