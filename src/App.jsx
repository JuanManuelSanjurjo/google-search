import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Rutas from "./components/Rutas"
import { ResultContextProvider } from "./context/ResultContext"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <ResultContextProvider>
    <div className={darkTheme ? "dark" : "light"}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darktheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Rutas />
          <Footer />
        </div>
    </div>
    </ResultContextProvider>
  )
}

export default App
