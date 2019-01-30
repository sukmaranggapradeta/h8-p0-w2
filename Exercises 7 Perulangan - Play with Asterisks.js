var rows1; // input the number of rows
// do loops to display asterisks in the console.
//===========================================================================
//1. Menyusun Barisan Bintang
console.log("\n 1. Menyusun Barisan Bintang : ");
for (rows1 = 5; rows1 > 0; rows1--){
    console.log("*");
}
//===========================================================================
//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("\n 2. Menyusun Barisan Bintang Dengan Nested Looping :");
var rows2;
var deretBintang = "";
for (rows1 = 5; rows1 > 0; rows1--){
    for(rows2 = 5; rows2 > 0 ; rows2--){
        deretBintang = deretBintang + "*";
    }
    deretBintang = deretBintang + "\n";
}
console.log(deretBintang);
//===========================================================================
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("\n 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping : ");
var rows3;
var deretBintang3 = "";
for (rows1 = 5; rows1 > 0; rows1--){
    for(rows3 = 5; rows3 >= rows1 ; rows3--){
        deretBintang3 = deretBintang3 + "*";
    }
    deretBintang3 = deretBintang3 + "\n";
}
console.log(deretBintang3);