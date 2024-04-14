var video;

// Function to initialize the video
window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false; // Turn off autoplay
	video.loop = false; // Turn off looping
	console.log("Video initialized with autoplay off and looping off.");
});

// Play Video
document.querySelector("#play").addEventListener("click", function () {
	video.play();
	console.log("Play Video");
	updateVolume();
});

// Pause Video
document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Pause Video");
});

// Slow Down Video
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("New speed is ", video.playbackRate);
});

// Speed Up Video
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("New speed is ", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location is ", video.currentTime);
});

// Mute/Unmute Video
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
	updateVolume();
});

// Change Volume
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	updateVolume();
});

// Add Old School Effect
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Style set to Old School");
});

// Remove Old School Effect
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Style set to Original");
});

// Update volume text
function updateVolume() {
	var volumeText = document.querySelector("#volume");
	volumeText.textContent = Math.round(video.volume * 100) + "%";
}



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

