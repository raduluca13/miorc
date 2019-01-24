class note {
    constructor(value) {
        this.value = value;
        this.active = false;
    }
}



var files = ["acoustic_grand_piano","bright_acoustic_piano" ,"electric_grand_piano","honkytonk_piano","electric_piano_1","electric_piano_2","harpsichord","clavinet","celesta","glockenspiel","music_box","vibraphone","marimba","xylophone","tubular_bells","dulcimer","drawbar_organ","percussive_organ","rock_organ","church_organ","reed_organ","accordion","harmonica","tango_accordion","acoustic_guitar_nylon","acoustic_guitar_steel","electric_guitar_jazz","electric_guitar_clean","electric_guitar_muted","overdriven_guitar","distortion_guitar","guitar_harmonics","acoustic_bass","electric_bass_finger","electric_bass_pick","fretless_bass","slap_bass_1","slap_bass_2","synth_bass_1","synth_bass_2","violin","viola","cello","contrabass","tremolo_strings","pizzicato_strings","orchestral_harp","timpani","string_ensemble_1","string_ensemble_2","synth_strings_1","synth_strings_2","choir_aahs","voice_oohs","synth_choir","orchestra_hit","trumpet","trombone","tuba","muted_trumpet","french_horn","brass_section","synth_brass_1","synth_brass_2","soprano_sax","alto_sax","tenor_sax","baritone_sax","oboe","english_horn","bassoon","clarinet","piccolo","flute","recorder","pan_flute","blown_bottle","shakuhachi","whistle","ocarina"]
var notes = [];
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cols = 8;
var wait=0;
var cInstrument = document.getElementById("instrument_select")
cInstrument.addEventListener("change" , instrumentChange , {passive: true});
var playSong = document.getElementById("playSong");
playSong.addEventListener("click", playMusic);
canvas.addEventListener("click", check);

function playMusic() {
    let bpm = document.getElementById('bpm').value;
    var delay = 0.4;
    MIDI.setVolume(0, 147);
    for (let j = 0; j < cols; j++) {
        {
            for (let i = 0; i < 16; i++)
                if (notes[i][j].active == true) {
                    MIDI.noteOn(0, notes[i][j].value, 127, delay);
                }
            delay += 1 - bpm / 10;
        }
    }
}

function instrumentChange(){
    wait =1;
        MIDI.loadPlugin({
            soundfontUrl: "../MIDI.js/examples/soundfont/",
            instrument: files[cInstrument.value],
            onsuccess: function () {
                MIDI.programChange(0, cInstrument.value);
                wait=0;
            }
        });

    console.log(cInstrument.value);
}

function check() {
    if(wait==0){
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor((event.clientX - rect.left) / 30);
    var y = Math.floor((event.clientY - rect.top) / 30);
    notes[y][x].active = !notes[y][x].active;
    if (notes[y][x].active == true) {
        MIDI.noteOn(0, notes[y][x].value, 127, 0);
    }
    if (x + 1 == cols) {
        expand();
        animate();
    } else {
        animate();
    }
}
else{
    console.log("Wait");
}
}

function expand() {
    for (let i = 0; i < 16; i++) {
        for (let j = cols; j < (cols + 8); j++) {
            notes[i][j] = new note(i * 3 + 50);

        }
    }
    cols += 8;
    canvas.width = canvas.width + 240;
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.beginPath();
            if (notes[i][j].active == true) {
                ctx.fillStyle = "green";
            } else {
                ctx.fillStyle = "gray";
            }
            ctx.fillRect(j * 30, i * 30, 29, 29);
            ctx.closePath();
        }
    }
}

function init() {
  wait = 1;
    MIDI.loadPlugin({
        soundfontUrl: "../MIDI.js/examples/soundfont/",
        instrument: "acoustic_grand_piano",
    
        onsuccess: function () {
            wait =0;
            MIDI.programChange(0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "gray";
            for (let i = 0; i < 16; i++) {
                notes[i] = [];
                for (let j = 0; j < cols; j++) {
                    notes[i][j] = new note(i * 3 + 50);
                    ctx.beginPath();
                    ctx.fillRect(j * 30, i * 30, 29, 29);
                    ctx.closePath();
                }
            }
        }
    });
}

init();