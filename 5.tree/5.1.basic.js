// Tree is used to store non-sequencial data, diffirence with HashTable
/**
 * level = the depth
 *  root node is level 0, down the tree, the level increases
 * internal node, external node
 *  internal node has at least 1 child
 *  external node = leaf -> has zero child
 * ancestor
 *  is the parent or grandparent, great-grandparent
 * subtree
 *  consist a node and its descendant
 * height
 *  is the maximum of level
 *
 */

// 1. Binary tree
/**
 * have 2 children including left and right
 * why?
 *  it makes efficient algorithm for insert, search, delete a node from the tree because we know the DIFFERENCE in the left and right
 *    BINARY SEARCH TREE is the special of difference where the left is lesser value, right is the greater value
 */
