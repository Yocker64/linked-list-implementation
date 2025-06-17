

class LinkedList {

  constructor(head) {
    this.head= new Node(head);
    this.tail = head;
    this.size = 1;
    
    
    
  }
append(value) {
    this.tail.nextNode = new Node(value);
    this.tail = this.tail.nextNode;
    this.size ++;
  }

  prepend(value){
    let newHead = new Node(value);
    newHead.nextNode = this.tail;
    this.head = newHead;
    this.size ++;
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