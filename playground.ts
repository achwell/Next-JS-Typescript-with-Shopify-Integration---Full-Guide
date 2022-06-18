interface Person {
    name: String,
    age: number

}
export default function play() {
    const name = "Axel"
    const age = 55

    const person: Person = {
        name: "Axel",
        age: 55
    }

    function logPersonInfo(personName: string, personAge: number) {
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }

    function logPersonInfo2(person: Person) {
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info)
        return info
    }

    logPersonInfo(name, age)
    logPersonInfo2(person)
}