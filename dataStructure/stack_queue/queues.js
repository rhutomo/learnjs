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