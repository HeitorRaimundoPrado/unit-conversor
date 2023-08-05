import { useContext, useRef, useState, useEffect } from "react";
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

  const inputRef = useRef(null);
  const outputRef = useRef(null);

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

  const handleToggleOutputSelectorVisible = (e) => {
    e.stopPropagation();
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
    e.stopPropagation();
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

export default VolumePage;
