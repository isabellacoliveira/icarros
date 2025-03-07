import { useEffect, useState } from "react";
import { useCarros } from "../../context/CarrosContext";
import CarInfo from "../car-info";
import { CarsContainer } from "./styles";

export default function FavoriteCars() {
  const { todosOsCarros, buscaCarros } = useCarros();
  const [carrosFiltrados, setCarrosFiltrados] = useState(todosOsCarros);

  useEffect(() => {
    if (todosOsCarros.length === 0) {
        buscaCarros();
      }

    if (todosOsCarros.length > 0) {
      const filtered = todosOsCarros.filter((carro) => carro.ehFavorito === true);
      setCarrosFiltrados(filtered);
    }
  }, [todosOsCarros, buscaCarros]);

  return (
    <CarsContainer>
       {carrosFiltrados.length > 0 ? (
        carrosFiltrados.map((item) => (
          <CarInfo carro={item} key={item.id} />
        ))
      ) : (
        <p>Nenhum carro favorito encontrado.</p>
      )}
    </CarsContainer>
  );
}
