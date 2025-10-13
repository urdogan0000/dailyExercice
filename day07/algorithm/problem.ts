/**
 * Day 7 - Algorithm Exercise
 * 
 * Problem: Binary Tree Inorder Traversal
 * 
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Inorder traversal: Left -> Root -> Right
 * 
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 * 
 * Example 2:
 * Input: root = []
 * Output: []
 * 
 * Example 3:
 * Input: root = [1]
 * Output: [1]
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */

// Definition for a binary tree node
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

export function inorderTraversal(root: TreeNode | null): number[] {
    // TODO: Implement your solution here
    // Hint: Use recursion or iterative approach with a stack
    return [];
}

// Recursive solution
export function inorderTraversalRecursive(root: TreeNode | null): number[] {
    // TODO: Implement recursive solution
    return [];
}

// Iterative solution using stack
export function inorderTraversalIterative(root: TreeNode | null): number[] {
    // TODO: Implement iterative solution
    // Hint: Use a stack to simulate the recursive call stack
    return [];
}

// Helper function to create a binary tree from an array
export function createBinaryTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue: TreeNode[] = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift()!;

        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]!);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]!);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

// Test cases
if (require.main === module) {
    console.log('Testing Binary Tree Inorder Traversal...');

    // Test case 1
    const root1 = createBinaryTree([1, null, 2, 3]);
    const result1 = inorderTraversal(root1);
    console.log('Test 1:', result1); // Expected: [1, 3, 2]

    // Test case 2
    const root2 = createBinaryTree([]);
    const result2 = inorderTraversal(root2);
    console.log('Test 2:', result2); // Expected: []

    // Test case 3
    const root3 = createBinaryTree([1]);
    const result3 = inorderTraversal(root3);
    console.log('Test 3:', result3); // Expected: [1]

    // Test case 4
    const root4 = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    const result4 = inorderTraversal(root4);
    console.log('Test 4:', result4); // Expected: [4, 2, 5, 1, 6, 3, 7]
}
