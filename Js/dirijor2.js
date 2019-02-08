
// $("#btn").click(function(){
//   var binary= convertDataURIToBinary(data);
//   var blob=new Blob([binary], {type : 'audio/ogg'});
//   var blobUrl = URL.createObjectURL(blob);
//   $('body').append('<br> Blob URL : <a href="'+blobUrl+'" target="_blank">'+blobUrl+'</a><br>');
//   $("#source").attr("src", blobUrl);
//   $("#audio")[0].pause();
//   $("#audio")[0].load();//suspends and restores all audio element
//   $("#audio")[0].oncanplaythrough =  $("#audio")[0].play();
// });

const blobbie = "data:audio/midi;base64,TVRoZAAAAAYAAAABAIBNVHJrAAAAlQCQQECBAIBAQACQPkCBAIA+QACQPECCAIA8QACQQECBAIBAQACQPkCBAIA+QACQPECCAIA8QACQPEBAgDxAAJA8QECAPEAAkDxAQIA8QACQPEBAgDxAAJA+QECAPkAAkD5AQIA+QACQPkBAgD5AAJA+QECAPkAAkEBAgQCAQEAAkD5AgQCAPkAAkDxAggCAPEAA/y8A"
let binary = convertDataURIToBinary(blobbie)
let blob = new Blob([binary], {type: 'audio/midi'})
var blobUrl = URL.createObjectURL(blob);
console.log("binary bl: ", binary)
console.log("blob: ", blob)
console.log("bloburl: ", blobUrl)

function convertDataURIToBinary(dataURI) {
    var BASE64_MARKER = ';base64,';
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
  
    for(i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
let binary = convertDataURIToBinary(blobbie)
console.log("binary bl: ", binary)
console.log("blob: ", blob)
let blob = new Blob([binary], {type: 'audio/midi'})
let blobUrl = URL.createObjectURL(blob);

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
    "duration": 8
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


// let AM = new AudioManager(audioContext)
// AM.addTrack()

var audios = document.querySelectorAll('audio');
// console.log(audios)
// audios.forEach(element => {
//     AM.addAudio(element)
// });





let main = document.getElementById("main");
main.addEventListener("click", function (e) {
    console.log(e.target)
    // if (AM.checkContextState() === 'suspended') {
        // AM.resume();
    // }
    const audioContext = new AudioContext();

    switch (e.target.id) {
        case "addInstrumentDiv":
            // here should be audio file/ json representation coming from ajax call or something
            // let insertedId = AM.addTrack()
            console.log("inserted with track id : ", insertedId)
            break;

        case "waveform1":
            // if (AM.exists(0)) AM.playPause(0, response)
            break;

        case "waveform2":
            let doc = document.querySelector(`#${e.target.id} audio`);
            // let _blobbie = URL.createObjectURL(blobbie)
            doc.setAttribute("src", blob)
            doc.play()
            // console.log("audio: ", doc)
            // let gain = audioContext.createGain()
            // doc.connect(gain)
            // gain.connect(audioContext.destination)
            // console.log("play")
            // if (AM.exists(1)) AM.playPause(1, response2)
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
                if (!el.paused) el.stop()
            })
            break;
        default:
            break
    }

});

