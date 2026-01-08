import keyboard

word = keyboard.record(until='escape', suppress=False, trigger_on_release=False)
keyboard.wait('insert')


keyboard.play(word, speed_factor=1.0)
