//배열

var arr = ["A", "B", "C", "D"]; //형식 : 대괄호, 콤마로 데이터 나열
//배열 이름 : arr
console.log(arr); //배열 전체 가져오기
console.log(arr[3]); //배열 인덱스 특정값 가져오기
console.log(arr[1]); //인덱스는 0부터 시작
arr[2] = 3; //특정값 갱신
console.log(arr);
console.log(arr.length); //배열 크기 구하기

arr.push("E");
console.log(arr);
