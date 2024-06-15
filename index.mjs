import LinkedList from "./linkedList.mjs";

const list = new LinkedList();
list.append(3);
list.append(20);
list.append(30);
list.prepend(2);


console.log(JSON.stringify(list, null, 2));