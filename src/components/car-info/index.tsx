import { useEffect, useState } from "react";
import { useCarros } from "../../context/CarrosContext";
import { ICarros } from "../../interfaces/ICarros";
import CarCard from "../car-card";
import Modal from "../modal";

export default function CarInfo({ carro }: ICarros) {
  const { idCarro, openModal  } = useCarros();

  return (
    <>
      <CarCard carro={carro} />
      {openModal && idCarro === carro.id ? <Modal vendedor={carro.vendedor} /> : ""}
    </>
  );
}
