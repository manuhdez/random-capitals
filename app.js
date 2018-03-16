
const capital = document.getElementById('capital');
const country = document.getElementById('country');
const appCard = document.getElementById('app-card');
const button = document.getElementById('action');
const illustration = document.getElementById('illustration');

//API Request
const getNewCapital = () => {
  fetch('https://restcountries.eu/rest/v2/all').then(response => {
  if(response.ok) return response.json();
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {

    const randomNumber = Math.floor(Math.random() * jsonResponse.length);
    const randomCountry = jsonResponse[randomNumber];

    capital.textContent = randomCountry.capital;
    country.innerHTML = `Is the capital of <span>${randomCountry.name}</span>`;
    appCard.style.opacity = 1;
    appCard.style.transform = "translate(-50%, -60%)";

    hideCard();
});
}

button.addEventListener('click', () => {
  getNewCapital();
})
illustration.addEventListener('click', () => {
  getNewCapital();
})

//Hide the card component after 5 seconds
let cardTimeout;

const hideCard = () => {
  cardTimeout = window.setTimeout(resetCard, 5000);
}

const resetCard = () => {
  capital.textContent = "";
  country.textContent = "";
  appCard.style.opacity = 0;
  appCard.style.transform = "translate(-50%, 50%)";
}
