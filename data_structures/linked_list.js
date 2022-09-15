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
                console.log(currentNode)

            }
            currentNode.next = node
        }

        this.count ++
    }
    toString = () => {
        let currentNode = this.head

        while(currentNode.next != null){
            currentNode = currentNode.next
        }
    }
}


class Node {
    constructor (element){
        this.element = element;
        this.next = undefined;
    }

}

myList = new LinkedList
myListTwo = new LinkedList
myList.push("a")
myList.push("b")

myList.push("c")

myListTwo.push("a")

