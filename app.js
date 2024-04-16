"use strict";

console.log("Let's get this party started!");

const $form = document.querySelector("#search-form");
$form.addEventListener("submit", cb);

// capture form search value in fetch request