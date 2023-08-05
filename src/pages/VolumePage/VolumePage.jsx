import { useContext, useState } from "react";
import { ThemeContext } from '../../App.jsx'
import { UnitSelector } from '../../components/UnitSelector/UnitSelector.jsx'


const VolumePage = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const [inputNumber, setInputNumber] = useState('');
  const [inputSelectorVisible, setInputSelectorVisible] = useState(false);
  const [outputSelectorVisible, setOutputSelectorVisible] = useState(false);
  const [inputUnit, setInputUnit] = useState('L');
  const [outputUnit, setOutputUnit] = useState('L');
  const [result, setResult] = useState(null);
  const [inputSelectorX, setInputSelectorX] = useState(0);
  const [inputSelectorY, setInputSelectorY] = useState(0);
  const [outputSelectorX, setOutputSelectorX] = useState(0);
  const [outputSelectorY, setOutputSelectorY] = useState(0);

  const conversionTable = {
    'L': 1,
    'dm^3': 1,
    'm^3': 0.001,
    'oz': 33.814,
    'gallon': 0.264172
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
      setOutputSelectorX(e.clientX)
      setOutputSelectorY(e.clientY)
      setOutputSelectorVisible(true);
    }
  }

  const handleToggleInputSelectorVisible = () => {
    if (inputSelectorVisible) {
      setInputSelectorVisible(false);
    }

    else {
      setInputSelectorX(e.clientX)
      setInputSelectorY(e.clientY)
      setInputSelectorVisible(true);
    }
  }

  return (
    <div className="conversion-page">
      <div className={"unit-selection input-unit-selection unit-selection-" + theme}>
        <button className={"button button-" + theme} onClick={handleToggleInputSelectorVisible}>Select Input Unit</button> 
        <div>{inputUnit}</div>
      </div>

      <UnitSelector conversionTable={conversionTable} visible={inputSelectorVisible} setReturn={setInputUnit}/>

      <div className={"unit-selection output-unit-selection unit-selection-" + theme}>
        <button className={"button button-" + theme} onClick={handleToggleOutputSelectorVisible}>Select Output Unit</button>
        <div>{outputUnit}</div>
      </div>


      <UnitSelector conversionTable={conversionTable} visible={outputSelectorVisible} setReturn={setOutputUnit}/>


      <div className={"last-section"}>
        <input type="text" className={"unit-input unit-input-" + theme} onChange={handleChangeInputNumber}/>
        <button className={"convert-button button button-" + theme} onClick={handleConvert}>Convert</button>
      </div>

      <div className={"display-result display-result-" + theme}>{ result && result }</div>
    </div>
  )
}

export default VolumePage;
