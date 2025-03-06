import { ICor } from "./ICor";
import { IGenero } from "./IGenero";

export interface IVendedor {
    idCarro: number; 
    nome: string; 
    telefone: string; 
    email: string; 
    genero: IGenero; 
    corDaPele: ICor; 
}