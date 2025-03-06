import { IVendedor } from "./IVendedor";

export interface ICarro {
  id: string;
  marca: string; 
  nomeCarro: string;
  detalhe: string;
  ehAutomatico: boolean;
  ehFavorito: boolean;
  preco: number;
  linkLoja: string;
  localVenda: string;
  ano: string;
  kmsRodados: string;
  fotoCarro: string;
  vendedor: IVendedor;
}
