// Guests module: 
// import the guests database
// create Guests function
//  -- create html list of guests first and last names

import { copyGuests } from "./database.js";

const guests = copyGuests()

export const guestHTML = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li
        data-type="guest"
        data-id="${guest.id}"
        data-areaid="${guest.areaId}"
        >${guest.firstName} ${guest.lastName}</li>`
    }

    html += "</ul>"
    return html
}
