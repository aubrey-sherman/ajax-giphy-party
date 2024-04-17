"use strict";

console.log("Let's get this party started!");



// capture form search value in fetch request
// upon submit, call fetch
//// > have to pass in input box target input / form input input area. value
//// > fetch request with API = URL
//// > request body method GET, body query, headers default
//// > await response from fetch, assign to a variable (JSON, array of objects)
//// > parsing with .json() >> console.log
//// find the image for each element object

const $gifContainer = document.querySelector("#gif-container");

/** TODO: Write docstring */
async function getGifs() {
  document.pre;
  const searchKeyWord = document.querySelector("#form-search-input").value;

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${searchKeyWord}` +
    `&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  ); // actual results JSON

  const dataHolder = await response.json(); // give us our object

  console.log("finished fetch request, returning: ", dataHolder);
  // call the show function

  // grab a GIF from the response data and append the GIF to the page
  const gifURL = dataHolder.data[0].images.original.url;
  // create div with img src with above variable
  console.log(gifURL);

  const $gifImg = document.createElement("img");
  $gifImg.src = gifURL;

  $gifContainer.appendChild($gifImg);

}

// Ensure that if you submit the form multiple times, you’ll get multiple GIFs


const $form = document.querySelector("#search-form");
$form.addEventListener("submit", function (event) {
  event.preventDefault();
  getGifs();
}); // calling fetch