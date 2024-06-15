import Node from './node.mjs'

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.nextNode){
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value){
        const newNode = new Node(value);
        if(!this.head){
            return
        }
        let prevHead = this.head;
        this.head = newNode;
        this.head.nextNode = prevHead;
    }
}

export default LinkedList;