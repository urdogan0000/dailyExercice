/**
 * Day 27 - Algorithm Exercise
 * 
 * Problem: Serialize and Deserialize Binary Tree
 */

class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(val: number) { this.val = val; }
}

export class Codec {
    serialize(root: TreeNode | null): string {
        // TODO: BFS with null markers
        return "";
    }

    deserialize(data: string): TreeNode | null {
        // TODO: Rebuild from BFS order
        return null;
    }
}


