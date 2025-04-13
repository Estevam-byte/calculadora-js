function calcular() {
  // Pega e valida os valores
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operacao = document.getElementById('operacao').value;
  
  // Validação robusta
  if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('resultado').textContent = "Por favor, insira números válidos!";
      return;
  }
  
  let resultado;
  
  switch(operacao) {
      case '+':
          resultado = num1 + num2;
          break;
      case '-':
          resultado = num1 - num2;
          break;
      case '*':
          resultado = num1 * num2;
          break;
      case '÷':
          if (num2 === 0) {
              resultado = "Erro: Divisão por zero!";
          } else {
              resultado = num1 / num2;
              // Formatação inteligente
              if (Number.isInteger(resultado)) {
                  resultado = resultado.toString();
              } else {
                  // Mostra até 6 casas decimais sem arredondar desnecessariamente
                  const str = resultado.toString();
                  resultado = str.length > 8 ? resultado.toFixed(6) : str;
              }
          }
          break;
      default:
          resultado = "Operação inválida";
  }
  
  // Exibição do resultado
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}