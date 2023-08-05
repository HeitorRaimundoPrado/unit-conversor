import { useContext } from "react";
import { SidebarContext, ThemeContext } from "../../App";
import "./Header.css"

const Header = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const {sidebarVisible, setSidebarVisible} = useContext(SidebarContext);

  const handleToggleSidebar = () => {
    if (sidebarVisible) {
      setSidebarVisible(false);
    }

    else {
      setSidebarVisible(true);
    }
  }

  return (
    <header>
      <nav className={"nav nav-" + theme}>
        <button onClick={handleToggleSidebar}><img width="30px" height="30px" src="/bars-solid.svg" alt="menu"/></button>
      </nav>
    </header>
  )
}

export default Header;
