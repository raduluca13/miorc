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
    if (e.target.id == "themeSelector_select"){
        var chosenTheme = themeOptionSelector[themeOptionSelector.selectedIndex].value;
        applyTheme(chosenTheme);
    }
    
   
    //see events
    //console.log(e.target);

});

