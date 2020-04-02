/**
 * stack is no random access operation
 * stack is like a plate from bottom to top (LIFO - Last In First Out)
 * have 4 operation like push O(1), pop O(1), peek O(1) (see the last element in data structure), and lookup O(n) (you can't grab stack in the middle, you have to traverse so the lookup consume heavy operation)
 * can build using arrays or linked lists
 * the example :
 * - browser history (you can back and forward)
 * - writing text (you can undo and redo)
 * the idea of stack you store the previous state over your work into the memory, and the memory such an order that the last one appears first.
 * why using arrays?
 * arrays allow cache locality, which technically faster when accessing its items in memory
 * as soon as about reach it's limit, it's going doubled up memory and create new space in memory
 * why using linked lists?
 * scattered all over memory and also have extra memory associated with them, because we have to hold on those pointers
 */


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

/**
 * Stack class using linked list
 */
class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.top = node
            this.bottom = this.top
        } else {
            let temp = this.top
            this.top = node
            this.top.next = temp
        }
        this.length++
        return this
    }

    pop() {
        if (!this.isEmpty()) {
            this.top = this.top.next
        } else {
            this.top = null
            this.bottom = null
        }
        this.length--
        return this
    }

    isEmpty() {
        if (this.length > 0) {
            return false
        }
        return true
    }

    size() {
        return this.length
    }

    printToArray() {
        let arr = []
        if (!this.isEmpty()) {
            let currentNode = this.top
            while(currentNode) {
                arr.push(currentNode.value)
                currentNode = currentNode.next
            }
        }
        return arr
    }
}

/**
 * Stack using arrays
 */

class Stack1 {
    constructor() {
        this.array = []
        this.length = 0
    }

    push(value) {
        this.array.push(value)
        this.length++
        return this
    }

    pop() {
        this.array.pop()
        if (this.length > 0) {
            this.length--
        }
        return this
    }

    peek() {
        console.log(this.array)
        return this.array[this.length-1]
    }

    isEmpty() {
        return this.array.length
    }
}

// const stack = new Stack1()
// stack.push(1)
// stack.push(3)
// stack.push(10)
// console.log(stack.peek(), stack.size())
// console.log(stack.printToArray())
// stack.pop()
// stack.pop()
// stack.pop()
// stack.push(100)
// console.log(stack.peek(), stack.size())
// stack.pop()
// stack.pop()
// stack.pop()
// stack.push("www.google.com")
// stack.push("www.youtube.com")
// stack.push("www.hackerrank.com")
// console.log(stack.peek())
// console.log(stack)
// console.log(stack.printToArray())