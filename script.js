"use strict";

// SI DEVE CREARE LA PAROLA RABC PER AVERE LA CHIAVE

const image = document.querySelector("img");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const solution = document.querySelector(".testo-prova");

let key = "r";

const error = function () {
  alert("Sbagliato, tutto resettato");
  key = "r";
};

const addLetter = function (letter) {
  key += letter;
  console.log(key);
  key.length >= 4 && error();
};

// AGGIUNGE UNA LETTERA 'N' OGNI VOLTA CHE CLICCA SULL'IMMAGINE
image.addEventListener("click", () => addLetter("n"));

// AGGIUNGE UNA LETTERA 'A' OGNI VOLTA CHE CLICCA SUL PRIMO QUADRATINO
btn1.addEventListener("click", () => addLetter("a"));

// AGGIUNGE UNA LETTERA 'B' OGNI VOLTA CHE CLICCA SUL PRIMO QUADRATINO
btn2.addEventListener("click", () => addLetter("b"));

// AGGIUNGE UNA LETTERA 'C' OGNI VOLTA CHE CLICCA SUL PRIMO QUADRATINO
btn3.addEventListener("click", () => {
  key += "c";

  if (
    key === "rabc" ||
    key === "racb" ||
    key === "rbac" ||
    key === "rbca" ||
    key === "rcab" ||
    key === "rcba"
  ) {
    alert("Corretto, segui il link che trovi qui sotto (scorri la pagina)!");
    solution.style.backgroundColor = "green";
    // solution.textContent = "https://afmbasi.wixsite.com/lunalunae/5";
    solution.insertAdjacentHTML(
      "afterbegin",
      '<a style="color:white" href="https://afmbasi.wixsite.com/lunalunae/5">Clicca qui!</a>'
    );
  } else if (key.length >= 4) {
    alert("Sbagliato, tutto resettato");
    key = "r";
  }
});
