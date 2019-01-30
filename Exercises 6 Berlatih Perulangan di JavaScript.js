//1. Melakukan Looping Menggunakan While
var loopingPertama = 2;
var loopingKedua = 20;
console.log("LOOPING PERTAMA : ")
while (loopingPertama < 21){
  console.log(loopingPertama + " - I love coding");
  loopingPertama = loopingPertama + 2;
}
console.log("LOOPING KEDUA : ")
while (loopingKedua > 0){
  console.log(loopingKedua + " - I will become fullstack developer");
  loopingKedua = loopingKedua - 2;
}
//=====================================================================================

//2. Melakukan Looping Menggunakan For
console.log("\n LOOPING PERTAMA : ")
for(var lp = 1; lp < 21; lp++ ){
  console.log(lp + " - I love coding");
  }
console.log("LOOPING KEDUA : ")
for(var lk = 20; lk > 0; lk-- ){
  console.log(lk + " - I will become fullstack developer");
  }

  //=====================================================================================
//3. Angka Ganjil dan Genap
 //3.1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
console.log("\n Perulangan 1 - 100 dengan pertambahan counter sebanyak 1 : ")
for(var counter = 1; counter <= 100; counter++ ){
    console.log(counter);
}

 //3.2. Di dalam perulangan, periksa setiap angka counter:
console.log("\n Angka Ganjil dan Genap : ")
for(var counter = 1; counter <= 100; counter++ ){
  if ((counter % 2) == 0){
    console.log(counter + " adalah angka GENAP")
  }else{
    console.log(counter + " adalah angka GANJIL")
  }
}

  //3.4. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2.
console.log("\n kelipatan 3 dengan pertambahan 2 : ")
for(var counter3 = 1; counter3 <= 100; counter3+=2 ){
 if ((counter3 % 3) == 0){
   console.log(counter3 + " KELIPATAN 3 ");
 }else{
   //console.log("");
 }
}
  //3.4. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 5.
console.log("\n kelipatan 6 dengan pertambahan 5 : ")
for(var counter6 = 1; counter6 <= 100; counter6+=5 ){
 if ((counter6 % 6) === 0){
    console.log(counter6 + " KELIPATAN 6 ");
  }else{
    //console.log("");
  }
}
  //3.4. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 9.
console.log("\n kelipatan 10 dengan pertambahan 9 : ")
for(var counter10 = 1; counter10 <= 100; counter10+=9 ){
 if ((counter10 % 10) == 0){
   console.log(counter10 + " KELIPATAN 10 ");
 }else{
   //console.log("");
 }
}