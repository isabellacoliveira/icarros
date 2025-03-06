import { useEffect, useState } from "react";
import { useCarros } from "../../context/CarrosContext";
import { ICarro } from "../../interfaces/ICarro";
import { CarsContainer, Infos, NotFoundImage, NothingFinded } from "./styles";
import CarInfo from "../car-info";

export default function Cars() {
  const { buscaTermo, buscaCarros, todosOsCarros } = useCarros();
  const [filteredCarros, setFilteredCarros] = useState<ICarro[]>([]);

  useEffect(() => {
    if (todosOsCarros.length === 0) {
      buscaCarros();
    }
  }, [todosOsCarros, buscaCarros]);

  useEffect(() => {
    console.log(todosOsCarros, "Todos os carros");
    if (buscaTermo === "") {
      setFilteredCarros(todosOsCarros);
    } else {
      const filtered = todosOsCarros.filter((carro) =>
        carro.nomeCarro.toLowerCase().includes(buscaTermo.toLowerCase())
      );
      console.log(filtered, "filtro");
      setFilteredCarros(filtered);
    }
  }, [todosOsCarros, buscaTermo]);
  

  return (
    <>
      {filteredCarros.length === 0 ? (
        <Infos role="status" aria-live="polite">
          <NothingFinded>Nenhum carro foi encontrado.</NothingFinded>
          <NotFoundImage
            src="https://i.gifer.com/VdgG.gif"
            alt="Imagem ilustrativa de erro na busca"
          />
        </Infos>
      ) : (
        <CarsContainer>
          {filteredCarros.map((item) => (
            <CarInfo carro={item} key={item.id} />
          ))}
        </CarsContainer>
      )}
    </>
  );
}
