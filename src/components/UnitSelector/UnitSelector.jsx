import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./UnitSelector.css"

export const UnitSelector = (props) => {
  const { conversionTable, visible, setVisible, setReturn, x, y, extRef } = props;
  const {theme, setTheme} = useContext(ThemeContext)

  const lookup = {
    0: "top",
    [Object.keys(conversionTable).length-1]: "bottom"
  }
  return (
    <div className={"unit-selector unit-selector-" + theme} style={{display: visible ? 'flex' : 'none', position: 'absolute', top: y, left: x}} ref={extRef}>
      {Object.keys(conversionTable).map((unit, idx) => { 
        return <button key={idx} className={"unit-select-button-" + lookup[idx]} onClick={() => {
          setReturn(unit);
          setVisible(false);
        }}
        >{unit}</button>
      })}
    </div>
  )
}
