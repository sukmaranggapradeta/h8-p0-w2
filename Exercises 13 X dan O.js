//Logic Challenge - X dan O
function xo(str) {
    var hurufX = 0;
    var hurufO = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i]=== "x"){
            hurufX = hurufX + 1;
        }else if (str[i] === "o"){
            hurufO = hurufO + 1
        }
    }
    if (hurufX === hurufO){
        return true;
    }
    return false;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true