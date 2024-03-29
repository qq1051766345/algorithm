/* 
给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，
使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构 
(即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。
所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。
*/

import TreeNode from "../二叉树遍历/144. 二叉树的前序遍历";

// 递归法
/* function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) return null;
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high); 
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
} */

// 迭代法
function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  //  处理头节点不在范围内的情况
  if (!root) return null;
  while (root && (root.val < low || root.val > high)) {
    if (root.val > high) {
      root = root.left;
    } else if (root.val < low) {
      root = root.right;
    }
  }
  let curNode:TreeNode | null = root;
    // 处理左孩子小于low的情况
    while (curNode) {
      while(curNode.left && curNode.left.val < low){
        curNode.left = curNode.left.right;
      }
      curNode = curNode.left;
    }
    curNode = root;
    // 处理右孩子大于high的情况
    while(curNode){
      while(curNode.right && curNode.right.val > high){
        curNode.right = curNode.right.left;
      }
      curNode = curNode.right;
    }
  return root;
}
