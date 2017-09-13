import { Estado } from './estado';

export class Cidade {

    public id: number;
    public name: string;
    public estado: Estado;

    constructor() {
        this.estado = new Estado();
    }
}