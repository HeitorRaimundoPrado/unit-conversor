import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./UnitSelector.css"

export const UnitSelector = (props) => {
  const { conversionTable, visible, setVisible, setReturn, x, y } = props;
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className={"unit-selector unit-selector-" + theme} style={{display: visible ? 'flex' : 'none', position: 'absolute', top: y, left: x}}>
      {Object.keys(conversionTable).map((unit) => { 
        return <button onClick={() => {
          setReturn(unit);
          setVisible(false);
        }}
        >{unit}</button>
      })}
    </div>
  )
}
