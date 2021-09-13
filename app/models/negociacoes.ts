import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacoes: Negociacao){
        this.negociacoes.push(negociacoes);
    }

    lista(): readonly Negociacao[]{ //Readonly: evita que modificações fora da classe sejam permitidas
        return this.negociacoes;
    }
}