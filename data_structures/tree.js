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


console.log(myBST.includes(5))
