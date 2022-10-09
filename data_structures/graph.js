


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
    bfs =() => {
        
    }
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


console.log(myGraph.toString())
console.log("banana")
