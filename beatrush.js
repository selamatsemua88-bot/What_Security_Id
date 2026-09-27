const video = document.getElementById("bg-video");
const audio = document.querySelector("audio");

audio.addEventListener("play", () => {
    video.play();
});

audio.addEventListener("pause", () => {
    video.pause();
});

audio.addEventListener("ended", () => {
    video.pause();
    video.currentTime = 0;
});

// Animasi gambar logo
const logo = document.querySelector(".logo img");

if (logo) {
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(1.05)";
    });

    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1)";
    });
}

// Lagu diputar satu kali
audio.loop = false;

audio.addEventListener("ended", () => {
    console.log("Audio selesai diputar.");
});

const backgroundVideo = document.getElementById("bg-video");

// Pastikan video berjalan
backgroundVideo.play().catch(() => {
    console.log("Video menunggu interaksi browser.");
});

// Jika video berhenti, jalankan kembali
backgroundVideo.addEventListener("pause", () => {
    backgroundVideo.play().catch(() => {});
});