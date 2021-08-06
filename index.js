// フォームDOM取得
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById('answer');

// 値の初期化
let op1 = 0;
let op2 = 0;

// 入力値の取得
input1.addEventListener('change', function () {
  op1 = parseInt(input1.value);
})
input2.addEventListener('change', function () {
  op2 = parseInt(input2.value);
})


// 入力値をアラートで確認。
const testInput = document.getElementById('testInput');
testInput.addEventListener('click', function () {
  alert(`operand1: ${op1} operand2: ${op2}`);
});


// 足し算を行う。
const plus = document.getElementById('additionBtn')
plus.addEventListener('click',function(){
  output.value = op1 + op2;
});


