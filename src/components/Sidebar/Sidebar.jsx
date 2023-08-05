import { useContext } from "react";
import { CurPageContext, SidebarContext, ThemeContext, pages } from "../../App";
import './Sidebar.css'

const Sidebar = () => {
  const {sidebarVisible, setSidebarVisible} = useContext(SidebarContext);
  const {theme, setTheme} = useContext(ThemeContext)
  const {curPage, setCurPage} = useContext(CurPageContext)

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    
    else {
      setTheme("light");
    }
  }

  return (
    <div className={"sidebar sidebar-" + theme} style={{display: sidebarVisible ? "flex" : "none"}}>
      <div className={"sidebar-content sidebar-content-" + theme}>
        <button onClick={() => setSidebarVisible(false)}>Close</button>
        {Object.keys(pages).map((page) => {
          return <button key={page} onClick={() => setCurPage(page)}>{page}</button>
        })}
        <button onClick={handleSwitchTheme}> Change Theme</button>
      </div>
    </div>
  )
}

export default Sidebar;
