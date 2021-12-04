input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let sprite: game.LedSprite = null
let velocidad = 1000000
game.setScore(0)
sprite = game.createSprite(2, 4)
let tanta = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        control.waitMicros(velocidad)
        tanta.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.isTouching(tanta)) {
        game.addScore(1)
        velocidad += -95000
    }
    if (10 == game.score()) {
        game.gameOver()
    }
    control.waitMicros(1000000)
    tanta.delete()
    tanta = game.createSprite(randint(0, 4), 0)
})
