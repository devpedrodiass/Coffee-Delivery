import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CoffeesContextProvider } from "./contexts/CoffeeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
