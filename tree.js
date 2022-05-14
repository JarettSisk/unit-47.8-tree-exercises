/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(this.root === null) return 0;
    // create the nodeQueue and add the root.
    const nodeQueue = [this.root];
    let sum = 0;
    while(nodeQueue.length) {
      // remove and get the first value from the nodeQueue
      let current = nodeQueue.shift();
      // add the current nodes val to the sum
      sum += current.val;
      console.log(sum);

      // loop through each child and add them,
      for(let child of current.children) {
        nodeQueue.push(child);
      }
  }
  return sum;
}

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(this.root === null) return 0;
    // create the nodeQueue and add the root.
    const nodeQueue = [this.root];
    let count = 0;
    while(nodeQueue.length) {
      // remove and get the first value from the nodeQueue
      let current = nodeQueue.shift();
      // add the current nodes val to the sum
      if(current.val % 2 === 0) {
        count++
      }

      // loop through each child and add them,
      for(let child of current.children) {
        nodeQueue.push(child);
      }
  }
  return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
        // empty tree, return 0
        if(this.root === null) return 0;
        let count = 0;
        let nodeQueue = [this.root];
        while(nodeQueue.length) {
          let current = nodeQueue.shift();
          // loop through each child and add them to the queue,
          for(let child of current.children) {
            nodeQueue.push(child);
          }
    
          if(current.val > lowerBound) {
            count++;
          }
        }
        return count;
  }
}

module.exports = { Tree, TreeNode };
