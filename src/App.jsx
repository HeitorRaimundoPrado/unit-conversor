import { useState, createContext } from 'react'
import Header from "./components/Header/Header.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DistancePage from "./pages/DistancePage/DistancePage.jsx"
import VolumePage from "./pages/VolumePage/VolumePage.jsx"
import CalculatorPage from "./pages/CalculatorPage/CalculatorPage.jsx"

export const CurPageContext = createContext(null);
export const ThemeContext = createContext(null);
export const SidebarContext = createContext(null);

export const pages = {
    'distance': <DistancePage/>,
    'volume': <VolumePage/>,
    'calc': <CalculatorPage/>
}

function App() {
  const [curPage, setCurPage] = useState('distance');
  const [theme, setTheme] = useState('light');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <CurPageContext.Provider value={{curPage, setCurPage}}>
          <SidebarContext.Provider value={{sidebarVisible, setSidebarVisible}}>
            <div className={"app app-" + theme}>
              <Header/>
              <Sidebar/>
              {pages[curPage]}
              <Footer/>
            </div>
          </SidebarContext.Provider>
        </CurPageContext.Provider>
      </ThemeContext.Provider> 
    </>
  )
}

export default App
