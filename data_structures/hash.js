class LinkedList {

    constructor(){
        this.count = 0
        this.head = undefined
    }

    equalsFn = (a,b) => {
        return a === b
    }
    getHead = () => {
        return this.head
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


ToString = (item) => {
    if (item === null){
        return ''
    }
    else if (item === undefined){
        return 'UNDEFINED'
    }
    else if (typeof item === 'string' || item instanceof String){
        return '$item'
    }
    return item.toString();
}

class ValuePair {
    constructor (key, value){
        this.key = key
        this.value = value
    }
}
class HashTable {
    constructor(){
        this.table = {}
    }
    loseloseHash = (key) =>{
        if(typeof key === 'number'){
            return key
        }
        let hash = 0
        for (let i =0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    hashCode= (key) => {
        return this.loseloseHash(key)
    }

    put = (key,value) => {

        const valuePair = new ValuePair(key,value)
        let position = this.hashCode(key)

        if (this.table[position] != null){
            while(this.table[position] != null){
                position ++
            }
            this.table[position] = valuePair
            return true
        }

        this.table[position] = valuePair
        return true
    }

    get = (key) => {

        let position = this.hashCode(key)
        
        while(this.table[position] != null){
            if(this.table[position].key === key ){
                return this.table[position].value
            }
            position++
        }
        return this.table[position].value


    }

    remove = (key) => {
        const position = this.hashCode(key)
        const linkedList = this.table[position]

        if (linkedList != null){

            let current = linkedList.getHead()

            while(current != null){
                if(current.element.key === key){

                    linkedList.remove(current.element)
                    if(linkedList.head == null){
                        delete this.table[position]
                    }
                }    
                current = current.next
            }
        }
    }
}

myHash = new HashTable

myHash.put("Jonathan", "olhos Verdes")

myHash.put("Jamie", "olhos Verdes2")
myHash.put("Sue", "olhos Verdes3")

console.log(myHash.get("Jamie"))

