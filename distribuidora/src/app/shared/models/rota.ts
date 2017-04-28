import {Entrega} from './entrega';

export class Rota {
    public id: string;
    public dataInicio: string;
    public estatus: string;
    public operador: string;
    public descricao: string;
    public emissor: string;
    public entregas: Entrega[];
}
