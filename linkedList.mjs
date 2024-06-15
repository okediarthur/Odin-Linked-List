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

    size () {
        if(!this.head){
            return 0;
        }
        let numberOfNodes = 1;
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
            numberOfNodes += 1;
        }
        return numberOfNodes;
    }

    headS() {
        if(!this.head) return null;
        return this.head;
    }

    tail () {
        if(!this.head) return null;
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        return current;
    }
    at (index) {
        if( 
            typeof index !== 'number' ||
            !this.head ||
            index > this.size() - 1 ||
            index < 0
        ) {
            return null;
        }
        let currentIndex = 0;
        let current = this.head;
        while(currentIndex < index) {
            current = current.nextNode;
            currentIndex += 1;
        }
        return current;
    }

    pop () {
        if(!this.head) return
        if(!this.head.nextNode){
            this.head = null;
            return
        }
        let prevNode = this.head;
        let current = this.head.nextNode;
        while(current.nextNode) {
            prevNode = current;
            current = current.nextNode;
        }
        prevNode.nextNode = null;
    }

    find (value) {
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.value === value) return index;
            current = current.nextNode;
            index += 1
        }
        return null;
    }

    toString() {
        let list = '';
        let current = this.head;
        while (current) {
            list += current.value;
            list += '->'
            current = current.nextNode;
        }
        list += 'null';
        return list; 
    }
    insertAt(value, index) {
        if(
            typeof index !== 'number' ||
            !this.head ||
            index> this.size() ||
            index < 0
        ) {
            return;
        }
        const newNode = new Node(value);
        if(index === 0){
            newNode.nextNode = this.head;
            this,head = newNode;
            return;
        }
        let currentIndex = 0;
        let prevNode = null;
        let current = this.head;
        while(currentIndex < index) {
            prevNode = current;
            current = current.nextNode;
            currentIndex += 1;
        }
        newNode.nextNode = current;
        prevNode.nextNode = newNode;
    }
    removeAt(index) {
        if(
            typeof index !== 'number' ||
            !this.head ||
            index > this.size() - 1 ||
            index < 0
        ){
            return;
        }
        if(index === 0){
            this.head = this.head.nextNode;
            return;
        }
        let prevNode = null;
        let current = this.head;
        let currentIndex = 0;
        while (currentIndex < index){
            prevNode = current;
            current = current.nextNode;
            currentIndex += 1;
        }
        prevNode.nextNode = current.nextNode;
    }
}

export default LinkedList;