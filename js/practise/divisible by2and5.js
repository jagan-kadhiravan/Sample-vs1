// 1. Create a function that takes an integer n as parameter,
// Console n
// Console ‘multiple of 2’ when n is divisible by 2
// Console ‘multiple of 5’ when n is divisible by 5
// Console ‘multiple of 2 and 5’ when is n is divisible by both 2 and 5
// ex: testFunc(11);
// 1
// Multiple of 2
// 3
// Multiple of 2
// Multiple of 5
// Multiple of 2
// 7
// Multiple of 2
// 9
// Multiple of 2 and 5
// 11

function check(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0 && i % 5 != 0) {
      console.log("Multiple of 2");
    } else if (i % 5 == 0 && i % 2 != 0) {
      console.log("Multiple of 5");
    } else if (i % 5 == 0 && i % 2 == 0) {
      console.log("Multiple of 2 and 5 ");
    } else {
      console.log(i);
    }
  }
}
check(11);
