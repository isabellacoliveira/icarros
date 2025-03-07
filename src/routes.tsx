import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CarrosProvider } from "./context/CarrosContext";
import NavBar from "./components/navbar";
import Cars from "./components/cars";
import FavoriteCars from "./components/favorite-cars";

function AppRoutes() {
  return (
    <Router> 
      <CarrosProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/favoritos" element={<FavoriteCars />} />
        </Routes>
      </CarrosProvider>
    </Router>
  );
}

export default AppRoutes;
