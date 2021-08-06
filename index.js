
  // アラートでテストインプットの出力
  document.getElementById('testInput').addEventListener('click',function(){
    
    let operand1 = document.getElementById('input1').value;
    let operand2 = document.getElementById('input2').value;
    alert(`ope1: ${operand1}  ope2: ${operand2}`);
  })
  
  //加算
  document.getElementById('additionBtn').addEventListener('click',function(){
    let operand1 = document.getElementById('input1').value;
    let operand2 = document.getElementById('input2').value;
    let answer   = document.getElementById('answer');
    console.log(typeof operand1);
    // console.log(Number(operand2));
    answer.value = Number(operand1) + Number(operand2);
    
  }) 
  // 割り算
  document.getElementById('divisionBtn').addEventListener('click',function(){
    let operand1 = document.getElementById('input1').value;
    let operand2 = document.getElementById('input2').value;
    let answer   = document.getElementById('answer');
    console.log(typeof operand1);

    answer.value = operand1 / operand2;
    
  }) 
  // 掛算
  document.getElementById('multiplicationBtn').addEventListener('click',function(){
    let operand1 = document.getElementById('input1').value;
    let operand2 = document.getElementById('input2').value;
    let answer   = document.getElementById('answer');
    console.log(typeof operand1);
    answer.value = operand1 * operand2;
    
  }) 
  // 引き算
  document.getElementById('subtractionBtn').addEventListener('click',function(){
    let operand1 = document.getElementById('input1').value;
    let operand2 = document.getElementById('input2').value;
    let answer   = document.getElementById('answer');
    console.log(typeof operand1);

    answer.value = operand1 - operand2;
    
  }) 
  