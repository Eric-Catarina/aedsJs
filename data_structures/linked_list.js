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

        const node = new Node(element)

        if (index === 0){
            const current = this.head
            node.next = current
            this.head = node
        }
        else{
            const previous = this.getElementAt(index - 1)
            const current = previous.next
            node.next = current
            previous.next = node

        }
        
        this.count ++
    }

    indexOf = (element) => {
        let currentNode = this.head
        for(let i = 0; i < this.count && currentNode != null; i++){
            if(currentNode.element === element){
                return i
            }
            currentNode = currentNode.next
        }
        return -1
    }

    remove(element){
        let index = this.indexOf(element)
        return this.removeAt(index)

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

class DoublyNode extends Node{
    constructor(element, next, prev){
        super(element, next)
        this.prev = prev
    }
    
}

class DoublyLinkedList extends LinkedList{
    constructor(){
        super()
        this.tail = undefined
    }

    removeAt = (index) => {
        const previous = this.getElementAt(index - 1)
        previous.next = previous.next.next
        previous.next.prev = previous


        this.count--

    }

    insertAt = (element, index) => {

        const node = new DoublyNode(element)

        if (index === 0){
            if (this.head == null){
                this.head = node
                this.tail = node

            }
            else{
                node.next = this.head
                this.head.prev = node
                this.head = node 
                
            }
        }
        
        else if (index === this.count){

            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        else{
            const previous = this.getElementAt(index - 1)
            node.next = previous.next
            previous.next = node
            node.prev = previous
        }
        this.count ++
    }
}



myLL = new DoublyLinkedList

myLL.insertAt("a",0)
myLL.insertAt("b",1)
myLL.insertAt("c",2)
myLL.insertAt("e",3)
myLL.insertAt("d",3)


myLL.removeAt(2)


myLL.toString()