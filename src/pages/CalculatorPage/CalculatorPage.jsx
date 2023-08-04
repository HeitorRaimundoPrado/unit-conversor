import { useContext, useState } from "react";
import { ThemeContext } from "../../App";

const CalculatorPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [firstNumber, setFirstNumber] = useState(null);
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState(null);


  const handleNumber = (newChar) => {
    if (display === '0') {
      setDisplay(newChar);
    }

    else {
      setDisplay(display + newChar);
    }
  }

  const handleOperation = (op) => {
    if (operation === null) {
      setOperation(op);
      setFirstNumber(parseInt(display));
      setDisplay('0');
    }

    else {
      handleGetResult();
    }
  }

  const handleGetResult = () => {
    const secondNumber = parseInt(display);
    let result = null;
    
    switch (operation) {
      case 'div':
        result = firstNumber / secondNumber;
        break;

      case 'mul':
        result = firstNumber * secondNumber;
        break;

      case 'min':
        result = firstNumber - secondNumber;
        break;
      
      case 'plus':
        result = firstNumber + secondNumber;
        break;

      case 'expo':
        result = firstNumber ** secondNumber;
    }

    setFirstNumber(result);
    setOperation(null);
    setDisplay(String(result));
  }

  const handleClear = () => {
    setFirstNumber(0);
    setDisplay('0');
    setOperation(null);
  }
  
  const handlePercentage = () => {
    setFirstNumber(firstNumber / 100);
  }

  const handleBackspace = () => {
    setDisplay(display.replace(/.$/, ''));
  }

  return (
    <div className={"calculator-page calculator-page-" + theme}>
      <div className={"display display-" + theme}> {display} </div>
      <div className={"calc-buttons calc-buttons" + theme}>
        <div> 
          <button onClick={handlePercentage}>%</button>
          <button onClick={() => handleOperation('expo')}>^</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleBackspace}>backspace</button>
        </div>

        <div> 
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <button onClick={() => handleOperation("div")}>&#247;</button>
        </div>

        <div> 
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <button onClick={() => handleOperation("mul")}>*</button>
        </div>

        <div> 
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <button onClick={() => handleOperation('min')}>-</button>
        </div>

        <div>
          <button onClick={handleGetResult}>=</button>
          <button onClick={() => handleOperation('plus')}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorPage;
