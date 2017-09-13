import { Cidade } from './cidade';

export class Endereco {

    public id: number;
    public cep: string;
    public rua: string;
    public bairro: string;
    public cidade: Cidade;

    constructor() {
        this.cidade = new Cidade();
    }
}