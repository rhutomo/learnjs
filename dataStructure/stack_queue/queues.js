/**
 * queues is like an entrance to a roller coaster, the first come in - the first come out (FIFO - First In First Out)
 * first item in the queue, gets access first
 * example:
 * - sort of waitlist in the concert
 * - checkin to the restaurant
 * - printer in your home, lets say your family member and you press print and each person prints different items.
 * the person that pressed print first, should have their first print out
 * operation in queue:
 * - enqueue - add to the queue which means add to the first line O(1)
 * - dequeue - take / remove the first item in line O(1)
 * - peek - see the first item in queue O(1)
 * why we are not using arrays in queue?
 * - inefficient because when we remove / dequeue the item in the list, you have to shift all those indexes
 */

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// A -- B -- C -- D

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    // the same as append to linked list
    enqueue(value) {
        const node = new Node(value)
        
        if(this.isEmpty()) {
            this.first = node
            this.last = this.first
        } else {
            console.log(this.first.last)
            this.last.next = node
            this.last = node
        }
        
        this.length++
        return this
    }

    dequeue() {
        this.length--
        if (this.isEmpty()) {
            this.first = null
            this.last = null
            return this
        }
        this.first = this.first.next
        return this
    }

    peek() {
        return this.first
    }

    isEmpty() {
        if (this.length === 0) {
            return true
        }
        return false
    }

    size() {
        return this.length
    }
}

const queue = new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(10)
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
console.log(queue)