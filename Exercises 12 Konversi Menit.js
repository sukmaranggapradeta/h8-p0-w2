//Logic Challenge - Konversi Menit
function konversiMenit(menit) {
    var ubahMenit = Math.floor(menit/60);
    var ubahDetik = Math.floor(menit%60);
    if (ubahDetik <= 9){
        return (ubahMenit + ":0" + ubahDetik);
    }
    return (ubahMenit + ":" + ubahDetik);
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00