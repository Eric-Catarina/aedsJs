//Quando o ... é usado como parâmetro da função, ele converte o parâmetro recebido Em um Array
// ...
//Quando o ... é usado em qualquer outro lugar ele espalha os valores do arrat

class Pilha {
    constructor() {
        this.items = [];
    }




    Somar = (...param) => param.reduce((anterior, proximo) => anterior + proximo)

    Multiplicar = (...param) => param.reduce((anterior, proximo) => anterior * proximo)

    PushEnd = (...elements) => {
        if (elements.length > 1) {
            this.items = [...this.items, ...elements];
        }
        else {
            this.items[this.items.length] = elements
        }
    }

    PopEnd = () =>{
       let removedElement = this.items[this.items.length - 1];
       this.items.length -=1;
       return removedElement;
    }
    PeekEnd = () => this.items[this.items.length -1 ]
   
}




let minhaPilha = new Pilha;

minhaPilha.PushEnd(1,2,3,4)
minhaPilha.PopEnd()
console.log(minhaPilha.items)
console.log(minhaPilha.PeekEnd(minhaPilha))
