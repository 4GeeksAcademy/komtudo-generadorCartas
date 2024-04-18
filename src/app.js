/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const tipoPalo = [`♠`, `♦`, `♣`, `♥`];
  const numBaraja = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, `J`, `Q`, `K`];


  function getRandomNum(numeros) {
    return numeros[Math.floor(Math.random() * numeros.length)];
  }
  const barajaAleatoria = getRandomNum(numBaraja);
 

  const tipoPaloAleatorio = getRandomNum(tipoPalo);
 

  document.querySelector("#tipoPaloA").textContent = tipoPaloAleatorio;
  document.querySelector("#tipoPaloB").textContent = tipoPaloAleatorio;

  if (tipoPaloAleatorio === `♠` || tipoPaloAleatorio === `♣`) {
    const cambioColorNegro = document.querySelector("div");
    cambioColorNegro.style.color = "black";
  } else {
    const cambioColorRojo = document.querySelector("div");
    cambioColorRojo.style.color = "red";
  }

  const cartaAleatoria = document.querySelector("#numero").textContent;

  document.querySelector("#numero").textContent = barajaAleatoria;

  function clickbtn() {
    document.location.reload();
  }
  const accion = document.getElementById("myButton");
  accion.onclick = clickbtn;
  setInterval(() => {
    document.location.reload();
  }, 100000);
};
