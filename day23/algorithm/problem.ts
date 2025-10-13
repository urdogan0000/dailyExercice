/**
 * Day 23 - Algorithm Exercise
 * 
 * Problem: Course Schedule (Detect Cycle in Directed Graph)
 */

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // TODO: Graph + DFS with coloring or Kahn's algorithm
    return false;
}

if (require.main === module) {
    console.log(canFinish(2, [[1, 0]])); // true
    console.log(canFinish(2, [[1, 0], [0, 1]])); // false
}


