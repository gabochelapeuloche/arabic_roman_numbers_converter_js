function convertToRoman(num) {
  let numNonRomanArr = num.toString().split("");
  let strSoluce = "";
  switch(numNonRomanArr.length) {
    case 1:
      if (numNonRomanArr[0] < 4) {
        for (let i = 0; i < numNonRomanArr[0]; i ++) {
          strSoluce += 'I';
        }
      } else if (numNonRomanArr[0] < 9) {
        numNonRomanArr[0] < 5 ? strSoluce+='IV' : strSoluce+='V';
        for (let i = 5; i < numNonRomanArr[0]; i ++) {
          strSoluce += 'I';
        }
      } else {
        strSoluce += 'IX'
      };
      break;
    case 2: 
      if (numNonRomanArr[0] < 4) {
        for (let i = 0; i < numNonRomanArr[0]; i ++) {
          strSoluce += 'X';
        }
      } else if (numNonRomanArr[0] < 9) {
        numNonRomanArr[0] < 5 ? strSoluce+='XL' : strSoluce+='L';
        for (let i = 5; i < numNonRomanArr[0]; i ++) {
          strSoluce += 'X';
        }
      } else {
        strSoluce += 'XC'
      }
      strSoluce += convertToRoman(numNonRomanArr[1]);
      break;
    case 3:  
      if (numNonRomanArr[0] < 4) {
        for (let i = 0; i < numNonRomanArr[0]; i ++) {
          strSoluce += 'C';
        }
      } else if (numNonRomanArr[0] < 9) {
        numNonRomanArr[0] < 5 ? strSoluce+='CD' : strSoluce+='D';
        for (let i = 5; i < numNonRomanArr[0]; i ++) {
          strSoluce += 'C';
        }
      } else {
        strSoluce += 'CM'
      }
      strSoluce += convertToRoman(numNonRomanArr[1] + numNonRomanArr[2]);
      break;
    default:
      for (let i = 0; i < numNonRomanArr[0]; i ++) {
        strSoluce += 'M';
      };
      strSoluce += convertToRoman (numNonRomanArr[numNonRomanArr.length-3] + numNonRomanArr[numNonRomanArr.length-2] + numNonRomanArr[numNonRomanArr.length-1]);
      break;
  }
  return strSoluce;
}
