radio.onReceivedNumber(function (receivedNumber) {
    recivednumber = randint(1, 10)
    if (recivednumber == 1) {
        basic.clearScreen()
        radio.sendNumber(2)
    } else {
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (0 == 0) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
let recivednumber = 0
radio.setGroup(23)
