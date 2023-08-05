import { useContext, useState, useEffect, createRef } from "react";
import { ThemeContext } from '../../App.jsx'
import { UnitSelector } from '../../components/UnitSelector/UnitSelector.jsx'

const DistancePage = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const [inputNumber, setInputNumber] = useState('');
  const [inputSelectorVisible, setInputSelectorVisible] = useState(false);
  const [outputSelectorVisible, setOutputSelectorVisible] = useState(false);
  const [inputUnit, setInputUnit] = useState('m');
  const [outputUnit, setOutputUnit] = useState('m');
  const [inputSelectorX, setInputSelectorX] = useState(0);
  const [inputSelectorY, setInputSelectorY] = useState(0);
  const [outputSelectorX, setOutputSelectorX] = useState(0);
  const [outputSelectorY, setOutputSelectorY] = useState(0);

  const [result, setResult] = useState(null);

  const inputRef = createRef(null);
  const outputRef = createRef(null);

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

  const handleToggleOutputSelectorVisible = (e) => {
    e.stopPropagation()
    if (outputSelectorVisible) {
      setOutputSelectorVisible(false);
    }

    else {
      setOutputSelectorX(e.clientX)
      setOutputSelectorY(e.clientY)
      setOutputSelectorVisible(true);
    }
  }

  const handleToggleInputSelectorVisible = (e) => {
    e.stopPropagation()
    if (inputSelectorVisible) {
      setInputSelectorVisible(false);
    }

    else {

      setInputSelectorX(e.clientX)
      setInputSelectorY(e.clientY)
      setInputSelectorVisible(true);
    }
  }
  
  function handleOutputClick(event) {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setOutputSelectorVisible(false)
      document.removeEventListener("click", handleOutputClick);
    }
  }

  function handleInputClick(event) {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputSelectorVisible(false)
      document.removeEventListener("click", handleInputClick);
    }
  }
  
  useEffect(() => {
    if (inputSelectorVisible) {
      document.addEventListener("click", handleInputClick);
    }
  }, [inputSelectorVisible])

  useEffect(() => {
    if (outputSelectorVisible) {
      document.addEventListener("click", handleOutputClick);
    }
  }, [outputSelectorVisible])

  return (
    <div className="conversion-page">
      <div className={"unit-selection input-unit-selection unit-selection-" + theme}>
        <button className={"button button-" + theme} onClick={handleToggleInputSelectorVisible}>Select Input Unit</button> 
        <div>{inputUnit}</div>
      </div>

      <UnitSelector conversionTable={conversionTable} visible={inputSelectorVisible} setVisible={setInputSelectorVisible} setReturn={setInputUnit} x={inputSelectorX} y={inputSelectorY} extRef={inputRef}/>

      <div className={"unit-selection output-unit-selection unit-selection-" + theme}>
        <button className={"button button-" + theme} onClick={handleToggleOutputSelectorVisible}>Select Output Unit</button>
        <div>{outputUnit}</div>
      </div>

      <UnitSelector conversionTable={conversionTable} visible={outputSelectorVisible} setVisible={setOutputSelectorVisible} setReturn={setOutputUnit} x={outputSelectorX} y={outputSelectorY} extRef={outputRef}/>

      <div className={"last-section"}>
        <input type="text" className={"unit-input unit-input-" + theme} onChange={handleChangeInputNumber}/>
        <button className={"convert-button button button-" + theme} onClick={handleConvert}>Convert</button>
      </div>

      <div className={"display-result display-result-" + theme}>{ result && result }</div>
    </div>
  )
}

export default DistancePage;
