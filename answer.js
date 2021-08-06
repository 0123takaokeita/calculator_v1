
    function applyOperation(op1, op2, operator){
      // str型からint型へ変更します。
      op1 = parseInt(op1);
      op2 = parseInt(op2);

      // 演算子によって返される値が変わります。
      if(operator === "+") return op1 + op2;
      if(operator === "-") return op1 - op2;
      if(operator === "*") return op1 * op2;
      if(operator === "/") return op1 / op2;

      // NaNキーワードはNot A Numberを意味します。
      return NaN;
  }

  const op1 = document.getElementById("operator1");
  const op2 = document.getElementById("operator2");
  const answer = document.getElementById("answer");

  // オペランドのボタンにクリックイベントリスナーを追加します。
  // addEventListener(種類, 関数)
  // 上で指定したanswer(タグ)のvalue属性に関数で出力した値を代入します。
  // JSではinputタグのvalue属性は直接変更することができます。
  document.getElementById("plusOperator").addEventListener("click", function(){answer.value = applyOperation(op1.value, op2.value, "+")});

  // 引き算のタグがクリックされると関数が実行されます。
  document.getElementById("minusOperator").addEventListener("click", function(){answer.value = applyOperation(op1.value, op2.value, "-")});

  // 掛け算
  document.getElementById("timesOperator").addEventListener("click", function(){answer.value = applyOperation(op1.value, op2.value, "*")});

  // 割り算
  document.getElementById("divideOperator").addEventListener("click", function(){answer.value = applyOperation(op1.value, op2.value, "/")});
