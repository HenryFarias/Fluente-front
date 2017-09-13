import { Pais } from './pais';

export class Estado {

    public id: number;
    public name: string;
    public pais: Pais;

    constructor() {
        this.pais = new Pais();
    }
}