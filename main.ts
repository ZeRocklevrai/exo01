basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("Hello!")
        basic.showNumber(input.temperature())
        basic.showString("Hello!")
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
