import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./UnitSelector.css"

export const UnitSelector = (props) => {
  const { extId, conversionTable, setReturn } = props;
  const {theme, setTheme} = useContext(ThemeContext)

  const lookup = {
    0: "top",
    [Object.keys(conversionTable).length-1]: "bottom"
  }
  return (
    <select onChange={(e) => setReturn(e.target.value)} id={extId} className={"unit-selector unit-selector-" + theme} >
      {Object.keys(conversionTable).map((unit, idx) => <option value={unit}>{unit}</option>)}
    </select>
  )
}
