// =============================
// SISTEM PAKAR KESEHATAN
// script.js
// =============================

// Mengecek jumlah pasien
let pasien = JSON.parse(localStorage.getItem("pasien")) || [];

// Mengecek jumlah diagnosa
let diagnosa = JSON.parse(localStorage.getItem("diagnosa")) || [];

// Menampilkan ke dashboard
let pasienElement = document.getElementById("jmlPasien");
let diagnosaElement = document.getElementById("jmlDiagnosa");

if(pasienElement){
    pasienElement.innerHTML = pasien.length;
}

if(diagnosaElement){
    diagnosaElement.innerHTML = diagnosa.length;
}

// =============================
// Simpan Data Pasien
// =============================

function simpanPasien(){

let nama = document.getElementById("nama").value;
let umur = document.getElementById("umur").value;
let jk = document.getElementById("jk").value;
let alamat = document.getElementById("alamat").value;
let hp = document.getElementById("hp").value;

if(nama=="" || umur=="" || jk=="" || alamat=="" || hp==""){

alert("Semua data harus diisi!");

return;

}

let data = {

nama:nama,
umur:umur,
jk:jk,
alamat:alamat,
hp:hp

};

pasien.push(data);

localStorage.setItem("pasien",JSON.stringify(pasien));

alert("Data berhasil disimpan");

window.location="pasien.html";

}

// =============================
// Menampilkan Data Pasien
// =============================

function tampilPasien(){

let isi="";

pasien.forEach(function(item,index){

isi += `

<tr>

<td>${index+1}</td>

<td>${item.nama}</td>

<td>${item.umur}</td>

<td>${item.jk}</td>

<td>${item.alamat}</td>

<td>${item.hp}</td>

</tr>

`;

});

let tabel=document.getElementById("dataPasien");

if(tabel){

tabel.innerHTML=isi;

}

}

// =============================
// Hapus Semua Pasien
// =============================

function hapusPasien(){

if(confirm("Hapus semua data pasien?")){

localStorage.removeItem("pasien");

location.reload();

}

}

// =============================
// Menampilkan Riwayat Diagnosa
// =============================

function tampilDiagnosa(){

let data = JSON.parse(localStorage.getItem("diagnosa")) || [];

let isi="";

data.forEach(function(item,index){

isi +=`

<tr>

<td>${index+1}</td>

<td>${item.nama}</td>

<td>${item.penyakit}</td>

<td>${item.tanggal}</td>

</tr>

`;

});

let tabel=document.getElementById("riwayat");

if(tabel){

tabel.innerHTML=isi;

}

}

// ============================
// Menampilkan Riwayat Diagnosa
// ============================

function tampilDiagnosa(){

let data = JSON.parse(localStorage.getItem("diagnosa")) || [];

let isi="";

data.forEach(function(item,index){

isi += `

<tr>

<td>${index+1}</td>

<td>${item.nama}</td>

<td>${item.penyakit}</td>

<td>${item.tanggal}</td>

</tr>

`;

});

let tabel=document.getElementById("riwayat");

if(tabel){

tabel.innerHTML=isi;

}

}