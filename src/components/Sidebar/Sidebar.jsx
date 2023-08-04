import { useContext } from "react";
import { CurPageContext, SidebarContext, ThemeContext, pages } from "../../App";

const Sidebar = () => {
  const {sidebarVisible, setSidebarVisible} = useContext(SidebarContext);
  const {theme, setTheme} = useContext(ThemeContext)
  const {curPage, setCurPage} = useContext(CurPageContext)

  return (
    <div className={"sidebar sidebar-" + theme} style={{display: sidebarVisible ? "none" : "flex"}}>
      <div className={"sidebar-content sidebar-content-" + theme}>
        {Object.keys(pages).map((page) => {
          return <button key={page} onClick={() => setCurPage(page)}>{page}</button>
        })}
      </div>
    </div>
  )
}

export default Sidebar;
