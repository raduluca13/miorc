const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// latin
let noteValues = {
    'C3': 130.81,
    'C#3': 138.59,
    'Db3': 138.59,
    'D3': 146.83,
    'D#3': 155.56,
    'Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3': 185.00,
    'Gb3': 185.00,
    'G3': 196.00,
    'G#3': 207.65,
    'Ab3': 207.65,
    'A3': 220.00,
    'A#3': 233.08,
    'Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'C#4': 277.18,
    'Db4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'Gb4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'A4': 415.30,
    'A#4': 440.00,
    'B4': 466.16,
    'C5': 466.16,
    'D5': 493.88,
};

//midi 
let midiDict = {
    "48": "C3",
    "50": "D3",
    "52": "E3",
    "54": "F3",
    "56": "G3",
    "58": "A3",
    "60": "B3",
    "62": "C4",
    "64": 'D4',
    "66": "E4",
    "68": "F4",
    "70": "G4",
    "72": "A4",
    "74": "B4",
    "76": "C5",
    "78": "D5"
}

let notes = []
let defaultFrequenciesList = []

// generate keys C3 -> D5
for (let i = 48; i < 80; i += 2) {
    notes.push(midiDict[`${i}`])
}
for (let i = 0; i < 16; i++) {
    defaultFrequenciesList.push(noteValues[notes[i]])
}


let response = {
    "notes": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 74, 74, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 76, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78]
    ],
    "name": "Stair",
    "duration": 12
}

let response2 = {
    "notes": [
        [48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 56],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 60, 60, 60, 0, 0, 0, 0, 0, 0, 60, 0, 0, 60, 0, 0],
        [0, 0, 0, 0, 0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "name": "Stair2",
    "duration": 12
}

function AudioManager(audioContext) {
    let _audioContext = audioContext
    let _managers = []
    let _audios = []

    return {
        addTrack: () => {
            let audio = new Track(_audioContext)
            audio.createOscillators()
            audio.createGains()
            audio.connectGains()
            console.log("default list ok ? :", defaultFrequenciesList)
            audio.loadDefaultOscillators(defaultFrequenciesList)
            _managers.push(audio)
            return _managers.length - 1
        },
        addAudio: (id, audio) => {
            _managers[id].addAudio(audio)
        },

        loadPartiture: (id, partiture) => {
            _managers[id].loadPartiture(partiture)
        },
        stopPartiture: (id) => {
            _managers[id].stopPartiture()
        },
        checkContextState: () => {
            return _audioContext.state
        },
        exists: (track) => {
            return _managers.length > track
        },
        resume: () => {
            _audioContext.resume()
            console.log("context resumed")
        },
        checkOscillatorState: (id) => {
            return _managers[id].checkOscillatorState()
        },
        playPause: (id, partiture) => {
            console.log(`oscillator state for ${id} : `, _managers[id].checkOscillatorState())
            if (_managers[id].checkOscillatorState() === false) {
                try {
                    _managers[id].loadPartiture(partiture);
                }
                catch (error) {
                    console.log(error)
                }

            }
            else {
                console.log("is it stopping?")
                try {
                    _managers[id].stopPartiture()
                }
                catch (error) {
                    console.log(error)
                }

            }
        },
        addAudio: (audio) => {
            _audios.push(audio)
            try {
                const track = _audioContext.createMediaElementSource(audio)
                track.connect(_audioContext.destination)
            }
            catch (error) {
                console.log(error)
            }
        },
        getAudios: () => {
            return _audios
        },
        show: (id) => {
            console.log("managers/tracks: ", id, _managers)
            try {
                _managers[id].show()
            }
            catch (error) {
                console.log(error)
            }
        }

    }
}

function Track(audioContext) {
    let _audioContext = audioContext
    let _oscillators = []
    let _gains = []
    let _ongoing = []
    let _isPlaying = false;

    return {
        checkContextState: () => {
            return _audioContext.state
        },
        checkOscillatorState: () => {
            // console.log("checking osc / ongoing ", _ongoing)
            // for (let i = 0; i < 16; i++) {
            //     if (_ongoing[i] === 1) return true
            // }
            // return false
            return _isPlaying
        },
        createOscillators: () => {
            for (let i = 0; i < 16; i++) {
                let osc = _audioContext.createOscillator()
                osc.type = "sine"
                _oscillators.push(osc)
            }
        },
        createGains: () => {
            for (let i = 0; i < 16; i++) {
                let gain = _audioContext.createGain()
                _gains.push(gain)
            }
        },
        connectGains: () => {
            for (let i = 0; i < 16; i++) {
                _oscillators[i].connect(_gains[i])
                _gains[i].connect(_audioContext.destination)
            }
        },
        loadDefaultOscillators: (defaultFrequenciesList) => {
            for (let i = 0; i < 16; i++) {
                _oscillators[i].frequency.value = defaultFrequenciesList[i]
            }
        },
        loadPartiture: (partiture, skipInit = 0) => {
            console.log(partiture)
            let time = _audioContext.currentTime
            let totalDuration = partiture["duration"]
            let singleDuration = totalDuration / partiture["notes"][0].length

            //start all
            if (skipInit == 0) {
                for (let i = 0; i < response["notes"].length; i++) {
                    if (response["notes"][i][0] != 0) {
                        console.log(`osc${i} started at ${_audioContext.currentTime}`)
                        try {
                            _oscillators[i].start(time)
                            _ongoing[i] = 1
                            
                            if (_ongoing.some((el) => { return el != 0 }))
                                _isPlaying = true

                        }
                        catch (error) {
                            console.log(error)
                        }

                        console.log("started")
                    }
                    else {
                        _ongoing[i] = 0;
                        _isPlaying = false
                    }
                }
            }


            // SCHEDULER 
            for (let i = 0; i < 16; i++) {
                for (let j = 1; j < partiture["notes"][i].length; j++) {
                    if (partiture["notes"][i][j] === 0 && _ongoing[i] == 1) {
                        console.log("i,j: ", i, j)
                        console.log(`osc${i} stopped at ${time + singleDuration * j}`)
                        try {
                            _oscillators[i].stop(time + singleDuration * j)
                            // modify
                            _ongoing[i] = 0
                            if (!_ongoing.some((el) => { return el != 0 })) {
                                _isPlaying = false
                            }
                        }
                        catch (error) {
                            console.log(error)
                        }
                    }
                    else {
                        if (partiture["notes"][i][j] !== 0 && _ongoing[i] == 0) {
                            console.log("merge pe ", i)
                            console.log(`osc${i} started at ${singleDuration * j}`)
                            try {
                                _oscillators[i].start(singleDuration * j)
                                if (!_isPlaying) _isPlaying = true
                                _ongoing[i] = 1
                            }
                            catch (error) {
                                console.log(error)
                            }
                            // _ongoing[i] = 1
                        }
                    }
                }

            }

            // stop all remaining
            for (let i = 0; i < 16; i++) {
                if (_ongoing[i] === 1) {
                    console.log(`osc${i} stopped at ${time + totalDuration}`)
                    try {
                        _oscillators[i].stop(time + totalDuration)
                    }
                    catch (error) {
                        console.log(error)
                    }
                    _isPlaying = false
                    _ongoing[i] = 0
                }
            }

            // for (let i = 0; i < trackFrequencies.length; i++) {
            //     osc.frequency.setValueAtTime(trackFrequencies[i], time + i * singleDuration)
            // }

        },
        stopPartiture: () => {
            let time = _audioContext.currentTime
            for (let i = 0; i < _oscillators.length; i++) {
                try {
                    _oscillators[i].stop(time)
                }
                catch (error) {
                    console.log(error)
                }
            }
        },
        isTrackStarted: (track) => {
            console.log(_oscillators[0].state)
        },
        show: () => {
            console.log(_oscillators)
            console.log(_gains)
        }
    }
}

let AM = new AudioManager(audioContext)
AM.addTrack()

var audios = document.querySelectorAll('audio');
console.log(audios)
audios.forEach(element => {
    AM.addAudio(element)
});





let main = document.getElementById("main");
main.addEventListener("click", function (e) {
    console.log(e.target)
    if (AM.checkContextState() === 'suspended') {
        AM.resume();
    }
    switch (e.target.id) {
        case "addInstrumentDiv":
            // here should be audio file/ json representation coming from ajax call or something
            let insertedId = AM.addTrack()
            console.log("inserted with track id : ", insertedId)
            break;

        case "waveform1":
            if (AM.exists(0)) AM.playPause(0, response)
            break;

        case "waveform2":
            if (AM.exists(1)) AM.playPause(1, response2)
            break;


        case "instrument_container1":
            let instr1 = document.getElementById("aud1")
            if (instr1.paused) instr1.play() // instr1.addEventListener("addtrack", () => console.log("added"))
            else instr1.pause()
            break


        case "instrument_container2":
            let instr2 = document.getElementById("aud2")
            if (instr2.paused) instr2.play()
            else instr2.pause()
            break

        case "play-all-btn":
            audios.forEach(el => {
                if (el.paused) el.play()
            })
            break;

        case "stop-all-btn":
            audios.forEach(el => {
                if (!el.paused) el.pause()
            })
            break;
        default:
            break
    }

});

