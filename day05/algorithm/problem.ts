/**
 * Day 5 - Algorithm Exercise
 * 
 * Problem: Climbing Stairs
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * Constraints:
 * - 1 <= n <= 45
 */

export function climbStairs(n: number): number {
    // TODO: Implement your solution here
    // Hint: This is a Fibonacci sequence problem
    // Think about: ways(n) = ways(n-1) + ways(n-2)
    return 0;
}

// Alternative solution using dynamic programming with memoization
export function climbStairsMemo(n: number): number {
    // TODO: Implement memoized solution
    // Hint: Use a map or array to store previously computed results
    return 0;
}

// Alternative solution using iterative approach (space optimized)
export function climbStairsIterative(n: number): number {
    // TODO: Implement iterative solution
    // Hint: Only keep track of the last two values
    return 0;
}

// Test cases
if (require.main === module) {
    console.log('Testing Climbing Stairs...');

    // Test case 1
    const result1 = climbStairs(2);
    console.log('Test 1:', result1); // Expected: 2

    // Test case 2
    const result2 = climbStairs(3);
    console.log('Test 2:', result2); // Expected: 3

    // Test case 3
    const result3 = climbStairs(4);
    console.log('Test 3:', result3); // Expected: 5

    // Test case 4
    const result4 = climbStairs(5);
    console.log('Test 4:', result4); // Expected: 8

    // Test case 5
    const result5 = climbStairs(1);
    console.log('Test 5:', result5); // Expected: 1
}
