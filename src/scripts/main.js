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
    <header>
        <img src="">
        <h1>Cider Falls</h1>
    </header>

    <article>
    ${ParkAreas()}
    </article>



`