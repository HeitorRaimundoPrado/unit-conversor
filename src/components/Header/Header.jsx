import { useContext } from "react";
import { SidebarContext, ThemeContext } from "../../App";

const Header = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const {sidebarVisible, setSidebarVisible} = useContext(SidebarContext);

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    
    else {
      setTheme("light");
    }
  }

  const handleToggleSidebar = () => {
    if (sidebarVisible) {
      setSidebarVisible(false);
    }

    else {
      setSidebarVisible(true);
    }
  }

  return (
    <nav>
      <button onClick={handleSwitchTheme}> Change Theme</button>
      <button onClick={handleToggleSidebar}><img src="/bars-solid.svg" alt="menu"/></button>

    </nav>
  )
}

export default Header;
