// script.js
const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const audioPlayer = document.getElementById('audioPlayer');
const recordingNameInput = document.getElementById('recordingName');
const recordingsList = document.getElementById('recordingsList');
let mediaRecorder;
let audioChunks = [];

recordButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);

function startRecording() {
    if (mediaRecorder) {
        mediaRecorder.stop();
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
            audioChunks = [];
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    audioChunks.push(e.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);

                const div = document.createElement('div');
                div.className = 'segment'; // Add a class to the div

                // Create a paragraph for the recording name
                const recordingName = document.createElement('p');
                div.className = "rec";
                recordingName.textContent = recordingNameInput.value || 'Untitled'; // Use input value or 'Untitled' if empty

                const audio = document.createElement('audio');
                audio.controls = true;
                audio.src = audioUrl;
                div.appendChild(recordingName);
                div.appendChild(audio);
                recordingsList.appendChild(div);

                audioPlayer.src = audioUrl;

                // Clear the input field after adding the recording
                recordingNameInput.value = '';
            };

            mediaRecorder.start();
        })
        .catch((error) => {
            console.error('Error accessing microphone:', error);
        });

    recordButton.disabled = true;
    stopButton.disabled = false;
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    }

    recordButton.disabled = false;
    stopButton.disabled = true;
}
