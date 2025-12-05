// Services module:
// import services from database
// define Services function
//  -- create an HTML navigation of the services
//      -- create event listener, when a service is clicked, window alert of park areas where service is located

import { copyServices } from "./database.js";
import { copyParkAreas } from "./database.js";


document.addEventListener(
    "click",
    (click) => {
        const clicked = click.target

        if (clicked.dataset.type === "service") {
            const serviceAreas = getServiceAreas(clicked.dataset.serviceid)
            window.alert(`${clicked.dataset.servicename} is available in ${serviceAreas.join(", ")}`)
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
            data-servicename="${service.serviceName}">${service.serviceName}</li>
        `
    }

    servicesHTML += `</ul>`

    return servicesHTML
}

// const getServiceAreas = (serviceIdDataset) => {
//     const parkAreas = copyParkAreas();
//     const serviceIdDatasetInt = parseInt(serviceIdDataset)
//     let parkAreasWithService = []
//     for (const area of parkAreas) {
//         if (area.service.contains(serviceIdDatasetInt))
//     }
//     return parkAreasWithService
// }