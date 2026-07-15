// =========================================
// SISTEM PAKAR KESEHATAN
// METODE BACKWARD CHAINING
// =========================================

function diagnosa() {

    // ==========================
    // Ambil Nama Pasien
    // ==========================

    let nama = document.getElementById("namaPasien").value.trim();

    if (nama == "") {
        alert("Silakan masukkan nama pasien.");
        return;
    }

    // ==========================
    // Ambil Gejala yang Dipilih
    // ==========================

    let gejala = [];

    for (let i = 1; i <= 20; i++) {

        if (document.getElementById("g" + i).checked) {

            gejala.push("g" + i);

        }

    }

    // ==========================
    // Basis Pengetahuan (Rule)
    // ==========================

    const rules = [

        {
            penyakit: "COVID-19",
            gejala: ["g1","g2","g5","g6"],
            solusi: "Gunakan masker, istirahat, lakukan tes COVID dan segera konsultasi ke dokter."
        },

        {
            penyakit: "Influenza",
            gejala: ["g1","g2","g3"],
            solusi: "Perbanyak minum air putih, istirahat cukup, dan konsumsi vitamin."
        },

        {
            penyakit: "Demam Berdarah",
            gejala: ["g1","g11","g12","g19"],
            solusi: "Segera periksa ke rumah sakit dan perbanyak minum cairan."
        },

        {
            penyakit: "Tifus",
            gejala: ["g1","g7","g9","g19"],
            solusi: "Istirahat total dan konsumsi makanan lunak."
        },

        {
            penyakit: "Maag",
            gejala: ["g7","g8","g20"],
            solusi: "Makan teratur dan hindari makanan pedas."
        },

        {
            penyakit: "Asma",
            gejala: ["g5","g17"],
            solusi: "Hindari debu, asap rokok dan gunakan inhaler bila diperlukan."
        },

        {
            penyakit: "Radang Tenggorokan",
            gejala: ["g1","g4"],
            solusi: "Perbanyak minum air hangat dan istirahat."
        },

        {
            penyakit: "Migrain",
            gejala: ["g10","g18"],
            solusi: "Tidur cukup dan kurangi aktivitas berat."
        },

        {
            penyakit: "Konjungtivitis",
            gejala: ["g15","g2"],
            solusi: "Jaga kebersihan mata dan gunakan obat tetes sesuai anjuran dokter."
        },

        {
            penyakit: "Alergi Kulit",
            gejala: ["g16","g13"],
            solusi: "Hindari penyebab alergi dan gunakan salep sesuai resep dokter."
        }

    ];

    // ==========================
    // Backward Chaining
    // ==========================

    let hasil = null;

    for (let rule of rules) {

        let cocok = true;

        for (let syarat of rule.gejala) {

            if (!gejala.includes(syarat)) {

                cocok = false;
                break;

            }

        }

        if (cocok) {

            hasil = rule;
            break;

        }

    }

    // ==========================
    // Menampilkan Hasil
    // ==========================

    let output = document.getElementById("hasil");

    if (hasil != null) {

        output.innerHTML = `

        <h2>🩺 Hasil Diagnosa</h2>

        <hr><br>

        <p><b>Nama Pasien :</b> ${nama}</p>

        <p><b>Penyakit :</b> ${hasil.penyakit}</p>

        <br>

        <h3>Saran Penanganan</h3>

        <p>${hasil.solusi}</p>

        `;

        // ==========================
        // Simpan Riwayat
        // ==========================

        let data = JSON.parse(localStorage.getItem("diagnosa")) || [];

        data.push({

            nama: nama,

            penyakit: hasil.penyakit,

            tanggal: new Date().toLocaleDateString("id-ID")

        });

        localStorage.setItem("diagnosa", JSON.stringify(data));

    }

    else {

        output.innerHTML = `

        <h2>⚠ Hasil Diagnosa</h2>

        <hr><br>

        <p>

        Gejala yang dipilih belum sesuai dengan basis pengetahuan sistem.

        </p>

        <p>

        Silakan pilih gejala lain atau konsultasikan ke tenaga medis.

        </p>

        `;

    }

}