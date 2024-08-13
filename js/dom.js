
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

/** */
console.log(document.documentElement.lang);
//console.log(document.documentElement.getAttribute("link-dom"));
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom"); 

$linkDOM.setAttribute("target", "_blank"); 
$linkDOM.setAttribute("rel", "noopener"); 
$linkDOM.setAttribute("href", "https://correo.senprende.hn/?loginOp=logout"); 


/** DATA-ATTRIBUTES */ //video 63
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo del Objeto del Documento"); 
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Revisa tu correo del trabajo"; 
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));

