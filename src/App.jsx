import { useState, createContext, useEffect } from 'react'
import Header from "./components/Header/Header.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DistancePage from "./pages/DistancePage/DistancePage.jsx"
import VolumePage from "./pages/VolumePage/VolumePage.jsx"
import CalculatorPage from "./pages/CalculatorPage/CalculatorPage.jsx"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './ConversionPages.css'

export const CurPageContext = createContext(null);
export const ThemeContext = createContext(null);
export const SidebarContext = createContext(null);

export const pages = [
  "distance",
  "volume",
  "calculator"
]


function App() {
  const [theme, setTheme] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("theme"))
    if (localStorage.getItem("theme") !== null) {
      setTheme(localStorage.getItem("theme"))
    }

    else {
      setTheme("light");
    }
  }, [])

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("theme", theme);
    }
  }, [theme])

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <SidebarContext.Provider value={{sidebarVisible, setSidebarVisible}}>
          <div className={"app app-" + theme}>
            <Header/>
            <div className="content">
              <BrowserRouter>
                <Sidebar/>
                <Routes>
                  <Route path="/distance" element={<DistancePage/>}/>
                  <Route path="/volume" element={<VolumePage/>}/>
                  <Route path="/calculator" element={<CalculatorPage/>}/>
                </Routes>
              </BrowserRouter>
            </div>
            <Footer/>
          </div>
        </SidebarContext.Provider>
      </ThemeContext.Provider> 
    </>
  )
}

export default App
