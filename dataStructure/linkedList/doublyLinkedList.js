class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head
        this.length = 1
    }

    extractToArray() {
        let arr = []
        let currentNode = this.head
        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return arr
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    // add node to the end of the list
    // dll : [10]; add (1) (6)
    // dll : [10, 1, 6]
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    // add node at the beginning of the list
    // dll : [10, 1, 6]; add(7) (2)
    // dll : [2, 7, 10, 1, 6]
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    // inserting node with given index and value
    insert(index, value) {
        if (index >= this.length-1) {
            this.append(value)
            return this
        } else if (index === 0) {
            this.prepend(value)
            return this
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        let leader = this.traverseToIndex(index-1)
        let follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        this.length++
        return this
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next
            this.head.prev = null
            return this
        } else if (index >= this.length) {
            return this
        }
        let leader = this.traverseToIndex(index-1)
        let targeted = leader.next
        leader.next = targeted.next
        targeted = targeted.next
        targeted.prev = leader
        this.length--
        return this
    }

    reverse() {
        
    }

}

let dll = new DoublyLinkedList(10)
dll.append(1)
dll.append(6)
dll.prepend(7)
dll.prepend(2)
dll.insert(1, 99)
dll.insert(0, 80)
dll.insert(100, 100)
dll.remove(0)
dll.remove(1)
console.log(dll.extractToArray())