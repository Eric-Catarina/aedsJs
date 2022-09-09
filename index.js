//Quando o ... é usado como parâmetro da função, ele converte o parâmetro recebido Em um Array
// ...
//Quando o ... é usado em qualquer outro lugar ele espalha os valores do arrat

class Stack {
    constructor() {
        this.items = [];
    }




    Sum = () => this.items.reduce((anterior, proximo) => anterior + proximo)

    Multiply = () => this.items.reduce((anterior, proximo) => anterior * proximo)

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

ToBinary = (number) => {
    let binaryNumber = new Stack;

    let rest = number % 2
    let product = number / 2

    do {
        if (rest == 0){
            let rest = number % 2
    let product = number / 2

            binaryNumber.PushEnd(0)
            number = product

        }
        else{
            let rest = number % 2
    let product = number / 2

            binaryNumber.PushEnd(1)
            number = product

        }

    }
    while(product >=1);

    return binaryNumber.items
    
}
ToBinary = (number) => {
    myStack = new Pilha
    invertedStack = new Pilha

    let quotient
    let rest
    do{
        rest = number % 2
        quotient = number / 2
        number = quotient
        if (rest >= 1){
            myStack.PushEnd(1)
        }
        else{
            myStack.PushEnd(0)
        }
    }while(quotient >= 1)

    myStackLength = myStack.items.length

    for (let i =0; i < myStackLength; i ++){
        invertedStack.PushEnd(myStack.PopEnd())
    }
    return invertedStack.items
}



let minhaPilha = new Stack;

console.log(ToBinary(10))
