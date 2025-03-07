import { useEffect, useState } from "react";
import { ICarros } from "../../interfaces/ICarros";
import {
  Card,
  CardBody,
  CardImage,
  CardTextDescription,
  CardTitle,
  Content,
  CustomButton,
  EllipsisLink,
  HeartIcon,
  Informations,
} from "./styles";
import { useCarros } from "../../context/CarrosContext";
import { heartBlack, heartWhite } from "../../constantes/image";

export default function CarCard({ carro }: ICarros) {
  const { setOpenModal, setIdCarro, favoritarCarro } = useCarros();  

  function getModalID(){
    setIdCarro(carro.id)
    setOpenModal(true); 
  }

  function favoritar(carroId: string){
    favoritarCarro(carroId)
  }

  return (
    <Card role="region" aria-labelledby={`car-title-${carro.id}`} tabIndex={0}>
      <CardImage
        src={carro.fotoCarro}
        alt={`Foto do carro ${carro.nomeCarro}`}
      />
      <CardBody>
        <CardTitle id={`car-title-${carro.id}`}>
          {carro.marca} - {carro.nomeCarro}
        </CardTitle>
        <Content>
          <CardTextDescription>
            {carro.detalhe}
            {carro.ehAutomatico && "Automático"}
          </CardTextDescription>
          <HeartIcon
            src={
              carro.ehFavorito
                ? heartBlack
                : heartWhite
            }
            onClick={() => favoritar(carro.id)}
            alt={carro.ehFavorito ? "Favorito" : "Não favorito"}
            role="img"
          />
        </Content>
        <p>R$ {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(carro.preco)}</p>
        <Informations>
          <div>
            <EllipsisLink
              href={carro.linkLoja}
              aria-label={`Visitar loja para ${carro.nomeCarro}`}
            >
              LOCALIZA SEMINOVOS
            </EllipsisLink>
            <p>{carro.localVenda}</p>
          </div>
          <div>
            <p>
              {carro.ano}
              <br />
              {carro.kmsRodados} km rodados
            </p>
          </div>
        </Informations>
        <CustomButton
          href="#"
          aria-label={`Entrar em contato sobre ${carro.nomeCarro}`}
          onClick={getModalID}
        >
          Contato
        </CustomButton>
      </CardBody>
    </Card>
  );
}
