interface Person {
    kind: "business" | "academic" | "otherType"
    name: string
    age: number
}

interface BusinessPerson extends Person {
    kind: "business"
    salary: number
}

interface AcademicPerson extends Person {
    kind: "academic"
    publications: Array<string>
}

type Human = BusinessPerson | AcademicPerson | { kind: "otherType", special: string }

type RaceCar = {
    name: string,
    maxSpeed: 200,
    team: string
}

type CityCar = {
    name: string,
    maxSpeed: 100,
    space: string
}

type Car = CityCar | RaceCar

export default function play() {
    const car: RaceCar = {maxSpeed: 200, name: "Race Car", team: "ferari"}
    const car2: CityCar = {maxSpeed: 100, name: "City Car", space: "masse"}

    function logPersonInfo(human: Human) {
        switch (human.kind) {
            case "academic":
                console.log(human)
                break;
            case "business":
                console.log(human)
                break;
            case "otherType":
                console.log(human)
                break;
            default:
                console.log(human)
                break;
        }
    }

    function logCarInfo(car: Car) {
        console.log((car as RaceCar).team)
        console.log((<CityCar>car).space)
        console.log(car.name)
        switch (car.maxSpeed) {
            case 200:
                console.log(car.team)
                break
            case 100:
                console.log(car.space)
                break
            default:
                console.log(car)
        }
    }


    logCarInfo(car)
    logCarInfo(car2)
}