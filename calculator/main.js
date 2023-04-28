function displayInput(number) {
    document.getElementById('result').value += number;
}

function clearResultWindow() {
    document.getElementById('result').value = '';
}

function calculate() {
    let calculation = document.getElementById('result').value;
    let result = eval(calculation);
    document.getElementById('result').innerHTML = result;
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(parseInt(key))) {
      displayInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      displayInput(key);
    } else if (key === '.' || key === ',') {
      displayInput('.');
    } else if (key === 'Enter') {
      calculate();
    }
  });