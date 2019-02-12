
var optionList = document.getElementById("instrument_options");
var db = firebase.firestore();
var songsRef = db.collection("Songs");



function changeSongList(id){
    var list = document.createElement("div");
    list.id = "partituri_instrument";
    if(document.getElementById("partituri_instrument")){
    optionList.removeChild(document.getElementById("partituri_instrument"));
    }
    var instrumentName;
    if(id==1){
        instrumentName = "grand_piano";
    }else if(id==2){
        instrumentName = "xylophone";
    }else{
        instrumentName = "music_box";
    }
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const quary = songsRef.where("instrument","==",instrumentName);
            quary.get()
                .then(songs => {
                    let i = 5;
                    songs.forEach(doc => {
                        var data = doc.data();
                        var song = document.createElement("div");
                        song.id = "partitura" + i;
                        song.draggable = true;
                        song.dataset.notes = data.notes;
                        song.dataset.instrumentName = instrumentName;
                        song.classList.add("waveformDiv");
                        song.classList.add("partitura");

                        let songHdr = document.createElement("div");
                        songHdr.innerText = data.user + " - " + data.title;
                        song.appendChild(songHdr)

                        let ww = document.createElement("DIV")
                        ww.classList.add("wave_wrap")
                        ww.innerHTML = `<div class="wave_inner"><img class="waveform" src="../assets/wave.png">
                        <div class="progress_over"></div><div class="progress">
                        <div class="rand_prog" class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div></div>`
                        song.appendChild(ww)

                        list.appendChild(song);
                        optionList.appendChild(list);
                        i++;
                    })
    
                })
        }
    });
}
changeSongList(1);
