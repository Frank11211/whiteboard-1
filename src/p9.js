// For this question I will use DFS (Depth-First serch) method to check connection path

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        this.adjList.set(node, []);
    }

    addEdge(fromNode, toNode) {
        this.adjList.get(fromNode).push(toNode);
    }

    hasConnectedPath(startNode, endNode) {
        const visited = new Set();
        const path = [];

        const dfs = (currentNode) => {
            visited.add(currentNode);
            path.push(currentNode);

            if (currentNode === endNode) {
                return true;
            }

            for (const neighbor of this.adjList.get(currentNode)) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor)) {
                        return true;
                    }
                }
            }

            path.pop();
            return false;
        };

        if (dfs(startNode)) {
            return { hasPath: true, path };
        } else {
            return { hasPath: false, path: [] };
        }
    }
}

// declare object to build graph
const graph = new Graph();

// Add nodes and edges to the graph
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.addNode('G');

graph.addEdge('A', 'B');
graph.addEdge('B', 'A');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'G');
graph.addEdge('D', 'E');
graph.addEdge('B', 'E');
graph.addEdge('E', 'F');
graph.addEdge('F', 'B');
graph.addEdge('C', 'F');
graph.addEdge('F', 'G');

// Specify your start and end node here
const startNode = 'A';
const endNode = 'G';

// Check for connected path
const result = graph.hasConnectedPath(startNode, endNode);

// Display the result
var txtresult =`Does a connected path exist from ${startNode} to ${endNode}? <br>
                Result : ${result.hasPath} <br>
                Connected Path: ${result.path.join(' -> ')}`;

document.getElementById("demo").innerHTML = txtresult;

