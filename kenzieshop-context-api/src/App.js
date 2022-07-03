import { ThemeProvider } from "@mui/material";
import "./App.css";
import Routes from "./routes";
import GlobalStyle, { theme } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
