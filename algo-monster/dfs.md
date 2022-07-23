# Depth First Search

## Important Links

- [Depth First Search / DFS on Tree (algo.monster)](https://algo.monster/)

- To put it in a term we already know, the pre-order traversal of a tree is DFS.

- the following code shows dfs to traverse a binary tree

```javascript
function dfs(root, target) {
    if (!root) return null;
    if (root.val == target) return root;
    // return non-null return value from the recursive calls
    left = dfs(root.left);
    if (left != null) return left;
    right = dfs(root.right);
    // at this point, we know left is null, and right could be null or non-null
    // we return right child's recursive call result directly because
    // - if it's non-null we should return it
    // - if it's null, then both left and right are null, we want to return null
    return right;
}
```

---

## Backtracking and DFS

Backtracking and DFS are similar concepts and essentially the same thing since in DFS you always "backtrack" after exploring a deeper node. It's like saying I program computers by doing coding. If we really want to make the distinction, then backtracking is the concept of retracing and DFS is the algorithm that implements it.

## When to use DFS

### Tree

NOTE:      DFS is essentially pre-order tree traversal.

Traverse and find/create/modify/delete node
Traverse with return value (finding max subtree, detect balanced tree)
Combinatorial problems
DFS/backtracking and combinatorial problems are a match made in heaven (or silver bullet and werewolf 😅). As we will see in the Combinatorial Search module, combinatorial search problems boil down to searching in trees.

- How many ways are there to arrange something
- Find all possible combinations of ...
- Find all solutions to a puzzle

### Graph

Trees are special graphs that have no cycle. We can still use DFS in graphs with cycles. We just have to record the nodes we have visited and avoiding re-visiting them and going into an infinite loop.

- Find a path from point A to B
- Find connected components
- Detect cycles

---

## Template for writing DFS

The following code-snippet is the template to write for Depth first search (especially when dealing with Tree)

- Think from a node's perspective
- When you are a node, the only things you know are 1) your value and 2) how to get to your children. So the recursive function you write manipulates these things.

```javascript
function dfs(node, state):
    if node is null:
        ... // do something - base case
        return

    // recurse    
    left = dfs(node.left, state)
    right = dfs(node.right, state)

        ... // do something - recursive case

    return ... // finally after traversing all the nodes
```

---

# Problems

## 1. Max Depth Level of a Binary Tree

Write a function to find the maximum level / depth of a Binary Tree

### Example

```javascript
// Testing

const root = new Node();
root.val = 5;
const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();

node1.val = 4;
node2.val = 6;
node3.val = 3;
node4.val = 8;

// create tree
node1.left = node3;
node1.right = node4;
root.left = node1;
root.right = node2; 


// Output: 3

// For example: Node 4 is not visible since 5>4, 
// similarly Node 3 is not visible since both 5>3 and 4>3. 
// Node 8 is visible since all 5<=8, 4<=8, and 8<=8.
```

### Approach

- We'll solve this problem, using DFS

- **Base case:** if the node is null, return 0

- **Recursive case:** Get the max of left and right and add 1 to it

```javascript
/*
 * Max depth - Given a binary tree, find it's max depth
 * Max depth of a binary tree is the longest root-to-leaf path.
*/

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// max depth function
function treeMaxDepth(root) {
    // base case 
    if (!root) return 0;
    // recursive case
    return Math.max(treeMaxDepth(root.left), treeMaxDepth(root.right)) + 1;
}
```

### Space Time Complexity

Time Complexity: `O(n)`

There are `n` nodes and `n - 1` edges in a tree so if we traverse each once then the total traversal is `O(2n - 1)` which is `O(n)`.

---

## 2. Visible Tree Node | Number of Visible Nodes

In a binary tree, we define a node "visible" when no node on the root-to-itself path (inclusive) has a greater value. The root is always "visible" since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.

### Example

```javascript
// Testing

const root = new Node();
root.val = 5;
const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();

node1.val = 4;
node2.val = 6;
node3.val = 3;
node4.val = 8;

// create tree
node1.left = node3;
node1.right = node4;
root.left = node1;
root.right = node2; 


// Output: 3
console.log('visible nodes: ', visibleNodes(root));
// For example: Node 4 is not visible since 5>4, 
// similarly Node 3 is not visible since both 5>3 and 4>3. 
// Node 8 is visible since all 5<=8, 4<=8, and 8<=8.
```

### Approach

- We'll solve this problem, using DFS

- For this problem, we'll use 2 variables / states

- One is a `counter`

- The other is the `maxValue`

- Every node we visit, we compare it's value with the `maxValue`

- We increase the counter, only if the `node.val` is greater than `maxValue`

```javascript
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// recursive fn - DFS
function dfs (root, maxValue) {
    // base case
    if (!root) return 0;
    let total = 0;
    if (root.val >= maxValue) total+=1;

    // maxValue for child node is the larger of 
    // previous max and current node val
    total += dfs(root.left, Math.max(maxValue, root.val));
    total += dfs(root.right, Math.max(maxValue, root.val));
    return total;
}

// main
function visibleNodes (root) {    
    return dfs(root, -Infinity);
}
```

### Space Time Complexity

Time Complexity: `O(n)`

There are `n` nodes and `n - 1` edges in a tree so if we traverse each once then the total traversal is `O(2n - 1)` which is `O(n)`.

---

## 3. Balanced Binary Tree

Write a function to check if a Tree is a well **Balanced Binary Tree**

*A balanced binary tree is defined as a tree such that either it is an empty tree, or both its subtree are balanced and has a height difference of at most 1.*

- The function isBalanced, accepts one parameter - **root**
- **root** - The  root node of a binary tree.
- The function returns a boolean representing whether the tree given is balanced.

### Example

```javascript
// Testing

const root = new Node(1);
const node1 = new Node(2);
const node2 = new Node(3); 
const node4 = new Node(5);
const node5 = new Node(6);
const node6 = new Node(7);
const node7 = new Node(8);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node3.right = node6;
node2.right = node5;
node5.left = node7;


// Output: false
console.log('visible nodes: ', isBalanced(root));
// The subtrees of the node labelled 3 has a height difference of 2, 
// so it is not balanced.
```

### Approach

- This question can be solved using a **post-order traversal** on the tree.

- We first traverse through the left nodes of the tree

- We then traverse through the right nodes of the tree

- We check the difference, if it exceeds 1 -> then the tree is not balanced

```javascript
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Returns the height of the binary tree or -1 if it is not a binary tree.
function treeHeight(tree) {
    if (tree == null) return 0;
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(tree) {
    return treeHeight(tree) !== -1;
}
```

### Space Time Complexity

Time Complexity: `O(n)`

There are `n` nodes and `n - 1` edges in a tree so if we traverse each once then the total traversal is `O(2n - 1)` which is `O(n)`.

---

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
