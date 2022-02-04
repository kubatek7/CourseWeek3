let test = function () {
let num1 = Number(prompt("Enter number: "));
if (num1 > 7) {
  alert ("Number is greater than 7");
  }
  else if ( num1 ===7) {
    alert ("Number is equal 7")
  }
  else if (num1 <7) {
    alert ("Number is smaller than 7");
  }
  else {
    alert ("Incorrect number")
  }
}
for (let i=1; i<=3; i++) {
  test();
}
