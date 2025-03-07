import "./App.css";
import NavBar from "./components/navbar";
import Cars from "./components/cars";
import { CarrosProvider } from "./context/CarrosContext";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
