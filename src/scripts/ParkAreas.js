// ParkAreas module:
// import park areas from database
// import services from database
// define ParkAreas function
//  -- create html sections of the park areas and services for each area
//      -- section title: park area name
//      -- section list: services for that section

import { copyParkAreas, copyServices, copyGuests } from "./database.js";

const parks = copyParkAreas()
const services = copyServices()
const guests = copyGuests()

document.addEventListener("click", (clickEvent) => {
    const parkClicked = clickEvent.target

    if (parkClicked.dataset.type === "park") {
        let count = 0
        for (const guest of guests) {
            if (parseInt(parkClicked.dataset.parkid) === guest.areaId) {
                count++
            }
        }

        window.alert(`This area has ${count} guests`)
    }
})

export const ParkAreas = () => {
    let html = `<ul class="park-container">`

    for (const park of parks) {
        html += `<div class="park-div-container"><h3 class="park-title"
        data-type="park"
        data-parkid="${park.id}"
        >${park.areaName}</h3>`

        for (const service of services) {
            if (park.service.includes(service.id)) {
                html += `<li class="park--service">${service.serviceName}</li>`
            }
        }
        html += `</div>`
    }

    html += "</ul>"
    return html
}