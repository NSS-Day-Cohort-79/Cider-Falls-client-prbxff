// Main module
// import ParkAreas function
// import Services function
// import Guests function
// select main container in index by id
// create HTML representation of the page
//  -- invoking the imported functions
// render to DOM

import { ParkAreas } from "./ParkAreas.js"
import { Services } from "./Services.js"
import { Guests } from "./Guests.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <header class="header header-content">
        <img src="https://creator.nightcafe.studio/jobs/TsePm32vPZFkdyj7cvon/TsePm32vPZFkdyj7cvon--1--jl1q5.jpg" class="header--logo header logo park-logo">
        <h1 class="header--title header title">Cider Falls National Park</h1>
    </header>
    <nav class="services nav--services">${Services()}</nav>
    <article>
        <div class="main--areas areas left">
            ${ParkAreas()}
        </div>
        <div class="main--guests guests right">
            ${Guests()}
        </div>
    </article>

    <footer>
        <span class="footer-phone footer-info">(123) 456 - 7890</span>
        <span class="footer-email footer-info"><email>ciderfalls@nationalpark.com</email></span>
        <span class="footer-address footer-info"><address>123 Cider Falls Street, Cider City, CF 01234</address></span>
    </footer>
`

mainContainer.innerHTML = applicationHTML