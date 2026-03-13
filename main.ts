/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah R
 * Created on: Mar 2026
 * This program will find the distance using a sonar
*/

// variable distance
let distance:number = 0

// Icon
basic.showIcon(IconNames.Happy)

// Find distance from sonar
input.onButtonPressed(Button. A, function () {
basic.clearScreen()
    distance = sonar.ping( 
    DigitalPin. P1, // Triger
    DigitalPin. P2, // Ehco
    PingUnit. Centimeters
)
basic. showString((distance) + " cm")
basic.showIcon(IconNames.Happy)
})
