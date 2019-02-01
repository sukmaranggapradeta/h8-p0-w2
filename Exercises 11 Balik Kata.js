//Logic Challenge - Balik Kata

function balikKata(kata) {
    var panjangKata = kata.length-1;
    var balikKata = kata[panjangKata];
    for(var i = panjangKata; i>0;i--){
        balikKata = balikKata + kata[i-1];
    }
    return balikKata;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS