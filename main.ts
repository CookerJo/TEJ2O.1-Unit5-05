/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah R
 * Created on: Mar 2026
 * This program will find the distance using a sonar
*/

// variable distance
let distance:number = 0

// icon
basic.showIcon(IconNames.Happy)

// find distance from sonar
input.onButtonPressed(Button. A, function () {
basic.clearScreen()
distance = sonar.ping( 
    DigitalPin. P1, // trigger
    DigitalPin. P2, // echo
    PingUnit. Centimeters
)
basic. showString(distance.toString() + " cm")
basic.showIcon(IconNames.Happy)
})
