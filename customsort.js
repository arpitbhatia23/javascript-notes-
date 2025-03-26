
import { Queue } from "./index.js"

export function testing() {
/* The class "node" represents a node in a linked list with a value and a reference to the next node. */

/* The class `treeNode` represents a node in a binary tree with a value, a left child, and a right
child. */
class treeNode {
  constructor(value){
    this.value=value
    this.right=null
    this.left=null

  }
}

class BTS{
  constructor(){
    this.root=null

  }
  insert(value){
    const newNode=new treeNode(value)
    if(!this.root) {
      this.root=newNode
      console.log("root",this.root)
      return
    }
    let current =this.root
    while(true){
      if(value<current.value){
        if(!current.left){
          current.left=newNode
          return
        }
        current=current.left
      }
      else if (value>current.value){
        if(!current.right){
          current.right=newNode
          return
        }
        current=current.right
      }
      else{
        return
      }
    }
  }
  
  search(value){
    let current=this.root
    while(current){
      if(value===current.value) return true

     current=value<current.value?current.left:current.right

    }
    return false
  }
  printTree(node = this.root, prefix = "", isLeft = true) {
    if (!node) return;

    if (node.right) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left) {
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }

}


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

