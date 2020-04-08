/**
 * graph
 * 
 * pros:
 * - relationship
 * 
 * cons:
 * - hard to scale
 */

 /**
  *   3 ----- 4 ----- 5
  *   |       |       |
  *   |       |       |
  *   1 ----- 2       6
  *    \     /
  *     \   /
  *       0
  */

class Node {
    constructor(value) {
        this.value = value
    }
}

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {}
    }

    addVertex(node) {
        if (!this.adjacentList.hasOwnProperty(node)) {
            this.adjacentList[node] = []
            this.numberOfNodes++
            return true
        }
        return false
    }

    addEdge(node1, node2) {
        if(!this.adjacentList.hasOwnProperty(node1) && !this.adjacentList.includes(node2)) {
            this.adjacentList[node1].push(node2)
        } else {
            return false
        }
        if(!this.adjacentList.hasOwnProperty(node2) && !this.adjacentList.includes(node1)) {
            this.adjacentList[node2].push(node1)
        } else {
            return false
        }
        return true
    }
}