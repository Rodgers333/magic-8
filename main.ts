input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    whatever = randint(0, 3)
    if (whatever == 0) {
        basic.showString("YES")
    } else if (whatever == 1) {
        basic.showString("NO")
    } else if (whatever == 2) {
        basic.showString("Who Knows")
    } else {
        basic.showString("Maybe Not")
    }
})
let whatever = 0
basic.showString("Ask A ?")
basic.forever(function () {
	
})
