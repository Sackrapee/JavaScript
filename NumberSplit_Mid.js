/*
numbersplit(4) [2,2]
numbersplit(10) [5,5]
numbersplit(11) [5,6]
numbersplit(-9) [-5,-4]
*/

const numberSplit = (num) => {
    if (num === undefined) {
      return "Input Parameter can't be empty"
    } else {
    let a = Math.floor(num / 2);
    let b = num - a;
    let c = [];
    c.push(a, b);
    return c;
    }
  };
  console.log(numberSplit(4));
  console.log(numberSplit(10));
  console.log(numberSplit(11));
  console.log(numberSplit(-9));
  