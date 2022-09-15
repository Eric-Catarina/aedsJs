class LinkedList {
    constructor(){
        this.count = 0
        this.head = undefined
    }

    equalsFn = (a,b) => {
        return a === b
    }

    push = (element) =>{
        const node = new Node(element)
        let currentNode
        if (this.head == undefined){

            this.head = node
        }
        else{
            currentNode = this.head
            while(currentNode.next != null){ // Travels along all the list until the last node

                currentNode = currentNode.next
                console.log(currentNode)

            }
            currentNode.next = node // When arriving the last node, assign the final node.next as the new Node
        }

        this.count ++
    }

    toString = () => {
        let currentNode = this.head
        console.log(currentNode.element)

        while(currentNode.next != null){
            currentNode = currentNode.next
            console.log(currentNode.element)

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
myList.push("d")
myList.push("e")


myList.toString()