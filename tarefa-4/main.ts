interface Pagamento {
    valor: number;
    pagar(): void;
    
}



class PagamentoCheque implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por cheque.`);
    }

    
}


class PagamentoDinheiro implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por dinheiro.`);
    }

   
}

class PagamentoPorTransferencia implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por transferência.`);
    }
    
}
class PagamentoPorPix implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por pix.`);
    }
    
}

const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoTransferencia = new PagamentoPorTransferencia(300);
pagamentoTransferencia.pagar();


const pagamentoPorPix = new PagamentoPorPix(300);
pagamentoPorPix.pagar();

