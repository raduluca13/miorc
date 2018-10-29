var wavesurfer1 = WaveSurfer.create({
    container: '#waveform1',
    waveColor: 'violet',
    progressColor: 'green',
    crossOrigin: 'anonymous',
    scrollParent: true
});
var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: 'green',
    progressColor: 'purple',
    scrollParent: true
});
var wavesurfer3 = WaveSurfer.create({
    container: '#waveform3',
    waveColor: 'green',
    progressColor: 'purple',
    scrollParent: true
});
var wavesurfer4 = WaveSurfer.create({
    container: '#waveform4',
    waveColor: 'green',
    progressColor: 'purple',
    scrollParent: true
});

wavesurfer1.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer2.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer3.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");
wavesurfer4.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");

let main = document.getElementById("main");
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
})