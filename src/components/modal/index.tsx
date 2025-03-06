import { useEffect, useState } from "react";
import { ICor } from "../../interfaces/ICor";
import { IVendedor } from "../../interfaces/IVendedor";
import { IVendedores } from "../../interfaces/IVendedores";
import { useCarros } from "../../context/CarrosContext";
import { ModalContainer, ModalStyle } from "./styles";

export default function Modal({ vendedor }: IVendedores) {
  const [emoji, setEmoji] = useState("");
  const { setOpenModal, idCarro } = useCarros();

  function womanEmoji(vendedor: IVendedor): string {
    if (vendedor.corDaPele === ICor.light) {
      return "👩🏻";
    } else if (vendedor.corDaPele === ICor.mediumLight) {
      return "👩🏼";
    } else if (vendedor.corDaPele === ICor.medium) {
      return "👩🏽";
    } else if (vendedor.corDaPele === ICor.mediumDark) {
      return "👩🏾";
    } else if (vendedor.corDaPele === ICor.dark) {
      return "👩🏿";
    } else {
      return "👩";
    }
  }

  function menEmoji(vendedor: IVendedor): string {
    if (vendedor.corDaPele === ICor.light) {
      return "🧔🏻‍♂️";
    } else if (vendedor.corDaPele === ICor.mediumLight) {
      return "🧔🏼‍♂️";
    } else if (vendedor.corDaPele === ICor.medium) {
      return "🧔🏽‍♂️";
    } else if (vendedor.corDaPele === ICor.mediumDark) {
      return "🧔🏾‍♂️";
    } else if (vendedor.corDaPele === ICor.dark) {
      return "🧔🏿‍♂️";
    } else {
      return "🧔‍♂️";
    }
  }

  function verificarGenero(vendedor: IVendedor) {
    if (vendedor.genero === "F") {
      setEmoji(womanEmoji(vendedor));
    } else {
      setEmoji(menEmoji(vendedor));
    }
  }

  useEffect(() => {
    verificarGenero(vendedor);
  }, [vendedor, idCarro]);

  return (
    <>
    <ModalStyle>
      <ModalContainer>
        <h3>Informações do Vendedor</h3>
        <p>
          Nome {emoji}: {vendedor.nome}
        </p>
        <p>E-mail 📧: {vendedor.email}</p>
        <p>Telefone: {vendedor.telefone}</p>
        <button onClick={() => setOpenModal(false)}>Fechar</button>
      </ModalContainer>
    </ModalStyle>
    </>
  );
}
