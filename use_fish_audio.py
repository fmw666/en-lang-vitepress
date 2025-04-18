from fish_audio_sdk import Session, TTSRequest

session = Session("7c813f3d7a1b4028a6ccdac7ab126729")

with open("r.mp3", "wb") as f:
    for chunk in session.tts(
        TTSRequest(text="find him!",
                   reference_id="9dad8769167c4c94983a202309fdbbb4")
    ):
        f.write(chunk)
