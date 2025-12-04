// Services module:
// import services from database
// define Services function
//  -- create an HTML navigation of the services
//      -- create event listener, when a service is clicked, window alert of park areas where service is located

import { copyServices } from "./database.js";

document.addEventListener(
    "click",
    (click) => {
        const clicked = click.target

        if (clicked.dataset.type === "service") {
            const serviceAreas = getServiceAreas()
            // window.alert(`${clicked.dataset.serviceName} is available in ${get}`)
        }
    }
)

const servicesData = copyServices()

export const Services = () => {
    let servicesHTML = ``
    servicesHTML += `<ul class="service">`

    for (const service of servicesData) {
        servicesHTML += `
        <li class="service--item"
            data-type="service" 
            data-serviceid="${service.id}" 
            data-serviceName="${service.serviceName}">${service.serviceName}</li>
        `
    }

    servicesHTML += `</ul>`

    return servicesHTML
}