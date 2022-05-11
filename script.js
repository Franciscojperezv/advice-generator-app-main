const numAdvice = document.querySelector('#main_advice-number');
const txtAdvice = document.querySelector('#main_advice_text');
const myAPI = "https://api.adviceslip.com/advice";

getAdvice();

function getAdvice(){
  fetch(myAPI)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
      numAdvice.innerHTML = `Advice #${respuesta['slip']['id']}`;
      txtAdvice.innerHTML = `"${respuesta['slip']['advice']}"`;
    });
}