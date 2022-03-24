def apagar():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
def reversa():
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    serial.write_string("" + str((pins.analog_read_pin(AnalogPin.P0))))
    serial.write_string(" ")
def adelante():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    serial.write_string("" + str((pins.analog_read_pin(AnalogPin.P0))))
    serial.write_string(" ")
max2 = 0
min2 = 0
serial2 = parse_float(serial.read_until(serial.delimiters(Delimiters.SPACE)))
if serial2 == 1:
    min2 = 0
    max2 = 100
elif serial2 == 2:
    min2 = 101
    max2 = 200

def on_forever():
    while pins.analog_read_pin(AnalogPin.P0) > min2 and pins.analog_read_pin(AnalogPin.P0) < max2:
        apagar()
    adelante()
basic.forever(on_forever)
