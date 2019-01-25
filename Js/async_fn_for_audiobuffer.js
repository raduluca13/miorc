
// let newmid = MidiFile('../MIDI_sample.mid')
// console.log("noimen", newmid)

// async function getBufferedFile(audioContext, filepath) {
//     const response = await fetch(filepath);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     return audioBuffer;
// }

// async function setupSample() {
//     const filePath = ['../sorry.wav', '../peace.mp3', '../MIDI_sample.mid']; // ccan take an array
//     const sample = await getBufferedFile(audioContext, filePath);
//     return sample;
// }

// setupSample()
//     .then((sample) => {
//         console.log("loaded")
//         console.log(sample)
//         // sample is our buffered file
//         // ...
//     });

// function playSample(audioContext, audioBuffer) {
//     const sampleSource = audioContext.createBufferSource();
//     sampleSource.buffer = audioBuffer;
//     // sampleSource.playbackRate.setValueAtTime(playbackRate, audioCtx.currentTime);
//     // let tempo = 60.0;
//     // let lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
//     // let scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
//     sampleSource.connect(audioContext.destination)
//     sampleSource.start();
//     return sampleSource;
// }
