const database = {
    guests: [
        {
            id: 1,
            firstName: "Alice",
            lastName: "Johnson",
            areaId: 101
        },
        {
            id: 2,
            firstName: "Bob",
            lastName: "Smith",
            areaId: 102
        },
        {
            id: 3,
            firstName: "Carol",
            lastName: "Williams",
            areaId: 106
        },
        {
            id: 4,
            firstName: "David",
            lastName: "Brown",
            areaId: 103
        },
        {
            id: 5,
            firstName: "Eve",
            lastName: "Davis",
            areaId: 102
        },
        {
            id: 6,
            firstName: "Frank",
            lastName: "Miller",
            areaId: 101
        },
        {
            id: 7,
            firstName: "Grace",
            lastName: "Wilson",
            areaId: 104
        },
        {
            id: 8,
            firstName: "Henry",
            lastName: "Moore",
            areaId: 103
        },
        {
            id: 9,
            firstName: "Ivy",
            lastName: "Taylor",
            areaId: 102
        },
        {
            id: 10,
            firstName: "Jack",
            lastName: "Anderson",
            areaId: 104
        },
        {
            id: 11,
            firstName: "Karen",
            lastName: "Thomas",
            areaId: 101
        },
        {
            id: 12,
            firstName: "Leo",
            lastName: "Jackson",
            areaId: 105
        },
        {
            id: 13,
            firstName: "Maria",
            lastName: "White",
            areaId: 106
        },
        {
            id: 14,
            firstName: "Nathan",
            lastName: "Harris",
            areaId: 102
        },
        {
            id: 15,
            firstName: "Olivia",
            lastName: "Martin",
            areaId: 104
        },
        {
            id: 16,
            firstName: "Paul",
            lastName: "Thompson",
            areaId: 101
        },
        {
            id: 17,
            firstName: "Quinn",
            lastName: "Garcia",
            areaId: 105
        },
        {
            id: 18,
            firstName: "Rachel",
            lastName: "Martinez",
            areaId: 103
        },
        {
            id: 19,
            firstName: "Samuel",
            lastName: "Robinson",
            areaId: 102
        },
        {
            id: 20,
            firstName: "Tina",
            lastName: "Clark",
            areaId: 104
        },
        {
            id: 21,
            firstName: "Ulysses",
            lastName: "Rodriguez",
            areaId: 101
        },
        {
            id: 22,
            firstName: "Victoria",
            lastName: "Lewis",
            areaId: 105
        },
        {
            id: 23,
            firstName: "Walter",
            lastName: "Lee",
            areaId: 103
        },
        {
            id: 24,
            firstName: "Xena",
            lastName: "Walker",
            areaId: 102
        },
        {
            id: 25,
            firstName: "Yolanda",
            lastName: "Hall",
            areaId: 104
        },
        {
            id: 26,
            firstName: "Zachary",
            lastName: "Allen",
            areaId: 101
        },
        {
            id: 27,
            firstName: "Amber",
            lastName: "Young",
            areaId: 106
        },
        {
            id: 28,
            firstName: "Brandon",
            lastName: "King",
            areaId: 103
        },
        {
            id: 29,
            firstName: "Chloe",
            lastName: "Wright",
            areaId: 102
        },
        {
            id: 30,
            firstName: "Derek",
            lastName: "Lopez",
            areaId: 104
        }
    ],
    services: [
        {
            id: 1,
            serviceName: "Rafting"
        },
        {
            id: 2,
            serviceName: "Canoeing"
        },
        {
            id: 3,
            serviceName: "Fishing"
        },
        {
            id: 4,
            serviceName: "Hiking"
        },
        {
            id: 5,
            serviceName: "Picnicking"
        },
        {
            id: 6,
            serviceName: "Rock Climbing"
        },
        {
            id: 7,
            serviceName: "Information"
        },
        {
            id: 8,
            serviceName: "Lodging"
        },
        {
            id: 9,
            serviceName: "Parking"
        },
        {
            id: 10,
            serviceName: "Zip Lines"
        }
    ],
    parkAreas: [
        {
            id: 101,
            areaName: "Lodge",
            location: "Northeast",
            service: [ 1, 2, 3 ]
        },
        {
            id: 102,
            areaName: "Lost Wolf Hiking Trail",
            location: "North",
            service: [ 4, 5, 6 ]
        },
        {
            id: 103,
            areaName: "Chamfort River",
            location: "Northeast",
            service: [ 1, 2, 3 ]
        },
        {
            id: 104,
            areaName: "Gander River",
            location: "Southwest",
            service: [ 3, 4 ]
        },
        {
            id: 105,
            areaName: "Campgrounds",
            location: "South",
            service: [ 7, 8, 9 ]
        },
        {
            id: 106,
            areaName: "Pine Bluff Trails",
            location: "Southeast",
            service: [ 4, 5, 10 ]
        }
    ]
}

export const copyGuests = () => {
    const copiedGuests = structuredClone(database.guests)
    return copiedGuests
}

export const copyServices = () => {
    const copiedServices = structuredClone(database.services)
    return copiedServices
}

export const copyParkAreas = () => {
    const copiedParkAreas = structuredClone(database.parkAreas)
    return copiedParkAreas
}