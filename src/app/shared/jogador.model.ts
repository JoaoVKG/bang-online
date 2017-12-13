import { Carta } from './carta.model';

export class Jogador {
    
    constructor(
        public nome: string,
        public vida: number,
        public deque: Carta[],
        public addons: Carta[]
    ) {}
}