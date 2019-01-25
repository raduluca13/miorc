//howler 
// var sound = new Howl({
//     src: ['../Amorf-ManifoldSurface.flac'],
//     autoplay: true,
//     loop: true,
//     volume: 0.5,
//     onend: function() {
//       console.log('Finished!');
//     }
// });
// var sound2 = new Howl({
// src: ['../Amorf-Reflections.flac'],
// autoplay: true,
// loop: true,
// volume: 0.5,
// onend: function() {
//     console.log('Finished!');
// }
// });


const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();


function applyTheme(themeOption){
    // change css styles ?
    console.log(themeOption);
}

var wavesurfer1 = WaveSurfer.create({
    container: '#waveform1',
    waveColor: '#ffcb0c',
    cursorColor: '#ffcb0c',
    progressColor: 'green',
    crossOrigin: 'anonymous',
    autoCenter: 'true'
});
var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: '#ffcb0c',
    cursorColor: '#ffcb0c',
    progressColor: 'green',
    autoCenter: 'true'
});
var wavesurfer3 = WaveSurfer.create({
    container: '#waveform3',
    waveColor: '#ffcb0c',
    cursorColor: '#ffcb0c',
    progressColor: 'green',
    autoCenter: 'true'
});
var wavesurfer4 = WaveSurfer.create({
    container: '#waveform4',
    waveColor: '#ffcb0c',
    cursorColor: '#ffcb0c',
    progressColor: 'green',
    autoCenter: 'true'
});

wavesurfer1.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer2.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer3.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer4.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");

var wavePartitura1 = WaveSurfer.create({
    container: '#partitura1',
    waveColor: '#ffcb0c',
    progressColor: 'green',
    cursorColor: '#ffcb0c',
    crossOrigin: 'anonymous',
    autoCenter: 'true',
    barWidth: "6"
});
var wavePartitura2 = WaveSurfer.create({
    container: '#partitura2',
    waveColor: '#ffcb0c',
    cursorColor: '#ffcb0c',
    progressColor: 'green',
    autoCenter: 'true',
    barWidth: "6"
});
var wavePartitura3 = WaveSurfer.create({
    container: '#partitura3',
    waveColor: '#ffcb0c',
    cursorColor: '#ffcb0c',
    progressColor: 'green',
    autoCenter: 'true',
    barWidth: "6"
});
var wavePartitura4 = WaveSurfer.create({
    container: '#partitura4',
    waveColor: '#ffcb0c',
    cursorColor: '#ffcb0c',
    progressColor: 'green',
    autoCenter: 'true',
    barWidth: "6"
});

wavePartitura1.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavePartitura2.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavePartitura3.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavePartitura4.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");

let main = document.getElementById("main");
var headerMovingCursor = document.getElementById('headerMovingCursor');
var themeOptionSelector = document.getElementById("themeSelector_select");

// headerMovingCursor.animate([{
//         transform: "translateX(1000px)"
//     }], {
//         duration: 2000,
//         iterations: Infinity
//     }
// );

let progress = document.getElementById('progress');

main.addEventListener("click", function(e){
    console.log(e.target.id)
    switch(e.target.id){
        case "instrument_container1":
        // case "instrument1":
            let instr1 = document.getElementById("instrument_container1")
            console.log(instr1.dataset)
            if(instr1.dataset.playing === "false"){
                console.log(instr1.dataset.playing)
                instr1.dataset.playing = "true"
            }
            break
        case "instrument_container1":
        case "instrument2":
            let instr2 = document.getElementById("instrument_container1")
            if(instr2.dataset.playing === "false"){
                
                instr2.dataset.playing = "true"
            }
            break
        default:
            break
    }

    if(e.target.id==="play-all-btn"){
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        const audioElements = document.querySelectorAll('audio');

        function addToContext(trk){
            try{
                const track = audioContext.createMediaElementSource(trk)
                track.connect(audioContext.destination)
            }
            catch(error){
                console.log(error)
            }
        }
        audioElements.forEach(element => {
            addToContext(element)
        });
    }
    /*
    if (e.target.parentNode.id == "waveform1" || e.target.parentNode.id == "instrument_container1"){
        wavesurfer1.playPause();
    }
    if (e.target.parentNode.id == "waveform2" || e.target.parentNode.id == "instrument_container2"){
        wavesurfer2.playPause();
    }
    if (e.target.parentNode.id == "waveform3" || e.target.parentNode.id == "instrument_container3"){
        wavesurfer3.playPause();
    }
    if (e.target.parentNode.id == "waveform4" || e.target.parentNode.id == "instrument_container4"){
        wavesurfer4.playPause();
    }
    if (e.target.parentNode.id == "partitura1"){
        wavePartitura1.playPause();
    }
    if (e.target.parentNode.id == "partitura2"){
        wavePartitura2.playPause();
    }
    if (e.target.parentNode.id == "partitura3"){
        wavePartitura3.playPause();
    }
    if (e.target.parentNode.id == "partitura4"){
        wavePartitura4.playPause();
    }
    */
    if (e.target.id == "themeSelector_select"){
        var chosenTheme = themeOptionSelector[themeOptionSelector.selectedIndex].value;
        applyTheme(chosenTheme);
    }
    
   
    //see events
    //console.log(e.target);

});

