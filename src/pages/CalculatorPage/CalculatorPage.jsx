import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import "./CalculatorPage.css"

const CalculatorPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [firstNumber, setFirstNumber] = useState(null);
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState(null);
  const [afterResult, setAfterResult] = useState(false);


  const handleNumber = (newChar) => {
    if (display === '0' || afterResult) {
      setDisplay(newChar);
    }

    else {
      setDisplay(display + newChar);
    }

    setAfterResult(false);
  }

  const handleOperation = (op) => {
    setAfterResult(false);
    setOperation(op);

    if (operation === null) {
      setFirstNumber(parseInt(display));
      setDisplay('0');
    }

    else {
      handleGetResult();
    }
  }

  const handleGetResult = () => {
    setAfterResult(true);

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
          <button className={"top-left-border calc-button calc-button-" + theme} onClick={handlePercentage}>%</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleOperation('expo')}>^</button>
          <button className={"calc-button calc-button-" + theme} onClick={handleClear}>C</button>
          <button className={"top-right-border calc-button calc-button-" + theme} onClick={handleBackspace}>&#8592;</button>
        </div>

        <div> 
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('7')}>7</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('8')}>8</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('9')}>9</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleOperation("div")}>&#247;</button>
        </div>

        <div> 
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('4')}>4</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('5')}>5</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('6')}>6</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleOperation("mul")}>*</button>
        </div>

        <div> 
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('1')}>1</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('2')}>2</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleNumber('3')}>3</button>
          <button className={"calc-button calc-button-" + theme} onClick={() => handleOperation('min')}>-</button>
        </div>

        <div>
          <button className={"bottom-left-border large-button calc-button calc-button-" + theme } onClick={handleGetResult}>=</button>
          <button className={"bottom-right-border large-button calc-button calc-button-" + theme } onClick={() => handleOperation('plus')}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorPage;
