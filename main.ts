basic.forever(function () {
    lumaMatrix.movingImage(
    lumaMatrix.matrix8x8(`
        # . . # . # # #
        # . . # . . # .
        # # # # . . # .
        # . . # . . # .
        # . . # . # # #
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        `),
    0x00ff00,
    10,
    lumaMatrix.eDirection.Right
    )
})
