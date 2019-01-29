var hari = 21; //assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945;// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulanText = "";

switch (bulan){
  case 1:
    bulanText = "Januari";
    break;
  case 2:
    bulanText = "Februari";
    break;
  case 3:
    bulanText = "Maret";
    break;
  case 4:
    bulanText = "April";
    break;
  case 5:
    bulanText = "Mei";
    break;
  case 6:
    bulanText = "Juni";
    break;
  case 7:
    bulanText = "Juli";
    break;
  case 8:
    bulanText = "Agustus";
    break;
  case 9:
    bulanText = "September";
    break;
  case 10:
    bulanText = "Oktober";
    break;
  case 11:
    bulanText = "November";
    break;
  case 12:
    bulanText = "Desember";
    break;
}
console.log(hari + " " +bulanText + " " + tahun);