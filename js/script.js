let elResult = document.querySelector(".movies__result");
let elList = document.querySelector(".movies__list");

elResult.textContent = movies.length;

for (let movie of movies) {
  //CREATE
  let newItem = document.createElement("li");
  let newCard = document.createElement("div");
  let newImg = document.createElement("img");
  let newCardBody = document.createElement("div");
  let newCardTitle = document.createElement("h5");
  let newCardDate = document.createElement("p");
  let newCardRating = document.createElement("p");
  let newCardLanguage = document.createElement("p");
  let newButton = document.createElement("a");

  //SET ATTRIBUTE
  newItem.setAttribute("class", "movies__item");
  newCard.setAttribute("class", "card movies__card");
  newImg.setAttribute("class", "card-img-top");
  newImg.setAttribute("src", movie.smallThumbnail);
  newCardBody.setAttribute("class", "card-body");
  newButton.setAttribute(
    "href",
    `https://www.youtube.com/watch?v=${movie.youtubeId}`
  );
  newButton.setAttribute("class", "btn btn-primary");
  newButton.setAttribute("target", "_blank");

  // newButton.classList.remove("")q

  //TEXT CONTENT
  newCardTitle.textContent = movie.title;
  newCardDate.textContent = movie.year;
  newCardRating.textContent = movie.imdbRating;
  newCardLanguage.textContent = movie.language;
  newButton.textContent = "button";

  //APPEND CHILD
  elList.appendChild(newItem);
  newItem.appendChild(newCard);
  newCard.appendChild(newImg);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newCardTitle);
  newCardBody.appendChild(newCardDate);
  newCardBody.appendChild(newCardRating);
  newCardBody.appendChild(newCardLanguage);
  newCardBody.appendChild(newButton);
}
