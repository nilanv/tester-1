input.onButtonPressed(Button.AB, function () {
    basic.showString("hi ayya and thatha")
    music.play(music.stringPlayable("- E - G C G - - ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showIcon(IconNames.House)
})
