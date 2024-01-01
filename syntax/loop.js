//양대 제어문 중 하나인 반복문 만들기

console.log("A");
console.log("B");
console.log("C1");
console.log("C2");
console.log("D");

console.log("A");
console.log("B");
//무한 루프(위험)
// while(true){
//     console.log('C1');
//     console.log('C2');
// }
console.log("D");

while (i < 2) {
  console.log("C1");
  console.log("C2");
  i = i + 1;
}
console.log("D");
