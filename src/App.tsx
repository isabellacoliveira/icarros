import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import CarCard from './components/car-card';
import Cars from './components/cars';
import { CarrosProvider } from './context/CarrosContext';
import Modal from './components/modal';

function App() {
  return (
    <>
      <CarrosProvider>
        <NavBar />
        <Cars />
      </CarrosProvider>
    </>
  );
}

export default App;
