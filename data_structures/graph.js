class Queue {
    constructor(){
        this.items = [];
    }
    PushStart =(...numbers) =>{
        this.items.unshift(...numbers)
    }
    PopStart = () => {
        let poppedItem = this.items[0]
        this.items.shift()
        return poppedItem
    }

    Peek = () => {
        return this.items[0]
    }
    
}


class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new Map
    }

    toString = () => {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} --> ` 
            let neighbors = this.adjList.get(this.vertices[i])
            if (neighbors == undefined){
                neighbors = ""
            }

            for (const value of neighbors){
                s += `${value} `
            }
            s += '\n'

        }
        return s
    }

    addVertex = (vertex) => {
        if (!this.vertices.includes(vertex)) {
            this.vertices.push(vertex)
        }
    }
    addEdge = (origin, destiny) => {
        this.addVertex(origin)
        this.addVertex(destiny)

        if (this.adjList.get(origin)) {
            if (this.adjList.get(origin).includes(destiny)) {   // If the adjList already have the value
                return false
            }
            this.adjList.get(origin).push(destiny)
            if(this.isDirected == false){
                this.addEdge(destiny, origin)
            }
            return true
        }
        this.adjList.set(origin, [])
        this.adjList.get(origin).push(destiny)
        if(this.isDirected == false){
            this.addEdge(destiny, origin)
        }
        return true
    }
    
    
}
const initializeColor = vertices => {
    const color ={}
    for(let i =0; i< vertices.length; i ++){
        color[vertices[i]] = Colors.WHITE
    }
    return color
}

const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.vertices
    const adjList  = graph.adjList
    const color = initializeColor(vertices)
    const queue = new Queue
    queue.PushStart(startVertex)

    while(queue.items.length > 0){

        const u = queue.PopStart()

        const neighbors = adjList.get(u)

        color[u] = Colors.GREY

            for (const index of neighbors.keys()){
                const w = neighbors[index]
                if(color[w] === Colors.WHITE){
                    color[w] = Colors.GREY
                    queue.PushStart(w)
                }
                
        }
        color[u] = Colors.BLACK
        if(callback){
            callback(u)
        }

    }
}

const Colors = {
    WHITE:0,
    GREY :1,
    BLACK:2
}



myGraph = new Graph()
const myVertices = ['A', 'B', 'C', 'D']
for (element of myVertices) {
    myGraph.addVertex(element)
}

myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('A', 'D')

myGraph.addEdge('B', 'E')
myGraph.addEdge('B', 'F')

myGraph.addEdge('C', 'D')
myGraph.addEdge('C', 'G')

myGraph.addEdge('D', 'G')
myGraph.addEdge('D', 'H')

myGraph.addEdge('E', 'I')

const printVertex = (value) => console.log('Visited vertex: ' + value);

breadthFirstSearch(myGraph, myGraph.vertices[0], printVertex)