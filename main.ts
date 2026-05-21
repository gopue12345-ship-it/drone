input.onButtonPressed(Button.A, function () {
    RingbitCar.turnleft()
})
input.onGesture(Gesture.ScreenUp, function () {
    RingbitCar.back()
})
input.onGesture(Gesture.ScreenDown, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.turnright()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.pause(100)
