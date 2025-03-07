import { useEffect, useState } from "react";
import { useCarros } from "../../context/CarrosContext";
import { ICarro } from "../../interfaces/ICarro";
import { CarsContainer, Infos, NotFoundImage, NothingFinded } from "./styles";
import CarInfo from "../car-info";
import { gifNotFound } from "../../constantes/image";

export default function Cars() {
  const { buscaTermo, buscaCarros, todosOsCarros } = useCarros();
  const [filteredCarros, setFilteredCarros] = useState<ICarro[]>([]);

  useEffect(() => {
    if (todosOsCarros.length === 0) {
      buscaCarros();
    }
  }, [todosOsCarros, buscaCarros]);

  useEffect(() => {
    if (buscaTermo === "") {
      setFilteredCarros(todosOsCarros);
    } else {
      const filtered = todosOsCarros.filter((carro) =>
        carro.marca.toLowerCase().includes(buscaTermo.toLowerCase()) ||
        carro.preco.toString().includes(buscaTermo.toLowerCase()) ||
        carro.kmsRodados.toLowerCase().includes(buscaTermo.toLowerCase()) ||
        carro.nomeCarro.toLowerCase().includes(buscaTermo.toLowerCase()) 
      );
      setFilteredCarros(filtered);
    }

  }, [todosOsCarros, buscaTermo]);
  

  return (
    <>
      {filteredCarros.length === 0 ? (
        <Infos role="status" aria-live="polite">
          <NothingFinded>Nenhum carro foi encontrado.</NothingFinded>
          <NotFoundImage
            src={gifNotFound}
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
