import { Naipe } from './naipe.enum';

export class Carta {
    
    constructor(
        public nome: string,
        public urlImagem: string,
        public descricao: string,
        public tipo,
        public naipe: Naipe,
        public numero: string,
        public vida: number
    ) {}
}