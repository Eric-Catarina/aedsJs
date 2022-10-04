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
        return node
    }

    min = () => {
        return this.minNode(this.root)
    }
    minNode = (node)  => {
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
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3, 
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
};

class AVL extends BinarySearchTree{
    constructor(){
        super()
        this.root = null
    }
    getNodeHeight = (node) => {
        if (node == null){
            return -1
        }
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1
    }
    getBalanceFactor = (node) =>{
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1: 
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    getNodeFromKey = (key) =>{
        this.preOrderTraverse(
            printNode
        )
    }
    rotationLL = (node) => {
        const tmp = node.left
        //tmp = 1
        node.left = tmp.right

        tmp.right = node
        return tmp
    }

}
class RedBlackNode extends Node {
    constructor(key){
        super(key)
        this.color = Colors.RED
        this.parent = null
    }
    isRed = () => {
        return this.color === Colors.RED;
    }
}

class RedBlackTree extends BinarySearchTree{
    constructor(){
        super()
        this.root = null
    }
    insert(key){
        
        if (this.root == null){
            
            this.root = new RedBlackNode(key)
            this.root.color = Colors.BLACK
        }
        else{
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode)
        }
    }

    insertNode = (node, key) => {
        if (key < node.key){
            if(node.left == null){
                node.left = new RedBlackNode(key)
                node.left.parent = node
                return node.left
            }
            else{
                return this.insertNode(node.left, key)
            }
        }
        else if (node.right == null) {
            node.right = new RedBlackNode(key)
            node.right.parent = node
            return node.right
        }
        else {
            return this.insertNode(node.right,key)
        }
        
    }
}

myRBT = new RedBlackTree

myRBT.insert(1)
myRBT.insert(2)
myRBT.insert(3)


console.log(myRBT.root)


const printNode = (nodeValue) => console.log(nodeValue)




