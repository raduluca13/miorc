function applyTheme(themeOption){
    // change css styles ?
    console.log(themeOption);
}
var wavesurfer1 = WaveSurfer.create({
    container: '#waveform1',
    waveColor: 'violet',
    progressColor: 'green',
    crossOrigin: 'anonymous'
});
var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: 'green',
    progressColor: 'purple'
});
var wavesurfer3 = WaveSurfer.create({
    container: '#waveform3',
    waveColor: 'green',
    progressColor: 'purple'
});
var wavesurfer4 = WaveSurfer.create({
    container: '#waveform4',
    waveColor: 'green',
    progressColor: 'purple'
});

wavesurfer1.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer2.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer3.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer4.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");

var wavePartitura1 = WaveSurfer.create({
    container: '#partitura1',
    waveColor: 'violet',
    progressColor: 'green',
    crossOrigin: 'anonymous'
});
var wavePartitura2 = WaveSurfer.create({
    container: '#partitura2',
    waveColor: 'green',
    progressColor: 'purple'
});
var wavePartitura3 = WaveSurfer.create({
    container: '#partitura3',
    waveColor: 'green',
    progressColor: 'purple'
});
var wavePartitura4 = WaveSurfer.create({
    container: '#partitura4',
    waveColor: 'green',
    progressColor: 'purple'
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
main.addEventListener("click", function(e){
    if (e.target.parentNode.id == "waveform1"){
        wavesurfer1.playPause();
    }
    if (e.target.parentNode.id == "waveform2"){
        wavesurfer2.playPause();
    }
    if (e.target.parentNode.id == "waveform3"){
        wavesurfer3.playPause();
    }
    if (e.target.parentNode.id == "waveform4"){
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

