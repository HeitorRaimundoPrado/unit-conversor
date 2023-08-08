import { useContext } from "react";
import { SidebarContext, ThemeContext, pages } from "../../App";

import './Sidebar.css'

const Sidebar = () => {
  const {sidebarVisible, setSidebarVisible} = useContext(SidebarContext);
  const {theme, setTheme} = useContext(ThemeContext)

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
        {pages.map((page) => {
          return <button key={page}><a href={"/" + page}>{page}</a></button>
        })}
        <button onClick={handleSwitchTheme}> Change Theme</button>
      </div>
    </div>
  )
}

export default Sidebar;
