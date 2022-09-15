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
            }
            currentNode.next = node // When arriving the last node, assign the final node.next as the new Node
        }
        this.count ++
    }

    removeAt = (index) => {
        let currentNode = this.head
        let previousNode
        if (index === 0){
            this.head = this.head.next
        }
        else{
            previousNode = this.getElementAt(index - 1)
            previousNode.next = this.getElementAt(index).next
        }
        this.count --
    }

    getElementAt = (index) => {
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
        
    }

    insertAt = (index, element) => {
        let currentNode = this.head
        let previousNode
        if (index === 0){
            this.head = element
        }


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
myList.removeAt(1)

console.log(myList.getElementAt(1))



myList.toString()