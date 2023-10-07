// if
var nama = "Tengku Muhammad Zainul Aprilizar";
if (nama) {
  console.log(nama);
}

console.log("=================================");

// if else
var umurKu = 20;

var umurMinMengemudi = 18;

if (umurKu >= umurMinMengemudi) {
  console.log("Anda sudah bisa mengemudi kendaraan");
} else {
  console.log("Anda belum bisa mengemudi kendaraan");
}

console.log("=================================");

// nested if
let IPK = 2.8;

if (IPK >= 4.0) {
  console.log("Predikat Anda: Summa Cum Laude");
} else if (IPK >= 3.8) {
  console.log("Predikat Anda: Magna Cum Laude");
} else if (IPK >= 3.5) {
  console.log("Predikat Anda: Cum Laude");
} else if (IPK >= 3.0) {
  console.log("Predikat Anda: Sangat Memuaskan");
} else {
  console.log("Predikat Anda: Tidak Lulus");
}

console.log("=================================");

// switch case
var golDarah = "B";

switch (golDarah) {
  case "A":
    console.log("Anda Memiliki Golongan Darah A");
    break;
  case "AB":
    console.log("Anda Memiliki Golongan Darah AB");
    break;
  case "B":
    console.log("Anda Memiliki Golongan Darah B");
    break;
  default:
    console.log("Anda Tidak Memilki Golongan Darah");
    break;
}

console.log("=================================");

// for statement
var urutanAbsen = ["Tengku Zainul", "James", "Rocky"];

for (var i = 0; i < urutanAbsen.length; i++) {
  console.log("Mahasiswa ke-" + (i + 1) + ": " + urutanAbsen[i]);
}

console.log("=================================");

// while
let tanggal = 1;

while (tanggal <= 5) {
  console.log("Hari ini tanggal : " + tanggal);
  tanggal++;
}

console.log("=================================");

// do while
let buahIndex = 1;
const buah = ["Apel", "Jeruk", "Pisang", "Mangga", "Anggur"];

do {
  console.log("Ini adalah buah : " + buah[buahIndex - 1]);
  buahIndex++;
} while (buahIndex <= 5);

console.log("=================================");

// function
function buatSepedaMotor(merek, model, tahun, warna) {
  const sepedaMotor = {
    merek: merek,
    model: model,
    tahun: tahun,
    warna: warna,
  };

  return sepedaMotor;
}

const sepedaMotorSaya = buatSepedaMotor("Honda", "Astrea", 1999, "Hitam");

console.log("Merek: " + sepedaMotorSaya.merek);
console.log("Model: " + sepedaMotorSaya.model);
console.log("Tahun: " + sepedaMotorSaya.tahun);
console.log("Warna: " + sepedaMotorSaya.warna);
