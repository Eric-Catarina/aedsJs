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

    ToString = () => {
        let myStringStack = new Stack
        let count = this.items.length
        for (let i =0; i < count;i ++){
            myStringStack.PushEnd(this.PopEnd())        
        }
        return myStringStack.items
    }

}

ToBinary = (number) =>{
    let myBinaryStack = new Stack
    let rest
    let quocient

    do {
        quocient = Math.floor(number/2)
        rest = Math.floor( number % 2)
        if ( rest == 0 ){
            myBinaryStack.PushEnd(0)
        }
        else{
            myBinaryStack.PushEnd(1) 
        }
        number = quocient
    }
    while(number > 0)


return myBinaryStack.items.reverse()
}

let myStack = new Stack

myStack.PushEnd(1,2)
console.log(ToBinary(10))
/*

let binaryNumber = ToBinary(10)

myStack.PushEnd(binaryNumber)

console.log(myStack.ToString())
*/
