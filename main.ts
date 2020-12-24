function resetFood () {
    BURNT_TACO.setPosition(randint(0, 160), randint(20, 120))
    BURNT_TACO.say("I'M HERE", 1000)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    resetFood()
    info.changeScoreBy(1)
    info.startCountdown(2)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.startEffect(effects.confetti, 200)
    otherSprite.destroy(effects.fire, 200)
    info.changeLifeBy(-1)
    music.pewPew.play()
})
let WEIRD_GUY: Sprite = null
let BURNT_TACO: Sprite = null
info.setLife(5)
scene.setBackgroundColor(8)
let FACELESS_MONKEY = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f 2 2 2 2 e e e f . . . . . 
    . c 2 2 2 2 2 2 e e f f . . . . 
    . c 2 2 2 2 2 2 e e 2 2 f . . . 
    c 2 2 2 2 2 2 2 e e 2 2 c . . . 
    c 2 2 2 2 2 2 2 e e 2 2 c . . . 
    c 2 2 2 2 2 2 e e e f c . . . . 
    . f 2 2 2 2 e e e f f . . . . . 
    . . f f f f f 2 2 2 2 f . . . . 
    . . . . f f e 2 2 2 2 e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(FACELESS_MONKEY, 200, 200)
FACELESS_MONKEY.setFlag(SpriteFlag.StayInScreen, true)
BURNT_TACO = sprites.create(img`
    . . . . . . . e f f e . . . . . 
    . . . . . e e f f f 5 e e . . . 
    . . . . e 4 f f 2 f f 6 6 e . . 
    . . . e f f f f f f f f 4 f e . 
    . . e f f f f f f f f f f f 4 . 
    . e f f f f f 8 f f f f f f f 4 
    . e f f f f f f f f f f f f f f 
    e f f f f f f f f f f f f f f 4 
    f f c f f f f f f f f f f f f 4 
    f f f f f f f f f f f f f f e . 
    f 5 f f f f f f f f f f f e . . 
    f f f f f f f f f f f e e . . . 
    e f f f f f f f f f e . . . . . 
    4 f f e f f f f e e . . . . . . 
    . f 5 4 f f f e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `, SpriteKind.Food)
resetFood()
info.startCountdown(2)
game.onUpdateInterval(2000, function () {
    WEIRD_GUY = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 e 5 4 4 4 . . e e 
        . . f f e e e e e e e 4 4 e e e 
        . . f f e e e e e e e 1 e e e . 
        . . e e f f f e e e e e e e e . 
        . 4 e e f f f e e e e e e e e . 
        . 4 e e f f f e e e e e e e e . 
        . 4 e e e e e e e e e e e e 4 . 
        . 4 2 e e e e e e e e e e 4 4 . 
        . . 4 e e e e e e e e e e 4 . . 
        . . 4 e e e e e e e e e 4 4 . . 
        . . . 4 e e e e e e 2 2 4 . . . 
        . . . . 4 4 e e e 2 4 4 . . . . 
        . . . . . . 4 e 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    WEIRD_GUY.setPosition(0, 0)
    WEIRD_GUY.setVelocity(randint(20, 80), randint(20, 80))
})
