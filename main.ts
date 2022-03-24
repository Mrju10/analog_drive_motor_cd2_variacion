function apagar () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function reversa () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    serial.writeString("" + (pins.analogReadPin(AnalogPin.P0)))
    serial.writeString(" ")
}
function arranque () {
    serial2 = parseFloat(serial.readUntil(serial.delimiters(Delimiters.Space)))
    serial.writeString("" + (serial2))
    if (serial2 == 1) {
        min = 0
        max = 30
    } else if (serial2 == 2) {
        min = 40
        max = 100
    } else if (serial2 == 3) {
        min = 150
        max = 300
    } else if (serial2 == 4) {
        min = 380
        max = 420
    } else if (serial2 == 5) {
        min = 500
        max = 550
    } else if (serial2 == 6) {
        min = 600
        max = 620
    } else if (serial2 == 7) {
        min = 700
        max = 730
    } else if (serial2 == 8) {
        min = 840
        max = 860
    } else if (serial2 == 9) {
        min = 990
        max = 1020
    }
}
function adelante () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    serial.writeString("" + (pins.analogReadPin(AnalogPin.P0)))
    serial.writeString(" ")
}
let max = 0
let min = 0
let serial2 = 0
let auxmax = 0
let auxmin = 0
while (pins.analogReadPin(AnalogPin.P0) > 30) {
    adelante()
}
apagar()
arranque()
basic.forever(function () {
    while (pins.analogReadPin(AnalogPin.P0) > min && pins.analogReadPin(AnalogPin.P0) < max) {
        apagar()
        auxmax = max
        auxmin = min
        arranque()
    }
    if (auxmax < max && auxmin < min) {
        reversa()
    } else if (auxmax > max && auxmin > min) {
        adelante()
    } else {
    	
    }
})
