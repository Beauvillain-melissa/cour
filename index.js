//selecteurs
//document.querySelector('h4').style.background="yellow";


// Clik event 
const questionContainer = document.querySelector(".click-event");

questionContainer.addEventListener("click",() => { 
    console.log("click");
   questionContainer.style.background ="red";
});