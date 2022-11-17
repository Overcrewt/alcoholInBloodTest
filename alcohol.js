const prompt = require("prompt-sync")()
const mass = Number(prompt("Сколько весишь? "))
const nap = Number(prompt("Сколько напитков выпил? "))
const sex = prompt("Какой у тебя пол? Male/Female ")
let c = 0
let milliArray = []
let krepArray = []

const plotnost = {
    2: 0.9945,
    4: 0.991,
    6: 0.9878,
    8: 0.9848,
    10: 0.9819,
    12: 0.9791,
    14: 0.9764,
    16: 0.9739,
    18: 0.9713,
    20: 0.9686,
    22: 0.9659,
    24: 0.9631,
    26: 0.9602,
    28: 0.9571,
    30: 0.9538,
    32: 0.9504,
    34: 0.9468,
    36: 0.9431,
    38: 0.9392,
    40: 0.9352,
}
let plotnostNum = 0
let spirt = 0

if (milliArray.length == 0) {
    if (sex === "Male") {
        for (let i = 0; i < nap; i++) {
            milliArray.push(Number(prompt("Сколько напитка? В миллилитрах ")))
            krepArray.push(Number(prompt("Какая крепкость? ")))
        }
        for (let i = 0; i < milliArray.length; i++) {
            let element = milliArray[i]
            const element2 = krepArray[i]
            if (plotnost[element2] != undefined) {
                plotnostNum = plotnost[element2]
                element -= plotnostNum * element
                spirt += element
            } else {
                console.log("Нет такого значения крепости!!!")
                break
            }
        }
        let massMan = mass * 0.7
        c = spirt / massMan
        c = c.toFixed(2)
        console.log(`Концентрация спирта в крови составляет ${c}% `)
    } else {
        for (let i = 0; i < nap; i++) {
            milliArray.push(Number(prompt("Сколько напитка? В миллилитрах ")))
            krepArray.push(Number(prompt("Какая крепкость? ")))
        }
        for (let i = 0; i < milliArray.length; i++) {
            let element = milliArray[i]
            let element2 = krepArray[i]
            if (plotnost[element2] != undefined) {
                plotnostNum = plotnost[element2]
                element -= plotnostNum * element
                spirt += element
            } else {
                console.log("Нет такого значения крепости!!!")
                break
            }
        }
        let massMan = mass * 0.6
        c = spirt / massMan
        c = c.toFixed(2)
        console.log(`Концентрация спирта в крови составляет ${c}% `)
    }
}
