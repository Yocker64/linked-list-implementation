

class LinkedList {
  constructor(head) {
    this.head= new Node(head);
    this.tail = head;
    
    
    
  }
append(value) {
    this.head.nextNode = new Node(value);
    this.head = this.head.nextNode;
  }

  prepend(value){
    let newTail = new Node(value);
    newTail.nextNode = this.tail;
    this.tail = newTail;
  }

  }

  function printHead(linkedList) {
    console.log(linkedList.head);
    
  }


    

  class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = undefined;
  }
}