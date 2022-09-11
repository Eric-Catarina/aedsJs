//Quando o ... é usado como parâmetro da função, ele converte o parâmetro recebido Em um Array
// ...
//Quando o ... é usado em qualquer outro lugar ele espalha os valores do arrat

class Stack {
    constructor() {
        this.items = [];
    }

    PushEnd = (...numbers) => {
       this.items.push(...numbers)

        
    }

    PopEnd =  () => {
        let poppedItem = this.items[this.items.length - 1]
        this.items.pop()
        return poppedItem

    }

    Seek = () => {
        return this.items[this.items.length-1]
    }

    Size = () => {
        return this.items.length
    }
}

ToBinary = (number, base) =>{
    let myBinaryStack = new Stack
    let rest
    let quocient

    do {
        quocient = Math.floor(number/base)
        rest = Math.floor( number % base)
        
        myBinaryStack.PushEnd(res)
        number = quocient
    }
    while(number > 0)


return myBinaryStack.items.reverse()
}

let myStack = new Stack

myStack.PushEnd(1,2)
console.log(ToBinary(100345,8))
/*

let binaryNumber = ToBinary(10)

myStack.PushEnd(binaryNumber)

console.log(myStack.ToString())
*/
