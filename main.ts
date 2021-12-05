input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let velocidad = 1000
game.setScore(0)
sprite = game.createSprite(2, 4)
let tanta = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(velocidad)
        tanta.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.isTouching(tanta)) {
        game.addScore(1)
        velocidad += -90
    }
    if (10 == game.score()) {
        game.gameOver()
    }
    basic.pause(velocidad)
    tanta.delete()
    tanta = game.createSprite(randint(0, 4), 0)
})
