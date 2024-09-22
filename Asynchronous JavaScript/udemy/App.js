const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderCoutry = function (country, className = "") {
  console.log(country, "+++++++");
  console.log(country.languages, "LLLLLL");
  const language = Object.values(country.languages).join(",");
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${country.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${country.name.common}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +country.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
     
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  //Make first Ajax Call
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCoutry(data);
    //make second AJAX call
    const [neighbour] = data.borders;
    console.log(neighbour);
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2, "****");
      renderCoutry(data2, "neighbour");
    });
  });
};
getCountryData("India");
