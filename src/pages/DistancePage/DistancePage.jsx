import { useContext, useState, useEffect, createRef } from "react";
import { ThemeContext } from '../../App.jsx'
import { UnitSelector } from '../../components/UnitSelector/UnitSelector.jsx'

const DistancePage = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const [inputNumber, setInputNumber] = useState(0);
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
    if (!isNaN(parseInt(e.target.value))) {
      setInputNumber(parseInt(e.target.value))
    }
  }

  const handleConvert = () => {
    setResult(inputNumber / conversionTable[inputUnit] * conversionTable[outputUnit]);
  }

  return (
    <div className="conversion-page">
      <div className={"unit-selection input-unit-selection unit-selection-" + theme}>
        <label className={"label-" + theme} htmlFor="input-selector">Select Input Unit</label>
        <UnitSelector extId={"input-selector"} conversionTable={conversionTable} setReturn={setInputUnit}/>
      </div>


      <div className={"unit-selection output-unit-selection unit-selection-" + theme}>
        <label className={"label-" + theme} htmlFor="output-selector">Select Output Unit</label>
        <UnitSelector extId={"output-selector"} conversionTable={conversionTable} setReturn={setOutputUnit}/>
      </div>


      <div className={"last-section"}>
        <input type="number" className={"unit-input unit-input-" + theme} value={inputNumber} onChange={handleChangeInputNumber}/>
        <button className={"convert-button button button-" + theme} onClick={handleConvert}>Convert</button>
      </div>

      <div className={"display-result display-result-" + theme}>{ result && result }</div>
    </div>
  )
}

export default DistancePage;
