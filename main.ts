input.onButtonPressed(Button.A, function () {
    music.setTempo(120)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (input.lightLevel() > 90) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() >= 90) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    music.play(music.stringPlayable("C5 A B E A G D C ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.EighthNote)
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("C5 B E F D C D E ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(120)
    music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (input.lightLevel() > 100) {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() >= 100) {
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    music.play(music.stringPlayable("C5 E B C E G D B ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.QuarterNote)
})
