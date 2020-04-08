class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.currentNode = this.root
    }

    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            let currentNode = this.root
            while(true) {
                if (currentNode.value < value) {
                    if (currentNode.right === null) {
                        currentNode.right = node
                        break
                    } else {
                        currentNode = currentNode.right
                    }
                } else {
                    if (currentNode.left === null) {
                        currentNode.left = node
                        break
                    } else {
                        currentNode = currentNode.left
                    }
                }
            }
        }
    }

    lookup(value) {
        const result = {
            left: 0,
            right: 0,
        }
        if (Number.isInteger(value)) {
            let currentNode = this.root
            while(true) {
                if (currentNode.value < value) {
                    currentNode = currentNode.right
                    result.right++
                } else if (currentNode.value > value) {
                    currentNode = currentNode.left
                    result.left++
                } else {
                    break
                }
            }
            result.steps = result.left + result.right
            return result
        } else {
            return "Value is not a number."
        }
    }

    traverse(node) {
        // if (this.currentNode === null) {
        //     this.currentNode = this.root
        //     // console.log(this.currentNode.value)
        //     this.traverse()
        // } else {
        //     console.log(this.currentNode.value)
        //     if (this.currentNode.left !== null) {
        //         this.currentNode = this.currentNode.left
        //         this.traverse()
        //     }
        //     if (this.currentNode.right !== null) {
        //         this.currentNode = this.currentNode.right
        //         this.traverse()
        //     }
        // }
        // return true
        const tree = { value: node.value };
        tree.left = node.left === null ? null : traverse(node.left);
        tree.right = node.right === null ? null : traverse(node.right);
        console.log(tree.value)
        return tree;
    }
}

const bst = new BinarySearchTree()
bst.insert(90)
bst.insert(87)
bst.insert(66)
bst.insert(60)
bst.insert(67)
bst.insert(91)
// bst.insert(70)
// bst.insert(65)
console.log(bst)
console.log(bst.lookup(67))
bst.traverse(bst.root)

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    console.log(tree)
    return tree;
  }
// traverse(bst.root)