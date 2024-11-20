async function onPressed(buttonPosition) {
    if (allowPlayer) {
      setAllowPlayer(false);
      await buttons.get(buttonPosition).ref.current.press();
  
      if (sequence[playbackPos].position === buttonPosition) {
        if (playbackPos + 1 === sequence.length) {
          setPlaybackPos(0);
          increaseSequence(sequence);
        } else {
          setPlaybackPos(playbackPos + 1);
          setAllowPlayer(true);
        }
      } else {
        saveScore(sequence.length - 1);
        mistakeSound.play();
        await buttonDance();
      }
    }
  }