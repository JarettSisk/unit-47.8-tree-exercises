/** BinaryTreeNode: node for a general tree. */

const { all } = require("express/lib/application");
const res = require("express/lib/response");
const { nodes } = require("nunjucks");
const { le } = require("nunjucks/src/tests");

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
      // if empty tree, return 0;
      if(this.root === null) return 0;

      let nodeQueue = [this.root];
      let minDepth = 1;

      // while items in the queue
      while(nodeQueue.length) {
        // get the first item in the queue
        let current = nodeQueue.shift();
        // if neither left or right is null
        if(current.left && current.right) {
          // add them to the queue
          nodeQueue.push(current.left);
          nodeQueue.push(current.right);
          // add 1 to the depth
          minDepth++
        } else {
          return minDepth;

        }
      }
      


    }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // empty tree, return 0
    if(this.root === null) return 0;

    let nodeQueue = [this.root];
    let depth = 1;

    while(nodeQueue.length) {
      let current = nodeQueue.shift();

      if(current.left && current.right) {
        nodeQueue.push(current.left);
        nodeQueue.push(current.right);
        depth++;
      }
      else if(current.left && !current.right) {
        nodeQueue.push(current.left);
        depth++;
      }
      else if(!current.left && current.right) {
        nodeQueue.push(current.right);
        depth++;
      }
    }
    return depth;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // this is a rather long winded solution, but it seems to work.
    if(this.root === null) return 0;
    function getSum(node) {
      let allNodes = [node];
      let stack = [node];
      // add all the nodes to allNodes
      while(stack.length) {
        let current = stack.pop();
        if(current.left && current.right) {
          // add both
          stack.push(current.left);
          stack.push(current.right);
          allNodes.push(current.left);
          allNodes.push(current.right);
        } else if(current.left && !current.right) {
          stack.push(current.left);
          allNodes.push(current.left);
        }
        else if(!current.left && current.right) {
          stack.push(current.right);
          allNodes.push(current.right);
        }
      }
      // now that we have all the nodes. We can cycle through and sum them up.
      let sum = 0;
      while(allNodes.length) {
        let current = allNodes.pop();
        if(current.left && current.right) {
          // console.log(`c: ${current.val}, L: ${current.left.val} R: ${current.right.val}`)
          sum += Math.max(0, current.left.val, current.right.val);
          // console.log(sum);
        }
        
      }
      // adding sum along with out top val.
      return sum + node.val;
    }

    let root = this.root;
    // sum up the best path on the left side
    let leftSum = getSum(root.left);
    //sum up the best path on the right side
    let rightSum = getSum(root.right);

    return Math.max(0, root.val + leftSum + rightSum)
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    // empty tree, return 0
    if(this.root === null) return null;

    let nodeQueue = [this.root];
    let nextLarger = this.root.val;

    while(nodeQueue.length) {
      let current = nodeQueue.shift();

      if(current.left && current.right) {
        nodeQueue.push(current.left);
        nodeQueue.push(current.right);
        
      }
      else if(current.left && !current.right) {
        nodeQueue.push(current.left);
        depth++;
      }
      else if(!current.left && current.right) {
        nodeQueue.push(current.right);
        depth++;
      }

      if(current.val > lowerBound && current.val < nextLarger) {
        nextLarger = current.val;
      }
    }
    if(nextLarger > lowerBound) {
      return nextLarger;
    } else {
      return null;
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
