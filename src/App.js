import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { useState } from "react";
import { ThemeContext } from "@emotion/react";

function App() {
  const [theme, setTeme] = useState({
    backgroud: "ffffff",
    text: "000000",
    glow: "red",
  });
  const context = {
    theme,
    setLight: () => {
      setTeme({
        backgroud: "ffffff",
        text: "000000",
        glow: "#fcc603",
      });
    },
    setDark: () => {
      setTeme({
        backgroud: "000000",
        text: "ffffff",
        glow: "#03fc90",
      });
    },
  };
  return (
    <div className="App">
      <ThemeContext value={context}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ThemeContext>
    </div>
  );
}

export default App;
