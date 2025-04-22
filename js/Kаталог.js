//  ###################### Katalog Java Skript Card Kodlari ###############################
let heroKatalogCards = document.querySelector(".hero-katalog-cards");

function catalogCard(el) {
  let divCard = document.createElement("div");
  let imgCard = document.createElement("img");
  let nameH3 = document.createElement("h3");

  imgCard.src = el.image;
  imgCard.style.width = "100%";
  imgCard.alt = "No img !";
  nameH3.innerText = el.text;

  divCard.append(imgCard);
  divCard.append(nameH3);

  return divCard;
}

productDataKatalog.map((el) => heroKatalogCards.append(catalogCard(el)));
