class Queue {
    constructor(){
        this.items = [];
    }
    PushStart =(...numbers) =>{
        this.items.unshift(...numbers)

    }
    
}

myQueue = new Queue
myQueue.PushStart(1,2,3)
myQueue.PushStart(4)
myQueue.PushStart(-1,0)


console.log(myQueue.items)