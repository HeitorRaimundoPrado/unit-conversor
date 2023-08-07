import { useContext, useState, useEffect, createRef } from "react";
import { ThemeContext } from '../../App.jsx'
import { UnitSelector } from '../../components/UnitSelector/UnitSelector.jsx'

const TemplateConversion = (props) => {
  const {theme, setTheme} = useContext(ThemeContext);

  const [inputNumber, setInputNumber] = useState(0);
  const [inputUnit, setInputUnit] = useState('m');
  const [outputUnit, setOutputUnit] = useState('m');
  const [result, setResult] = useState(null);
  const [inputSearchArray, setInputSearchArray] = useState([]);
  const [outputSearchArray, setOutputSearchArray] = useState([]);

  const inputDropdownRef = createRef(null);
  const outputDropdownRef = createRef(null);


  const {conversionTable} = props;

  const handleChangeInputNumber = (e) => {
    if (!isNaN(parseInt(e.target.value))) {
      setInputNumber(parseInt(e.target.value))
    }
  }

  const handleConvert = () => {
    setResult(inputNumber / conversionTable[inputUnit] * conversionTable[outputUnit]);
  }

  const handleInputSearchChange = (e) => {
    let conversionKeys = Object.keys(conversionTable);
    setInputSearchArray(conversionKeys.filter((unit) => unit.match(e.target.value) && e.target.value !== ""));
  }

  const handleOutputSearchChange = (e) => {
    let conversionKeys = Object.keys(conversionTable);
    setOutputSearchArray(conversionKeys.filter((unit) => unit.match(e.target.value) && e.target.value !== ""));
  }

  return (
    <div className="conversion-page">
      <div>
        <div className={"unit-selection input-unit-selection unit-selection-" + theme}>
          <label className={"label-" + theme} htmlFor="input-selector">Select Input Unit</label>
          <UnitSelector extId={"input-selector"} conversionTable={conversionTable} val={inputUnit} setReturn={setInputUnit}/>
        </div>


        <div className={"unit-selection output-unit-selection unit-selection-" + theme}>
          <label className={"label-" + theme} htmlFor="output-selector">Select Output Unit</label>
          <UnitSelector extId={"output-selector"} conversionTable={conversionTable} val={outputUnit} setReturn={setOutputUnit}/>
        </div>


        <div className={"last-section"}>
          <input type="number" className={"unit-input unit-input-" + theme} value={inputNumber} onChange={handleChangeInputNumber}/>
          <button className={"convert-button button button-" + theme} onClick={handleConvert}>Convert</button>
        </div>
      </div>

      <div className={"display-result display-result-" + theme}>{ result && result }</div>

      <div className="search-areas">
        <div className={"search-unit search-unit-" + theme}>
          <label htmlFor="search-unit">Search for input unit</label>
          <div className="dropdown">
            <input onChange={handleInputSearchChange} id="search-unit" type="text"/>
            <div className={"dropdown-list dropdown-list-" + theme} ref={inputDropdownRef}>
             {inputSearchArray.map((unit, idx) => {
                return <button onClick={() => setInputUnit(unit)} key={idx} className={"dropdown-button" + (idx === 0 ? "-top" : "") + (idx === inputSearchArray.length - 1 ? "-bottom" : "")}>{unit}</button>
              })}
            </div>
          </div>
        </div>

        <div className={"search-unit search-unit-" + theme}>
          <label htmlFor="search-unit">Search for output unit</label>
          <div className="dropdown">
            <input onChange={handleOutputSearchChange} type="text" id="search-unit"/>
            <div className={"dropdown-list dropdown-list-" + theme} ref={outputDropdownRef}>
              {outputSearchArray.map((unit, idx) => {
                return <button onClick={() => setInputUnit(unit)} key={idx} className={"dropdown-button" + (idx === 0 ? "-top" : "") + (idx === outputSearchArray.length - 1 ? "-bottom" : "")}>{unit}</button>
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TemplateConversion;
