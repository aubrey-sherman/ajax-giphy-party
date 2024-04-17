"use strict";

console.log("Let's get this party started!");

const $gifContainer = document.querySelector("#gif-container");

/** Given a gif array and an index, will append an image to the DOM
 * and set the img src.
 */
function showGifs(singleGifData, index) { // update to reflect array , update name to showGif

  console.log("in showgifs", singleGifData[index]);
  const gifURL = singleGifData.data[index].images.original.url;
  console.log(gifURL);

  const $gifImg = document.createElement("img");
  $gifImg.src = gifURL;
  $gifContainer.appendChild($gifImg);
}

/** When called, will return an array of gif objects from the Giphy API
 *  and generate a random index based on the length of the array
*/
async function getGifs() { // it also calls the show function, which it ISN'T doing

  const searchKeyWord = document.querySelector("#form-search-input").value; // comment on line 29

  const params = new URLSearchParams({
    q: searchKeyWord,
    api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?${params}` // use URL search param to allow it to make it to a string
  );

  const dataHolder = await response.json();
  console.log("finished fetch request, returning: ", dataHolder);

  const gifIndex = Math.floor(Math.random() * (dataHolder.data.length));
  console.log("this is our random index: ", gifIndex);

  showGifs(dataHolder, gifIndex);

}

const $form = document.querySelector("#search-form");
$form.addEventListener("submit", function (event) {
  event.preventDefault();
  getGifs();
});

const $deleteBtn = document.querySelector("#delete-btn");
$deleteBtn.addEventListener("click", function (event) {
  $gifContainer.innerHTML = "";
});;;