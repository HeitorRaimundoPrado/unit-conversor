import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./UnitSelector.css"

export const UnitSelector = (props) => {
  const { extId, conversionTable, val, setReturn } = props;
  const {theme, setTheme} = useContext(ThemeContext)


  return (
    <select value={val} onChange={(e) => setReturn(e.target.value)} id={extId} className={"unit-selector unit-selector-" + theme} >
      {Object.keys(conversionTable).map((unit, idx) => <option value={unit}>{unit}</option>)}
    </select>
  )
}
