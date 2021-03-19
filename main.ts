bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    TobbieII.vibrate(5)
})
bluetooth.onBluetoothDisconnected(function on_bluetooth_disconnected() {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . # # # .
        `)
    TobbieII.shake_head(2)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    
    RX_Data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (RX_Data.charAt(0) == "C" && RX_Data.length == 11) {
        basic.clearScreen()
        TobbieII.drawface(RX_Data)
    } else if (RX_Data.charAt(0) == "Z") {
        RX_Data = RX_Data.substr(1, RX_Data.length)
        basic.showString(RX_Data)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(1, 0)
        led.plot(1, 4)
        led.plot(2, 0)
        led.plot(2, 4)
        led.plot(3, 0)
        led.plot(3, 4)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
    } else if (RX_Data.length == 2) {
        if (RX_Data.compare("A4") == 0) {
            basic.clearScreen()
            TobbieII.stopturn()
            TobbieII.stopwalk()
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(1, 0)
            led.plot(1, 4)
            led.plot(2, 0)
            led.plot(2, 4)
            led.plot(3, 0)
            led.plot(3, 4)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
        } else if (RX_Data.compare("A5") == 0) {
            basic.clearScreen()
            TobbieII.stopwalk()
            TobbieII.rightward()
            led.plot(0, 2)
            led.plot(1, 1)
            led.plot(1, 3)
            led.plot(2, 0)
            led.plot(2, 4)
        } else if (RX_Data.compare("A3") == 0) {
            basic.clearScreen()
            TobbieII.stopwalk()
            TobbieII.leftward()
            led.plot(2, 0)
            led.plot(2, 4)
            led.plot(3, 1)
            led.plot(3, 3)
            led.plot(4, 2)
        } else if (RX_Data.compare("B00") == 0) {
            basic.clearScreen()
            led.plot(2, 1)
            led.plot(0, 2)
            led.plot(1, 2)
            led.plot(2, 2)
            led.plot(3, 2)
            led.plot(4, 2)
            led.plot(2, 3)
        } else if (RX_Data.compare("A7") == 0) {
            TobbieII.backward()
            TobbieII.stopturn()
            basic.clearScreen()
            led.plot(0, 2)
            led.plot(1, 1)
            led.plot(2, 0)
            led.plot(3, 1)
            led.plot(4, 2)
        } else if (RX_Data.compare("A1") == 0) {
            TobbieII.forward()
            TobbieII.stopturn()
            basic.clearScreen()
            led.plot(0, 2)
            led.plot(1, 3)
            led.plot(2, 4)
            led.plot(3, 3)
            led.plot(4, 2)
        } else if (RX_Data.compare("A8") == 0) {
            TobbieII.backward()
            TobbieII.leftward()
            basic.clearScreen()
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(0, 1)
            led.plot(1, 1)
            led.plot(0, 2)
            led.plot(2, 2)
            led.plot(0, 3)
            led.plot(3, 3)
        } else if (RX_Data.compare("A6") == 0) {
            TobbieII.backward()
            TobbieII.rightward()
            basic.clearScreen()
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(3, 1)
            led.plot(4, 1)
            led.plot(2, 2)
            led.plot(4, 2)
            led.plot(1, 3)
            led.plot(4, 3)
        } else if (RX_Data.compare("A0") == 0) {
            TobbieII.forward()
            TobbieII.leftward()
            basic.clearScreen()
            led.plot(0, 1)
            led.plot(3, 1)
            led.plot(0, 2)
            led.plot(2, 2)
            led.plot(0, 3)
            led.plot(1, 3)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
        } else if (RX_Data.compare("A2") == 0) {
            TobbieII.forward()
            TobbieII.rightward()
            basic.clearScreen()
            led.plot(1, 1)
            led.plot(4, 1)
            led.plot(2, 2)
            led.plot(4, 2)
            led.plot(3, 3)
            led.plot(4, 3)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
            led.plot(4, 4)
        } else {
            TobbieII.stopwalk()
            TobbieII.stopturn()
            basic.clearScreen()
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(1, 0)
            led.plot(1, 4)
            led.plot(2, 0)
            led.plot(2, 4)
            led.plot(3, 0)
            led.plot(3, 4)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
        }
        
    } else if (RX_Data.length == 3) {
        if (RX_Data.compare("C01") == 0) {
            basic.clearScreen()
            led.plot(1, 1)
            led.plot(3, 1)
            led.plot(0, 3)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
            led.plot(4, 3)
        } else if (RX_Data.compare("C02") == 0) {
            basic.clearScreen()
            led.plot(1, 1)
            led.plot(3, 1)
            led.plot(0, 4)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
            led.plot(4, 4)
        } else if (RX_Data.compare("C03") == 0) {
            basic.clearScreen()
            led.plot(1, 1)
            led.plot(3, 1)
            led.plot(0, 4)
            led.plot(3, 1)
            led.plot(1, 3)
            led.plot(2, 4)
            led.plot(3, 3)
            led.plot(4, 4)
        } else if (RX_Data.compare("C04") == 0) {
            basic.clearScreen()
            led.plot(0, 0)
            led.plot(4, 0)
            led.plot(1, 1)
            led.plot(3, 1)
            led.plot(0, 3)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
            led.plot(4, 3)
            led.plot(0, 4)
            led.plot(2, 4)
            led.plot(4, 4)
        } else if (RX_Data.compare("C05") == 0) {
            basic.clearScreen()
            led.plot(0, 1)
            led.plot(1, 1)
            led.plot(3, 1)
            led.plot(4, 1)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
        } else if (RX_Data.compare("C06") == 0) {
            basic.clearScreen()
            led.plot(1, 0)
            led.plot(3, 0)
            led.plot(2, 2)
            led.plot(1, 3)
            led.plot(3, 3)
            led.plot(2, 4)
        } else if (RX_Data.compare("C07") == 0) {
            basic.clearScreen()
            led.plot(0, 0)
            led.plot(4, 0)
            led.plot(0, 2)
            led.plot(1, 2)
            led.plot(2, 2)
            led.plot(3, 2)
            led.plot(4, 2)
            led.plot(3, 3)
            led.plot(4, 3)
            led.plot(3, 4)
            led.plot(4, 4)
        } else if (RX_Data.compare("C08") == 0) {
            basic.clearScreen()
            led.plot(1, 0)
            led.plot(3, 0)
            led.plot(0, 1)
            led.plot(1, 1)
            led.plot(2, 1)
            led.plot(3, 1)
            led.plot(4, 1)
            led.plot(0, 2)
            led.plot(1, 2)
            led.plot(2, 2)
            led.plot(3, 2)
            led.plot(4, 2)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
            led.plot(2, 4)
        } else {
            basic.clearScreen()
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(0, 1)
            led.plot(2, 1)
            led.plot(4, 1)
            led.plot(0, 2)
            led.plot(1, 2)
            led.plot(2, 2)
            led.plot(3, 2)
            led.plot(4, 2)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
        }
        
    }
    
})
let RX_Data = ""
bluetooth.startUartService()
TobbieII.stopwalk()
TobbieII.stopturn()
RX_Data = ""
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . # # # .
    . # # # .
    `)
basic.forever(function on_forever() {
    
})
