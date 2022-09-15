class LinkedList {
    constructor(){
        this.count = 0
        this.head = undefined
    }

    equalsFn = (a,b) => {
        return a === b
    }

    push = (element) =>{
        const node = new Node
        let currentNode
        if (this.head == undefined){

            this.head = element
        }
        else{
            currentNode = this.head
            while(currentNode.next != null){
                currentNode = currentNode.next
            }
            currentNode = currentNode.next
        }


        this.count ++

    }

}


class Node {
    constructor (element){
        this.element = element;
        this.next = undefined;
    }

}

myList = new LinkedList
myList.push("a")
myList.push("b")

console.log(myList.head)
