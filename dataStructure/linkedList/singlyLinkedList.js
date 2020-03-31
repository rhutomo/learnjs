/*
head            tail
7    --> 10 --> 5    --> null

80 - 10 - 1 - 11

insert(index=1, value=6)
1. find node on index-1 (traverse)
2. 80 - 10
3. 80 - 10
    \
     6
4. 80   10
    \   /
      6

remove(index=1)
1. find node on index-1 (traverse)
2. 80 --> 6 --> 10
3. x = 6.next(10)
4. 80 --> x(10)

*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    size() {
        return this.length
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

    findValue(index) {
        if (index >= this.length-1 || index < 0) {
            return "Index out of range"
        }
        let leader = this.traverseToIndex(index)
        return leader.value
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value)
        } else if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        // find the leader, the node before targeted index
        let leader = this.traverseToIndex(index-1)
        let oldPointing = leader.next
        leader.next = newNode
        newNode.next = oldPointing
        this.length++
        return this
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next
            this.length--
            return this
        } else if (index >= this.length) {
            return this
        }
        let leader = this.traverseToIndex(index-1)
        if (index === this.length-1) {
            this.tail = leader
            this.tail.next = null
            leader = this.tail
            this.length--
            return this
        }
        let targeted = leader.next
        targeted = targeted.next
        leader.next = targeted
        this.length--
        return this
    }
}

let linked = new LinkedList(10)
linked.append(1)
linked.append(11)
linked.prepend(80)
linked.insert(1, 6)
linked.insert(0, 2)
linked.insert(99, 102)
linked.insert(2, 55)
linked.remove(0)
linked.remove(1)
console.log(linked.extractToArray())
// linked.remove(4)
// linked.remove(3)
// linked.remove(2)
// linked.remove(1)
// linked.remove(0)
// linked.prepend(1)
// linked.prepend(2)
// console.log(linked.findValue(3))
// console.log(linked)
// console.log("list of Linked List : " + linked.extractToArray())
// console.log("size: " + linked.size())