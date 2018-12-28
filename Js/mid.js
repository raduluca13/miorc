class note {
    constructor(value) {
        this.value = value;
        this.active = false;
    }
}


MIDI.loadPlugin({
    soundfontUrl: "../MIDI.js/examples/soundfont/",
    instrument: "acoustic_grand_piano",
});

var notes = [];
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cols = 8;
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
                    MIDI.noteOn(0, notes[i][j].value, 100, delay); 
                }
                delay += 1 - bpm/10;
        }
    }
}

function check() {
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

init();