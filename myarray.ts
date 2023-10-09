// const heroes = []

// heroes.push ("spiderman")  // string is not assignable to parameter of type "never"

const heroes : string[] = []
heroes.push ("spiderman")

const heroPower : number[] = []
heroPower.push(3)

const heroPower2 : Array<number> =[]
heroPower2.push(54)

//type aliases

type User = {
    name : string
    isActive : boolean
}

const allUsers : User[] = []



export {}

