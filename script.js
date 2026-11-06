
document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript Penyewaan berhasil dijalankan.");

    const formPenyewaan = document.getElementById("formPenyewaan");

    const successOverlay = document.getElementById("success-overlay");

    const hargaMobil = {
        "BMW M4 Competition 039": 2500000,
        "Lamborghini Revuelto 039": 3000000,
        "Porsche 911 Turbo 039": 2300000,
        "Rolls-Royce Ghost 039": 8000000,
        "Bugatti Chiron 039": 25000000,
        "Ferrari SF90 039": 15000000
    };

    function formatRupiah(angka) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(angka);
    }

    if (formPenyewaan && successOverlay) {

        formPenyewaan.addEventListener("submit", function (e) {

            e.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const mobil = document.getElementById("mobil").value;
            const lama = Number(document.getElementById("lama").value);

            if (nama === "") {
                alert("Nama lengkap wajib diisi!");
                return;
            }

            if (mobil === "" || !hargaMobil[mobil]) {
                alert("Silakan pilih mobil terlebih dahulu!");
                return;
            }

            if (!Number.isInteger(lama) || lama < 1) {
                alert("Lama sewa minimal 1 hari!");
                return;
            }

            const hargaPerHari = hargaMobil[mobil];
            const totalHarga = hargaPerHari * lama;

            document.getElementById("res-nama").textContent = nama;
            document.getElementById("res-mobil").textContent = mobil;
            document.getElementById("res-lama").textContent = lama;
            document.getElementById("res-harga").textContent =
                formatRupiah(hargaPerHari);
            document.getElementById("res-total").textContent =
                formatRupiah(totalHarga);

            successOverlay.classList.add("show");

        });

    } else {
        console.error("Form atau popup tidak ditemukan!");
    }

    window.resetForm = function () {

        successOverlay.classList.remove("show");

        formPenyewaan.reset();

    };

});
