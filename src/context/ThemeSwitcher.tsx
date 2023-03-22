import React, { useContext } from "react"
import ThemeContext from "./ThemeContext"
import * as C from './styled'

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <C.Button>
      {/* <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className={theme === "dark" ? "button-dark" : "button-light"}
      >
      Change The Theme
      </button> */}

      {/* <input
        type="checkbox"
        onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
        id="darkmode-toggle"
       />
       <label htmlFor="darkmode-toggle"/> */}

       <span className="theme__toggle-wrap">
        <input
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          type="checkbox"
          className="theme__toggle"
          id="theme"
          role="switch"
          name="theme"
          value="dark"
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
    </C.Button>
    
    // <C.Button
    //   onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    //   className="button-theme"
    // >
    //   Change The Theme
    // </C.Button>
    
  )
}

export default ThemeSwitcher