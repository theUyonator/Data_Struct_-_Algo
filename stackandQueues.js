/*
This file holds the code for Stack and Queue implementation
This implementation is from Springboard questions and other questions
contained here will be from Leetcode 

Queues
Make a Queue class. It should include methods for enqueuing, 
dequeuing, peeking, and checking if the queue is empty.

Make it throw an error if you try to dequeue from an empty queue.

Stacks
Make a Stack class. It should include methods for pushing, popping, peeking, and checking if the stack is empty.

Make it throw an error if you try to pop from an empty stack.

*/

class Node {
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
}

// Remember Queues are first in first out FIFO
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /*The first method enqueing adds to the back of the queue only */

    enqueue(val){
        let newNode = new Node(val);

        if(this.last) this.last.next = newNode;
        if(!this.first) this.first = newNode;

        this.last = newNode;
        this.size++;
    }

    /* The next method is dequeue which removes elements from the 
    start of the queue */

    dequeue(){
        if(this.first === null || this.size === 0){
            throw new Error("Cannot dequeue an empty queue");
        }

        let value = this.first.val;
        this.first = this.first.next;
        this.size--;

        return value;
    }

    /*Peeking is a method that just checks the first element in the Queue 
    to see whats there */

    peek(){
        if(this.first === null || this.size === 0) return null;
        return this.first.val;
    }

    /*isEmpty just checks if the queue is empty and returns 
    a boolean */

    isEmpty(){
        if(this.first === null || this.size === 0) return true;

        return false;
    }
}


// Remember Stacks are last in first out LIFO
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /*The first method is push which adds an element to the end of the 
    array  */

    push(val){
        let newNode = new Node(val);
        if(this.first){
            newNode.next = this.first;
        }
        if(this.last === null) this.last = newNode;

        this.first = newNode;
        this.size++;
    }

    /* The method is pop and from a stack we pop froom the top */

    pop(){
        if(this.first === null || this.size === 0){
            throw new Error("Cannot dequeue an empty queue");
        }

        let value = this.first.val;
        this.first = this.first.next;
        this.size--;

        return value;
    }

    /*Peeking is a method that just checks the top element in the stack 
    to see whats there */

    peek(){
        if(this.first === null || this.size === 0) return null;
        return this.first.val;
    }

    /*isEmpty just checks if the stack is empty and returns 
    a boolean */

    isEmpty(){
        if(this.first === null || this.size === 0) return true;

        return false;
    }
}

module.exports = { Node, Queue, Stack };