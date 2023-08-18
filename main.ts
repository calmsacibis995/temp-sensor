input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 30) {
        basic.showString("hot!")
    }
    if (input.temperature() > 40) {
        basic.showString("Very hot!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
