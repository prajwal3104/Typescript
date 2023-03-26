function adTwo(num : number){
   // num.isNum() no need to check if it number or not
    //return num + 2;
    return "hello"
}

function getUpper(val : string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){
    // do something
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

let myValue addTwo(3)
getUpper("prajwal")
signUpUser("Prajwal","Prajwal0836@gmail.com",true)
loginUser("Prajwal","p@k.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string =>{
    return ""
}

const heros =["Prajwal", "Jack", "John"]
// const heros =["1", "2", "3"]
heros.map((hero)  => {
    return 'hero is ${hero}'
})

function consoleError(errmsg: string): void{
    console.error(errmsg)
}

function handleError(errmsg: string): void{
    throw new Error(errmsg)
}
export{}