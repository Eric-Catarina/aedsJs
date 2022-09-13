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

    PopEnd = () => {
        let poppedItem = this.items[this.items.length - 1]
        this.items.pop()
        return poppedItem
    }

    Seek = () => {
        return           this.items[this.items.length - 1]
    }

    Size = () => {
        return           this.items.length
    }
}

BaseConverter = (number, base) => {

    let myBinaryStack = new Stack
    let rest
    let quocient

    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    do {
        quocient = Math.floor (number / base)

        rest     = Math.floor (number % base)

        myBinaryStack.PushEnd(digits[rest])
        number = quocient
    }
    while (number > 0)

    return myBinaryStack.items.reverse()
}

