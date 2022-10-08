


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
            this.adjList.set(origin, destiny)
            this.adjList.set(destiny, origin)

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
myGraph.addEdge('C', 'D')
myGraph.addEdge('B', 'D')
myGraph.addEdge('B', 'c')


console.log(myGraph.adjList)