// フォームDOM取得
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

// 値の初期化
let op1 = 0;
let op2 = 0;

// 入力値の取得
input1.addEventListener('change', function () {
  op1 = input1.value;
})
input2.addEventListener('change', function () {
  op2 = input2.value;
})


// 入力値をアラートで確認。
const testInput = document.getElementById('testInput');
testInput.addEventListener('click', function () {
  alert(`operand1: ${op1} operand2: ${op2}`);
});


