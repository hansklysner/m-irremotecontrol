function turnLeft () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
}
function driveBackward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
}
function turnRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
}
maqueen.IR_callbackUser(function (number) {
    if (number == forwardKey) {
        driveForward()
    }
    if (number == backwardKey) {
        driveBackward()
    }
    if (number == leftKey) {
        turnLeft()
    }
    if (number == rightKey) {
        turnRight()
    }
    if (number == stopKey) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
function driveForward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
}
let speed = 0
let stopKey = 0
let rightKey = 0
let leftKey = 0
let backwardKey = 0
let forwardKey = 0
basic.showIcon(IconNames.TShirt)
forwardKey = 68
backwardKey = 29
leftKey = 72
rightKey = 28
stopKey = 92
speed = 50
