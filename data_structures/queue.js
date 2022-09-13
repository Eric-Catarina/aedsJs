export default class Queue {
    constructor(){
        this.items = [];
    }
    PushStart =(...numbers) =>{
        this.items.unshift(...numbers)
    }
    PopStart = () => {
        let poppedItem = this.items[0]
        this.items.shift()
        return poppedItem
    }

    Peek = () => {
        return this.items[0]
    }
    
}

