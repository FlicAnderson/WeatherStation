input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("T:")
    basic.showNumber(envirobit.getTemperature())
    basic.showLeds(`
        # # . . .
        # # . # #
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.clearScreen()
})
envirobit.onClap(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Umbrella)
    basic.showString("T:")
    basic.showNumber(envirobit.getTemperature())
    basic.showLeds(`
        # # . . .
        # # . # #
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.clearScreen()
    basic.showString("H:")
    basic.showNumber(envirobit.getHumidity())
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        . # . # #
        # . . # #
        `)
    basic.clearScreen()
    basic.showString("P:")
    basic.showNumber(envirobit.getPressure())
    basic.showString("hPa")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("H:")
    basic.showNumber(envirobit.getHumidity())
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        . # . # #
        # . . # #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(200)
    basic.showString("Flic")
    basic.showIcon(IconNames.Heart)
    basic.showString("Tom")
    basic.clearScreen()
})
envirobit.setClapSensitivity(65)
basic.showString("Ahoj")
