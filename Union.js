let score: number | string = 33

score = 44

score = "66"

type User = {
    name : string,
    id: number
}

type admin = {
    username: string,
    id: number
}

let Prajwal: User | Admin = {name: "Prajwal", id: 1}

Prajwal = {username: "PS", id: 1}

// function detDbId(id: number |string){
//     // making api call
//     console.log('DB id is: ${id}')
}
getDbId(3)
getDbId("3")

function detDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}
// Array

const data: number[] = [1,2,3,4,5]
const data2: string[] = ["1","2","3","4","5"]
const data3: (string | number | boolean )[] = ["1","2","3","4",5, true]

// let pi:3.14 = 3.14
// pi = 3.

let seatAllotment:"aisle" | "window" | "middle"

seatAllotment = "aisle"
// seatAllotment = "window"

