import { useContext, useState } from "react";
import { ThemeContext } from '../../App.jsx'
import { UnitSelector } from '../../components/UnitSelector/UnitSelector.jsx'

const DistancePage = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const [inputNumber, setInputNumber] = useState('');
  const [inputSelectorVisible, setInputSelectorVisible] = useState(false);
  const [outputSelectorVisible, setOutputSelectorVisible] = useState(false);
  const [inputUnit, setInputUnit] = useState('m');
  const [outputUnit, setOutputUnit] = useState('m');
  const [result, setResult] = useState(null);

  const conversionTable = {
    'yd': 1.09361,
    'm': 1,
    'km': 0.001,
    'cm': 100,
    'mm': 1000,
    'mi': 0.000621371
  }

  const handleChangeInputNumber = (e) => {
    setInputNumber(e.target.value)
  }


  const handleConvert = () => {
    setResult(inputNumber / conversionTable[inputUnit] * conversionTable[outputUnit]);
  }

  const handleToggleOutputSelectorVisible = () => {
    if (outputSelectorVisible) {
      setOutputSelectorVisible(false);
    }

    else {
      setOutputSelectorVisible(true);
    }
  }

  const handleToggleInputSelectorVisible = () => {
    if (inputSelectorVisible) {
      setInputSelectorVisible(false);
    }

    else {
      setInputSelectorVisible(true);
    }
  }

  return (
    <div>
      <button onClick={handleToggleInputSelectorVisible}>Select Input Unit</button> 
      <div>{inputUnit}</div>
      <UnitSelector conversionTable={conversionTable} visible={inputSelectorVisible} setReturn={setInputUnit}/>

      <input type="text" className={"unit-input unit-input-" + theme} onChange={handleChangeInputNumber}/>

      <button onClick={handleToggleOutputSelectorVisible}>Select Output Unit</button>
      <div>{outputUnit}</div>
      <UnitSelector conversionTable={conversionTable} visible={outputSelectorVisible} setReturn={setOutputUnit}/>


      <button onClick={handleConvert}>Convert</button>

      <div className={"display-result display-result-" + theme}>{ result && result }</div>
    </div>
  )
}

export default DistancePage;
