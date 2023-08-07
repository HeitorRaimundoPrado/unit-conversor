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
      <article className={"article article-" + theme}>
        <h1>What is distance? </h1>
        <section>
          <p><span className="tab"/>Physical distance, a cornerstone of our understanding of the universe, serves as a fundamental concept that shapes our perception of space and reality. from ancient philosophers pondering the nature of distance to groundbreaking scientific theories, the exploration of physical distance has captivated the human mind for centuries.</p>
        </section>
        <section>
          <h2>The Concept of Distance</h2>
          <p><span className="tab"/>At its core, physical distance refers to the spatial separation between two points in the three-dimensional world. This measurable quantity has been a subject of fascination and investigation across diverse cultures and eras. The ancient Greeks, for instance, grappled with the concept of distance as they laid the foundation for geometry.</p>
        </section>
        <section>
          <h2>Important Figures in the Study of Distance</h2>
          <p><span className="tab"/>One of the most influential figures in the history of understanding physical distance is Euclid, a mathematician from ancient Greece. His work "Elements" introduced the principles of geometry, including the concept of distance as the shortest path between two points, known as the straight line. Euclidean geometry formed the basis for our intuitive understanding of distance for centuries.</p>
          <p><span className="tab"/>Fast-forward to the 20th century, and Albert Einstein revolutionized our comprehension of distance through his theory of relativity. Einstein's equations introduced a new perspective on space and time, demonstrating that distances can be perceived differently depending on an observer's relative motion and gravitational influence.</p>
        </section>

        <section>
          <h2>Formulas and Measurements</h2>
          <p><span className="tab"/>In Euclidean space, the distance between two points (x1, y1) and (x2, y2) can be calculated using the Pythagorean theorem:</p>
          <br/>
          <p>Distance = <span>&#8730;((x2 - x1))<sup>2</sup> + (y2 - y1)<sup>2</sup>)</span></p>
          <br/>
          <p><span className="tab"/>This formula illustrates the familiar idea of measuring distance as a straight-line segment between points in a Cartesian coordinate system.</p>
        </section>
        <section>
          <h2>Relativity and Beyond</h2>
          <p><span className="tab"/>Einstein's theory of relativity introduced the concept of spacetime, where distances and time intervals are intertwined. In the theory of special relativity, the distance between two events is affected by the relative velocity between observers. This leads to phenomena like time dilation and length contraction, challenging our conventional notions of distance.</p>
          <p><span className="tab"/>General relativity, on the other hand, describes how mass and energy curve spacetime, influencing the path of objects and affecting the perception of distance. The famous equation E=mc² showcases the deep connection between energy, mass, and the fabric of space.</p>
        </section>
        <section>
          <h2>Closing Thoughts</h2>
          <p><span className="tab"/>Physical distance, from the ancient geometric musings of Euclid to the mind-bending revelations of Einstein's relativity, has shaped our understanding of space and reality. Through formulas, theories, and the genius of brilliant minds, we continue to unravel the intricate nature of distance and its role in the universe. As we gaze at the stars or ponder the dimensions of our surroundings, the concept of physical distance continues to inspire awe and curiosity, propelling us to explore the depths of space and the fundamental nature of existence.</p>
        </section>
      </article>
    </div>
  )
}

export default DistancePage;
