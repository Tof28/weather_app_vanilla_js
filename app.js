const form = document.querySelector("top-banner form");
require('dotenv').config;
import apiKey from 'API_KEY';
import { response } from 'express';
import { data } from 'jquery';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid${apiKey}&unis=metric`;

form.addEventListener("submit" e => {
    e.preventDefault();
    const inputVal = input.value;
});

fetch(url)
.then(response => response.json())
.then(data => {

})
.catch(() => {
    msg.content = "Please search for a valid city";
});

const {main, name, sys, weather} = data;
const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656${weather[0]["icon"]}.svg`;

const li = document.createElement("li");
li.classList.add("city");
const markup = `
<h2 class="city-name" data-name="${name}, ${sys.country}">
<span>${name}</span>
<sup>${sys.country}</sup>
</h2>
<div class="city-temp">${MAth.round(main.temp)}<sup>°C</sup>
</div>
<figure>
<img class="city_icon" src=${icon} alt=${weather[0]["main"]}>
<figcaption>${weather[0]["description"]}</figcaption>
</figure>
`;
li.innerHTML = markup;
listenerCount.appendChild(li);

msg.textContent = "";
form.reset();
input.focus();

const listItems = list.querySelectorAll(".ajax-section .city");
const listItemsArray = Array.from(listItems);

if(listItemsArray.length > 0) {

    const filteredArray = listItemsArray.filter(el => {
        let content = "";
        if(inputVal.includes(",")[1].length > 2) {
            inputVal = inputVal.split(",")[0];
            content = el.querySelector(".city-name span").textContent.toLowerCase();
        } else {
            content = el.querySelector(".city-name span").textContent.toLowerCase();
        }
        return content ==inputVal.toLowerCase();
    });

    if(filteredArray.length > 0) {
        msg.textContent = `You already know the weather for ${filteredArray[0].querySelector(".city-name span").textContent}...otherwise be more specific by providing the xountry as well`;
    }
    form.reset();
    input.focus();
    return;
}
