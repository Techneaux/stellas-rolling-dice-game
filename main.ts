input.onGesture(Gesture.Shake, function () {
    images.createBigImage(`
        . . . . . . . . . .
        . . . # # # . . . .
        . . . # # # . . . .
        . . . # # # . . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
    basic.clearScreen()
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(6)
    } else {
        basic.showNumber(randint(1, 6))
    }
})
basic.showString("Shake!")
