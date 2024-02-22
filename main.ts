input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        music.setTempo(120)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        if (input.lightLevel() > 90) {
            music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        } else if (input.lightLevel() >= 90) {
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.stringPlayable("C5 A B E A G D C ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # . #
        # # # . .
        # # # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
