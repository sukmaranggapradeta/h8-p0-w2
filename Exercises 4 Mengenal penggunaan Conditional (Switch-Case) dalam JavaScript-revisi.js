var hari = 29; //assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2020;// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulanText = "";
var nilaiHari = "";
var nilaiTahun = "";
//=======================================================HARI=========================================
switch (hari > 0 && hari < 32){
  case true:
    nilaiHari = hari;
    break;
  case false:
    nilaiHari = "Indalid Day";
    break;
}
//=======================================================BULAN========================================
switch (bulan){
  case 1:
    bulanText = "Januari";
    if (hari <= 31 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 2:
    bulanText = "Februari";
    if ((hari >= 1 && hari <= 29) && ((bulan == 2)) && ((tahun % 4 == 0) && (tahun % 100 != 0) || (tahun % 4 == 0)&& (tahun % 100 == 0)&&(tahun % 400 == 0))){
      nilaiHari = hari;
    }else if  (hari >= 1 && hari <= 28 && bulan == 2){
      nilaiHari = hari;
    }else{
        nilaiHari = "Invalid Day";
    }
    break;
  case 3:
    bulanText = "Maret";
    if (hari <= 31 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 4:
    bulanText = "April";
    if (hari <= 30 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 5:
    bulanText = "Mei";
    if (hari <= 31 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 6:
    bulanText = "Juni";
    if (hari <= 30 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 7:
    bulanText = "Juli";
    if (hari <= 31 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 8:
    bulanText = "Agustus";
    if (hari <= 31 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 9:
    bulanText = "September";
    if (hari <= 30 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 10:
    bulanText = "Oktober";
    if (hari <= 31 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 11:
    bulanText = "November";
    if (hari <= 30 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  case 12:
    bulanText = "Desember";
    if (hari <= 31 && hari >=1){
      nilaiHari = hari;
    }else{
      nilaiHari = "Indalid Day"
    }
    break;
  default:
    bulanText = "Invalid Month";
    break;
}
//=======================================================TAHUN========================================
switch (tahun >= 1900 && tahun <= 2200){
  case true:
    nilaiTahun = tahun;
    break;
  case false:
    nilaiTahun = "Invalid Year";
    break
}
//=======================================================SHOW========================================
console.log(nilaiHari + " " + bulanText + " " + nilaiTahun);
