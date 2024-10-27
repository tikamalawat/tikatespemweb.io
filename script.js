function enterSite() {
    const nameInput = document.getElementById("nameInput").value;
    const welcomeMessage = document.getElementById("welcomeMessage");

    // Pastikan nama sudah diisi
    if (nameInput.trim() !== "") {
        // Set pesan selamat datang dengan nama
        welcomeMessage.textContent = `Selamat datang, ${nameInput}!`;

        // Sembunyikan layar awal dan tampilkan konten utama
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Masukkan nama dulu!");
    }
    function exitSite() {
        // Tampilkan GIF lucu
        const funnyGif = document.getElementById("funnyGif");
        funnyGif.style.display = "block"; // Menampilkan GIF
    
        // Tampilkan pesan terima kasih
        alert("Terima kasih telah mengunjungi situs bucin ini!");
    
        // Aksi setelah beberapa detik untuk menutup atau mengarahkan
        setTimeout(() => {
            // Mengarahkan ke halaman lain (opsional)
            window.location.href = "https://www.google.com"; // Arahkan ke situs lain
        }, 3000); // Menunggu 3 detik sebelum mengarahkan atau menutup
    }
}    
