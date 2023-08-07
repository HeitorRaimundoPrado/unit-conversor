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
    if (!isNaN(parseInt(e.target.value))) {
      setInputNumber(parseInt(e.target.value));
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

      <article className={"article article-" + theme}>
        <h1>Exploring Volume: Unraveling the Essence of Space Occupancy</h1>
        <p><span class="tab"></span>Volume, a fundamental concept in geometry and physics, serves as a crucial measurement that allows us to quantify the amount of space occupied by an object. From simple geometric shapes to complex structures, the concept of volume transcends disciplines and provides insight into the nature of objects and their spatial arrangements.</p>

        <h2>The Concept of Volume</h2>
        <p><span class="tab"></span>Volume represents the three-dimensional extent or capacity of an object. It provides us with a quantitative measure of how much space an object occupies. Whether dealing with a simple cube, a liquid in a container, or even the vastness of celestial bodies, the concept of volume plays a pivotal role in our understanding of the physical world.</p>

        <h2>Formulas for Calculating Volume</h2>
        <p><span class="tab"></span>Various formulas exist for calculating the volume of different geometric shapes. Some of the most commonly used formulas include:</p>

        <section>
          <h3>Rectangular Prism</h3>
          <p><span class="tab"></span>For a rectangular prism with length (L), width (W), and height (H), the volume is given by:</p>
          <p class="formula"><span class="tab"></span>Volume = L × W × H</p>
        </section>

        <section>
          <h3>Sphere</h3>
          <p><span class="tab"></span>The volume of a sphere with radius (r) can be calculated using the formula:</p>
          <p class="formula"><span class="tab"></span>Volume = 4/3 × π × r <sup>3</sup></p>
        </section>

        <section>
          <h3>Cylinder</h3>
          <p><span class="tab"></span>For a cylinder with base radius (r) and height (h), the volume can be found with:</p>
          <p class="formula"><span class="tab"></span>Volume = π × r <sup>2</sup> × h</p>
        </section>

        <section>
          <h3>Complex Structures</h3>
          <p><span class="tab"></span>Calculating the volume of irregular or complex structures often involves integration techniques. This is particularly common in physics and engineering when dealing with intricate geometries.</p>
        </section>

        <h2>Applications in Science and Engineering</h2>
        <p><span class="tab"></span>The concept of volume finds applications in a myriad of fields. Architects use volume to design functional spaces, while physicists employ it to understand the behavior of gases, liquids, and solids. Engineers determine the capacities of containers, design fluid systems, and analyze the performance of mechanical components by considering volume.</p>

        <h2>Volume in the Natural World</h2>
        <p><span class="tab"></span>From the microscopic realm of cells to the grandeur of celestial bodies, volume is a fundamental attribute of the natural world. It determines the size of organisms, the arrangement of molecules, and the properties of stars and planets. Understanding volume is essential for comprehending the intricacies of nature and the universe.</p>

        <h2>Closing Thoughts</h2>
        <p><span class="tab"></span>Volume, a key component of geometry and science, provides a quantitative measure of space occupancy. From simple geometric shapes to complex structures, the concept of volume allows us to navigate the physical world and explore the mysteries of the universe. Through formulas, calculations, and real-world applications, volume remains a timeless concept that bridges mathematics, science, and our perception of space.</p>
      </article>
    </div>
  )
}

export default VolumePage;
