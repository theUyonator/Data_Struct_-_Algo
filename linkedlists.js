// In this file, we'll be implementing a Linked List from scratch
// adding some methods. This is a Springboard problem and we'll
// solve other Leet code questions here later 
/*
1.1 push(val)
    Appends a new node with value val to the tail. 
    Returns undefined.
1.2 unshift(val)
    Add a new node with value val to the head. Returns undefined.
1.3 pop()
    Remove & return tail value. Throws error if list is empty.
1.4 shift()
    Remove & return head value. Throws error if list is empty.
1.5 getAt(idx)
    Retrieve value at index position idx. Throws error if index is invalid.
1.6 setAt(idx, val)
    Set value of node at index position idx to val. Throws error if index is invalid.
1.7 insertAt(idx, val)
    Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.
1.8 removeAt(idx)
    Remove & return value at position idx. Throws error if index is invalid.
1.9 Average Of List
    Given a linked list containing numbers, return the average of 
    those numbers.

*/

class Node {
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
};

class LinkedList {
    constructor(vals = []){
        this.head = null;
        this.tail = null;
        this.length = 0;

        for(let val of vals) this.push(val);
    }

    /* we need a method that retrives a node at a given index
    this will help the rest of the methods going forward
    */

    _get(idx){
        let curr = this.head;
        let count = 0

        while(curr !== null){
            if(count === idx){
                return curr;
            }
            curr = curr.next;
            count++
        }

        return curr;
    }

    push(val){
        let newNode = new Node(val);
        this.length++;

        if(!this.head){
            this.head = newNode;
        }
        if(this.tail){
            this.tail.next = newNode;
        }

        this.tail = newNode;

    }

    unshift(val){
        let newNode = new Node(val);
        this.length++;

        if(this.head) {
            newNode.next = this.head;
            this.head = newNode;
        }
        if(!this.tail) this.tail = newNode;

        this.head = newNode;
    }

    pop(){
        return this.removeAt(this.length - 1);
    }

    shift(){
        return this.removeAt(0);
    }

    getAt(idx){
        if(idx > this.length || idx < 0){
            throw new Error('Invalid Index');
        }

        return this._get(idx).val;
    }

    setAt(idx, val){
        if(idx > this.length || idx < 0){
            throw new Error('Invalid Index');
        }
        this._get(idx).val = val;
    }

    insertAt(idx, val){
        if(idx > this.length || idx < 0){
            throw new Error('Invalid Index');
        }

        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val);

        let newNode = new Node(val);
        let prevNode = this._get(idx - 1);

        newNode.next = this._get(idx);
        prevNode.next = newNode;

        this.length++;
    
    }

    removeAt(idx){
        if(idx > this.length || idx < 0){
            throw new Error('Invalid Index');
        }

        if(idx === 0){
            let value = this.head.val;
            this.head = this.head.next;
            this.length--;
            if(this.length < 2) this.tail = this.head;
            return value;
        }
    
        let prevNode = this._get(idx - 1);

        if(idx === this.length - 1){
            let value = this.tail.val;
            prevNode.next = null;
            this.tail = prevNode;
            this.length--;
            if(this.length < 2) this.head = this.tail;
            return value;
        }
        let currNode = this._get(idx);
        let nextNode = this._get(idx + 1);

        prevNode.next = nextNode;
        this.length--;

        return currNode.val;
    }

    average(){
        if(this.length === 0 || this.head === null) return 0;
        let total = 0;
        let curr = this.head;

        while(curr !== null){
            total += curr.val;
            curr = curr.next;
        }

        return total / this.length;
    }
}

// Export classes and functions 
module.exports = { Node, LinkedList }