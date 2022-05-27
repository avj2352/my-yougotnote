# Depth first search

DFS is a bold search

We go as deep as we can to look for a value, and when there is nothing new to discover, we retrace our steps to find something new. 

To put it in a term we already know, the **pre-order traversal** of a tree is DFS.

## When to use DFS

### 1. Tree

DFS is essentially pre-order tree traversal.

- Traverse and find/create/modify/delete node
- Traverse with return value (finding max subtree, detect balanced tree)

### 2. Combinatorial problems

DFS/backtracking and combinatorial problems are a match made in heaven (or silver bullet and werewolf 😅). As we will see in the [Combinatorial Search](https://algo.monster/problems/backtracking) module, combinatorial search problems boil down to searching in trees.

- How many ways are there to arrange something
- Find all possible combinations of ...
- Find all solutions to a puzzle

### 3. Graph

Trees are special graphs that have no cycle. We can still use DFS in graphs with cycles. We just have to record the nodes we have visited and avoiding re-visiting them and going into an infinite loop.

- Find a path from point A to B
- Find connected components
- Detect cycles

---

# Problems

## 4. Balanced Binary Tree

A balanced binary tree is defined as a tree such that either it is an empty tree, or both its subtree are balanced and has a height difference of at most 1.

In that case, given a binary tree, determine if it's balanced.

### Parameter

- **tree**: A binary tree.

### Result

- A boolean representing whether the tree given is balanced.

### Approach

- We will use **post order traversal** to solve this

- We will first traverse far left of the tree, call it **leftHeight**

- We will then traverse far right of the tree, call it **rightHeight**

- We will then check for these conditions
  
  - if leftHeight OR rightHeight are -1, then return -1
  
  - if the difference of leftHeight or rightHeight is greater than 1, then return -1
  
  - base case: if the node is null, return 0
  
  - recursive case: return max of leftHeight, rightHeight + 1

```javascript
// tree node
class Node {
    constructor (val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function treeHeight(node) {
    // base case
    if (!node) return 0;
    const leftHeight = treeHeight(node.left);
    const rightHeight = treeHeight(node.right);
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1 ) return -1;
    // recursive case
    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(tree) {
    return treeHeight(tree) !== -1;
}
```

### Space Time Complexity

Time complexity: **O(n)**

---

## 5. Serialize and De-serialize a Tree

Write a function to serialize a Tree into a string and another function to de-serialize a Tree from a string

### Approach

- To serialize, we can simply do a DFS and append the node value to the string.

- We need to encode **null** nodes too since otherwise, we wouldn't be able to tell if we have reached leaf nodes when we deserialize. 

- We use **x** here as a placeholder for the null node.

- To deserialize, we split the string into tokens and consume them.

- For each token we create a new node using the token value.

- When we see an **x**, we know we reached the leaf and return.

### Serialize Function

```javascript
class Node {
    constructor (val, left = null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


// serialize function
function serialize (node, res=[]) {
    // base case
    if (!node) {
        res.push('x');
        return;
    }
    res.push(node.val);
    // recursive
    serialize (node.left, res);
    serialize (node.right, res);
    return res;
}


// main function
function main (root) {
    const result = serialize(root);
    return result.join(' ');
}
```

### De-Serialize Function

```javascript
class Node {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// de-serialize function
function deserialize(list) {
    const val = list.shift();
    // base case
    if (val === 'x') return;
    const curr = new Node(Number(val));
    // recursive case
    curr.left = deserialize(list);
    curr.right = deserialize(list);
    return curr;
}

// main function
function main (text) {
    const result = text.split(' ');
    const root = deserialize(result);
    return root;
}
```

---

## 6. Lowest Common Ancestor (LCA)

[Lowest Common Ancestor of a Binary Search Tree - Leetcode 235 - Python - YouTube](https://www.youtube.com/watch?v=gs2LMfuOR9k&t=1s)

Lowest common ancestor (LCA) of two nodes v and w in a tree is the lowest (i.e. deepest) node that has both v and w as descendants. We also define each node to be a descendant of itself (so if v has a direct connection from w, w is the lowest common ancestor).

Given two nodes of a binary tree, find their lowest common ancestor.


**NOTE:** Lowest common ancestor is where the split occurs between v and w

 Also if we reach the node itself, then it also qualifies to be a LCA

### Assumptions

Current node is the LCA if -

1. *One target node is on the left subtree, the other target node on the right subtree, so the current node itself is the LCA.*
2. *Current node is one of the target and the other node is in a subtree.*

Current node is not the LCA if -

3. *Current node is not a target node and its subtrees has no target node.*
4. *Current node is in the path between the LCA and a target node in case 2.*
5. *LCA is in the subtree of the current node.*

### Approach

To decide whether the current node is the LCA, we need to know which of the above scenarios we are in. We can determine that from the return value of subtrees. Therefore, no states needed.

Having decided on the state and return value, we can now write the DFS.

Time Complexity: **O(n)**

There are **n** nodes and **n - 1** edges in a tree so if we traverse each once then the total traversal is **O(2n - 1)** which is **O(n)**.



```javascript
// recursive
function lca (root, node1, node2) {
    // base case
    if (!root) return;
    if (root === node1 || root === node2) return root;
    // recursive case
    let left = lca (root.left, node1, node2);
    let right = lca (root.right, node1, node2);
    // case #1
    if (left && right) return root;
    // case #4 and #5
    if (left) return left;
    if (right) return right;
    // case #4 not found, return null
    return null;
}
```

### Space Time Complexity

Time: O(log n) - We don't have to visit every node, we visit one level of each node

Space: O(1) - no data-structure required

```javascript
// iterative 
function lca (root, p, q) {
    let curr = root;
    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;    
        } else {
            return curr;
        }    
    }
}
```

---


