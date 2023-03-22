import React from "react"

interface IContext {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }

const ThemeContext = React.createContext<IContext>({
  theme: "light",
  setTheme: () => {},
})



export default ThemeContext