
// let texto = "Hola soy Andrea Alvarez y estoy tomando un curso de JAVASCRIP, saluditos, te quiero mucho"

// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto)); 

// hablar(texto); 


// console.log("*************ELEMENTOS DEL DOCUMENTO***************");
// console.log(window.document);
// console.log(document);
// console.log(document.body);
// console.log(document.title);

// console.log(document.script);

// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

// console.log(document.write("<h2>Buenos dias mundo :) </h2>"));

/* */ 
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a").length);

// document.querySelectorAll("a").forEach((el) => console.log(el)); 

// /** */
// console.log(document.documentElement.lang);
// //console.log(document.documentElement.getAttribute("link-dom"));
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "es";
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector(".link-dom"); 

// $linkDOM.setAttribute("target", "_blank"); 
// $linkDOM.setAttribute("rel", "noopener"); 
// $linkDOM.setAttribute("href", "https://correo.senprende.hn/?loginOp=logout"); 


// /** DATA-ATTRIBUTES */ //video 63
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo del Objeto del Documento"); 
// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description = "Revisa tu correo del trabajo"; 
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id"));
// console.log($linkDOM.removeAttribute("data-id"));


/** VIDEO 65 Clases CSS */

// const $card = document.querySelector(".card"); 

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45"); 
// console.log($card.classList.contains("rotate-45"));

// $card.classList.replace("rotate-45", "rotate-135")
// $card.classList.replace("opcity-80", "sepia")


/** VIDEO 66 TEXTO Y HTML */

// const $whatIsDom = document.getElementById("que-es"); 

// let text = `
// Los diagramas entidad-relación (ERD) 
// son fundamentales para modelar bases de 
// datos tanto simples como complejas, pero las notaciones y 
// figuras empleadas se pueden prestar a confusión. ¡Con esta guía, 
// te convertirás en un experto en notación ERD y estarás en camino a modelar tu
//  propia base de datos!
// `; 

// $whatIsDom.innerText = text; 

/** VIDEO 67 recorriendo el DOM */

// const $cards = document.querySelector(".cards"); 

// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("div"));
// console.log($cards.children[3].closest("section"));

/** VIDEO 68 ELEMENTO Y FRAGMENTOS */


const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Animals"),
      $cards = document.querySelector(".cards"); 

      $img.setAttribute("src", "https://i0.wp.com/senprende.hn/wp-content/uploads/2023/07/Logo-Honduras.png?fit=571%2C212&ssl=1")
      $img.setAttribute("alt", "Animals"); 
      $figure.classList.add("card");

      $figcaption.appendChild($figcaptionText); 
      $figure.appendChild($img); 
      $figure.appendChild($figcaption); 
      $cards.appendChild($figure); 