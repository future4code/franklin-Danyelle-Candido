import { ThemeProvider } from "@mui/material";
import { HomePage} from "./components/HomePage";

function App() {
  return (
    <ThemeProvider >
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
