/* This file holds test cases for the stacks and queues 
data structures */

const { Node, Queue, Stack } = require("./stackandQueues");

let queue;

beforeEach(function() {
  queue = new Queue();
});

describe("enqueue", function() {
  it("places the value at the end of the queue and returns undefined", function() {
    expect(queue.enqueue(10)).toBe(undefined);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(10);
    queue.enqueue(100);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(100);
    queue.enqueue(1000);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(1000);
  });
});

describe("dequeue", function() {
    it("returns the value of the node removed", function() {
      queue.enqueue(10);
      queue.enqueue(100);
      queue.enqueue(1000);
      let removed = queue.dequeue();
      expect(removed).toBe(10);
      expect(queue.size).toBe(2);
      queue.dequeue();
      queue.dequeue();
      expect(queue.size).toBe(0);
    });
  
    it("throws an error if the queue is empty", function() {
      expect(() => queue.dequeue()).toThrow(Error);
    });
});

describe("peek", function() {
    it("returns the value at the start of the queue", function() {
      queue.enqueue(3);
      expect(queue.peek()).toBe(3);
      queue.enqueue(5);
      expect(queue.peek()).toBe(3);
    });
});

describe("isEmpty", function() {
    it("returns true for empty queues", function() {
      expect(queue.isEmpty()).toBe(true);
    });
  
    it("returns false for nonempty queues", function() {
      queue.enqueue(3);
      expect(queue.isEmpty()).toBe(false);
    });
});

let stack;

beforeEach(function() {
  stack = new Stack();
});

describe("push", function() {
    it("places the value at the top of the stack and returns undefined", function() {
      expect(stack.push(10)).toBe(undefined);
      expect(stack.first.val).toBe(10);
      expect(stack.last.val).toBe(10);
      stack.push(100);
      expect(stack.first.val).toBe(100);
      expect(stack.last.val).toBe(10);
      stack.push(1000);
      expect(stack.first.val).toBe(1000);
      expect(stack.last.val).toBe(10);
    });
});

describe("pop", function() {
    it("returns the value of the node removed", function() {
      stack.push(10);
      stack.push(100);
      stack.push(1000);
      var removed = stack.pop();
      expect(removed).toBe(1000);
      expect(stack.size).toBe(2);
      stack.pop();
      stack.pop();
      expect(stack.size).toBe(0);
    });
  
    it("throws an error if the stack is empty", function() {
      expect(() => stack.pop()).toThrow(Error);
    });
});

describe("peek", function() {
    it("returns the value at the start of the stack", function() {
      stack.push(3);
      expect(stack.peek()).toBe(3);
      stack.push(5);
      expect(stack.peek()).toBe(5);
    });
});

describe("isEmpty", function() {
    it("returns true for empty stacks", function() {
      expect(stack.isEmpty()).toBe(true);
    });
  
    it("returns false for nonempty stacks", function() {
      stack.push(3);
      expect(stack.isEmpty()).toBe(false);
    });
});