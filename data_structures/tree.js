class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert = (key) => {
        if (this.root == null) {
            this.root = new Node(key)
        }
        else {
            this.insertNode(this.root, key)
        }
    }

    insertNode = (node, key) => {
        if (key < node.key) {
            if (node.left == null) {
                node.left = new Node(key)
            }
            else {
                this.insertNode(node.left, key)
            }
        }
        else {
            if (node.right == null) {
                node.right = new Node(key)
            }
            else {
                this.insertNode(node.right, key)
            }
        }
    }

    inOrderTraverse = (callback) => {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode = (node, callback) => {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    preOrderTraverse = (callback) => {
        this.preOrderTraverseNode(this.root,callback)
    }

    preOrderTraverseNode = (node, callback) => {
        if(node != null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)

        }
    }

    postOrderTraverse = (callback) => {
        this.postOrderTraverseNode(this.root,callback)
    }

    postOrderTraverseNode = (node, callback) => {
        if(node != null) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    includes = (element) => {
        return (this.includesRec(this.root, element))
        
    }

    includesRec = (node, element) => {
        if (node == null){
            return false
        }
        if(element < node.key){
            return this.includesRec(node.left, element)
        }
        if( element > node.key){
            return this.includesRec(node.right, element)
        }
        return true
    }

    min = () => {
        return this.minNode(this.root)
    }
    minNode = ( node)  => {
        let current = node
        while (current != null && current.left != null){
            current = current.left
        }
        return current
    }

    remove = (key) => {
        this.root = this.removeNode(this.root, key)
    }

    removeNode = (node, key) => {
        if (node == null){
            return null
        }
        if (key < node.key){
            node.left = this.removeNode(node.left, key)
            return node
        }
        else if(key > node.key){
            node.right = this.removeNode(node.right, key)
            return node
        }
        else {
            if(node.left == null && node.right == null){
                node = null
                return node
            }
            if (node.left == null){
                node = node.right
                return node
            }
            else if( node.right == null){
                node = node.left
                return node
            }
            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node

            
        }
    }


}

class Node {
    // "key" is the other data structures "element"
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}


myBST = new BinarySearchTree
myBST.insert(3)
myBST.insert(2)
myBST.insert(1)
myBST.insert(1)


myBST.insert(0)

myBST.insert(-1)
myBST.insert(-2)
myBST.insert(4)
myBST.insert(5)


const printNode = (nodeValue) => console.log(nodeValue)

myBST.remove(0)

myBST.inOrderTraverse(printNode)