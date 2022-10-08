


class Graph {
    constructor(isDirected = false){
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new Map
    }
    addVertex = (vertex) =>{
        if(!this.vertices.includes(vertex)){
            this.vertices.push(vertex)
        }
    }
    addEdge = (origin, destiny) => {
        this.addVertex(origin)
        this.addVertex(destiny)

        if (this.adjList.get(origin)){
            if (this.adjList.get(origin).includes(destiny)){   // If the adjList already have the value
                return false
            }
            this.adjList.get(origin).push(destiny)
            return true
        }
            this.adjList.set(origin, [])
            this.adjList.get(origin).push(destiny)
            return true
    }
}

myGraph = new Graph()
const myVertices = ['A', 'B', 'C', 'D']
for (element of myVertices){
    myGraph.addVertex(element)
}

myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('A', 'D')
myGraph.addEdge('A', 'D')

myGraph.addEdge('C', 'D')
myGraph.addEdge('B', 'D')
myGraph.addEdge('B', 'C')


console.log(myGraph.adjList)