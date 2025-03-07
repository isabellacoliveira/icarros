import { createContext, ReactNode, useContext, useState } from "react";
import { ICarro } from "../interfaces/ICarro";
import { Api } from "../service/api";

export function useCarros() {
  const contextoCarros = useContext(CarrosContext);
  return contextoCarros;
}

interface CarrosProviderProps {
  children: ReactNode;
}

export interface CarrosContext {
  buscaTermo: string;
  setBuscaTermo: React.Dispatch<React.SetStateAction<string>>;  
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>; 
  idCarro: string;
  setIdCarro: React.Dispatch<React.SetStateAction<string>>; 
  buscaCarros: () => void;
  favoritarCarro: (carroId: string) => void;
  todosOsCarros: ICarro[];
  setTodosOsCarros: React.Dispatch<React.SetStateAction<ICarro[]>>;
}

const CarrosContext = createContext({} as CarrosContext);
CarrosContext.displayName = "Carros Context";

export function CarrosProvider({ children }: CarrosProviderProps) {
  const [buscaTermo, setBuscaTermo] = useState<string>(""); 
  const [openModal, setOpenModal] = useState<boolean>(false); 
  const [idCarro, setIdCarro] = useState<string>("0"); 
  const [todosOsCarros, setTodosOsCarros] = useState<ICarro[]>([]);

  async function buscaCarros() {
    try {
      const resposta = await Api.get<ICarro[]>("/carros");
      setTodosOsCarros(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
    }
  }

  async function favoritarCarro(carroId: string) {
    try {
      const carro = todosOsCarros.find((c) => c.id === carroId);
      
      if (!carro) {
        console.error("Carro não encontrado.");
        return;
      }
  
      const carroAtualizado = { ...carro, ehFavorito: !carro.ehFavorito };
  
      const resposta = await Api.put(`/carros/${carroId}`, carroAtualizado);
  
      setTodosOsCarros((carrosAnteriores) =>
        carrosAnteriores.map((c) =>
          c.id === carroId ? carroAtualizado : c
        )
      );
  
    } catch (erro) {
      console.error("Erro ao favoritar o carro:", erro);
    }
  }
  
  function atualizarCarrosNoEstado(carroAtualizado: ICarro) {
    setTodosOsCarros((carrosAnteriores) =>
      carrosAnteriores.map((c) =>
        c.id === carroAtualizado.id ? carroAtualizado : c
      )
    );
  }
  return (
    <CarrosContext.Provider
      value={{
        buscaTermo,
        setBuscaTermo, 
        buscaCarros,
        todosOsCarros,
        setTodosOsCarros,
        openModal, 
        setOpenModal, 
        idCarro, 
        setIdCarro,
        favoritarCarro,
      }}
    >
      {children}
    </CarrosContext.Provider>
  );
}
