// Create an empty three-second stereo buffer at the sample rate of the AudioContext
                var myArrBuffer = _audioContext.createBuffer(2, _audioContext.sampleRate * 3, _audioContext.sampleRate);
                // Fill the buffer with white noise;
                // just random values between -1.0 and 1.0
                for (var channel = 0; channel < myArrBuffer.numberOfChannels; channel++) {
                    // This gives us the actual array that contains the data
                    var nowBuffering = myArrBuffer.getChannelData(channel);
                    for (var i = 0; i < myArrBuffer.length; i++) {
                    // Math.random() is in [0; 1.0]
                    // audio needs to be in [-1.0; 1.0]
                    nowBuffering[i] = Math.random() * 2 - 1;
                    }
                }
                // Get an AudioBufferSourceNode.
                // This is the AudioNode to use when we want to play an AudioBuffer
                source = _audioContext.createBufferSource();
                // set the buffer in the AudioBufferSourceNode
                source.buffer = myArrBuffer
                source.connect(_audioContext.destination)
                source.start()
                // _audioContext.decodeAudioData(binary.buffer, 
                //     function(buffer) {
                //         source.buffer = buffer;
                //         source.connect(_audioContext.destination);            
                //     },
                //     function(e){ console.log("Error with decoding audio data" + e.err);}
                // )
                // wavesurfer1.loadArrayBuffer(binary.buffer);
                // wavesurfer1.loadDecodedBuffer(binary.buffer)
                // wavesurfer1.loadBlob(blobUrl)
                // wavesurfer1.on('ready', function () {
                //     console.log("READY")
                // //     wavesurfer1.play();
                // });