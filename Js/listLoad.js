var songList = document.getElementById("partituri_instrument");
var db = firebase.firestore();
var songsRef = db.collection("Songs");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        const quary = songsRef;
        quary.get()
            .then(songs => {
                let i = 5;
                songs.forEach(doc => {
                    var data = doc.data();
                    var song = document.createElement("div");
                    song.id = "partitura" + i;
                    song.draggable = true;
                    song.innerText = data.user + " - " + data.title;
                    song.dataset.notes = data.notes
                    song.dataset.instrumentName = data.instrument
                    song.classList.add("waveformDiv");
                    song.classList.add("partitura");
                    songList.appendChild(song);
                    i++;
                })

            })
    }
});
