class Graph{
    constructor(){
        this.adjList = {}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
        }
    }
    addEdge(vertex1 , vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasEdge(vertex1 , vertex2){
        return(this.adjList[vertex1]?.has(vertex2) && this.adjList[vertex2]?.has(vertex1))
    }
    removeEdge(vertex1 , vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]){
            return
        }
        for(let adjvertex of this.adjList[vertex]){
            this.removeEdge(vertex , adjvertex)
        }
        delete this.adjList[vertex]
    }
    dfs(start , visited = new Set() , result = []){
        if(visited.has(start)) return
        visited.add(start)
        result.push(start)
        for(let neighbor of this.adjList[start]){
            this.dfs(neighbor , visited , result)
        }
        return result
    }
    bfs(start){
        const queue = [start]
        const visited = new Set([start])
        const result = []
        while(queue.length>0){
            let node = queue.shift()
            result.push(node)
            for(let neighbor of this.adjList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
        return result
    }
    display(){
        for(let vertex in this.adjList){
            console.log(vertex + "->" + [...this.adjList[vertex]])
        }
    }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A" , "B")
graph.addEdge("B" , "C")
// graph.removeEdge("A" , "B")
// graph.removeVertex("A")
graph.display()

console.log(graph.hasEdge("A" , "B"))
console.log(graph.hasEdge("A" , "C"))
console.log("DFS Recursive:", graph.dfs("A"));
console.log("BFS:", graph.bfs("A"));


