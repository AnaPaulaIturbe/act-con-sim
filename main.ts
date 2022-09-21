basic.showNumber(input.temperature())
basic.forever(function () {
    while (input.temperature() == 10) {
        basic.showNumber(input.temperature())
        basic.showString("¡Vamos a esquiar!")
    }
    while (input.temperature() == 20) {
        basic.showNumber(input.temperature())
        basic.showString("Hágamos un picnic")
    }
    while (input.temperature() == 30) {
        basic.showNumber(input.temperature())
        basic.showString("¡Vamos a la playa!")
    }
    while (input.temperature() == 40) {
        basic.showNumber(input.temperature())
        basic.showString("Mejor no salgas")
    }
})
