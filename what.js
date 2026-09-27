document.addEventListener("DOMContentLoaded", function() {

    // Tombol pendaftaran
    const quote = document.querySelector(".quote");

    if (quote) {
        quote.addEventListener("click", function(event) {

            alert("Anda akan diarahkan ke halaman berikutnya.");

        });
    }

    // Efek navbar ketika scroll
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

});

// Animasi tombol
const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function() {
    btn.style.transform = "scale(1.1)";
});

btn.addEventListener("mouseout", function() {
    btn.style.transform = "scale(1)";
});

// Pesan saat halaman dibuka
window.onload = function() {
    console.log("Selamat Datang di BEAT RUSH GROUP");
};