import { Idioma } from './idioma';
import { Nivel } from './nivel';
import { Notificacao } from './notificacao';
import { Endereco } from './endereco';

export class User {

    public id: number;
    public email: string;
    public name: string;
    public sobrenome: string;
    public foto: string;
    public idade: number;
    public sexo: string;
    public telefone: string;
    public formacao: string;
    public habilidades: string;
    public password: string;
    public logado: boolean = false;
    public idioma: Idioma;
    public nivel: Nivel;
    public notificacao: Notificacao;
    public endereco: Endereco;

    constructor() {
        this.idioma = new Idioma();
        this.nivel = new Nivel();
        this.notificacao = new Notificacao();
        this.endereco = new Endereco();
    }
}