// const user = {
//     name: 'John',
//     email: '123@gmail.com',
//     isActive: true
// }
//
// function creatUser({name: string , isPaid: boolean}) {}
//
// creatUser({name: 'John', isPaid: true, email: "p@k.com"})
//
// creatUser(newUser)
//
// function createCourse():{name: string, price: number}}{
//     return{name : 'JS', price: 100}
// }


// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }
//
// //type Mystring = string
// function createUser(user: User): User{
//     return{...user, isActive: true}
// }
//
// createUser({name:"", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creadcardDetails?: number
}
let myUser: User = {
    _id: "123",
    name: "John",
    email: "p@k.com",
    isActive: true
}

type cardNumber ={
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number  //not good practice
}

myUser.email = "p@gmail.com"
myUser._id = "asa"

export {}