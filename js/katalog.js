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

let navMenuUl = document.querySelector(".nav-menu-ul");

function navMenuKatalog(el) {
  let katalogDiv = document.createElement("div");
  let katalogA = document.createElement("a");

  katalogA.href = "#";
  katalogA.innerText = el.text;

  katalogDiv.append(katalogA);

  return katalogDiv;
}

katalogData.map((el) => navMenuUl.append(navMenuKatalog(el)));
