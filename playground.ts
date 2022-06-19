type Age = number

interface iPerson {
    name: string,
    age?: Age
}

class Person {
    name: string
    age?: Age

    constructor(name: string, age: Age) {
        this.name = name
        this.age = age
    }
}

interface iPersonLoggerFn {
    (name: string, age: Age): string
}

type PersonLoggerFn = (name: string, age?: Age) => string

export default function play() {
    const name = "Axel"
    const age = 55

    const person: Person = new Person("Axel", 55)

    const person2: Person = {name:"p"}

    const logPersonInfo: PersonLoggerFn = (personName: string, personAge: Age = 0): string => {
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }

    function logPersonInfo2(person: Person) {
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info)
        return info
    }

    const log: string = logPersonInfo(name)
    logPersonInfo2(person)
}