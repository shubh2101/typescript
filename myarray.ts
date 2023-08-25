// const heroes = []

// heroes.push ("spiderman")  // not assignable

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

