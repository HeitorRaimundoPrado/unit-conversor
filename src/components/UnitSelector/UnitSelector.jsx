export const UnitSelector = (props) => {
  const { conversionTable, visible, setReturn } = props;

  return (
    <div style={{display: visible ? 'flex' : 'none'}}>
      {Object.keys(conversionTable).map((unit) => { 
        return <button onClick={() => setReturn(unit)}>{unit}</button>
      })}
    </div>
  )
}
