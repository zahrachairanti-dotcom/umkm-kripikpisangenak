document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       LIGHTBOX FOTO GALERI
    ========================= */

    const lightbox = document.getElementById("lightbox");
    const fotoBesar = document.getElementById("fotoBesar");

    // Membuka foto
    window.bukaFoto = function (src) {
        fotoBesar.src = src;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    // Menutup foto
    window.tutupFoto = function () {
        lightbox.style.display = "none";
        fotoBesar.src = "";
        document.body.style.overflow = "auto";
    };

    // Klik area luar foto
    lightbox.addEventListener("click", function () {
        window.tutupFoto();
    });

    // Klik gambar tidak menutup lightbox
    fotoBesar.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    // Tombol ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            window.tutupFoto();
        }
    });


    /* =========================
       KOMENTAR PELANGGAN
    ========================= */

    const form = document.getElementById("formKomentar");
    const daftar = document.getElementById("daftarKomentar");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const komentar = document.getElementById("isiKomentar").value.trim();

        if (nama === "" || komentar === "") {
            alert("Nama dan komentar harus diisi!");
            return;
        }

        // Membuat kotak komentar
        const item = document.createElement("div");
        item.className = "komentar-item";

        // Nama pelanggan
        const judul = document.createElement("strong");
        judul.textContent = "👤 " + nama;

        // Isi komentar
        const isi = document.createElement("p");
        isi.textContent = komentar;
        isi.style.marginTop = "8px";
        isi.style.marginBottom = "0";

        item.appendChild(judul);
        item.appendChild(isi);

        // Komentar terbaru muncul di atas
        daftar.prepend(item);

        // Kosongkan formulir
        form.reset();

        alert("Komentar berhasil ditambahkan! 💗");

    });

});
