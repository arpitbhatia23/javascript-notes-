
import { Queue,BTS } from "./index.js"

export function testing() {
/* The class "node" represents a node in a linked list with a value and a reference to the next node. */

/* The class `treeNode` represents a node in a binary tree with a value, a left child, and a right
child. */



const bts=new BTS()
bts.insert(10);
bts.insert(5);

bts.insert(15);bts.insert(25);
bts.insert(20);
bts.insert(35);

bts.insert(3);
bts.insert(4);
bts.insert(2);
bts.insert(1);
bts.insert(0);


bts.insert(7);
bts.insert(12);

bts.printTree()
console.time()
console.log( bts.search(10));
console.timeEnd()



}

