/**
 * Day 4 - Algorithm Exercise
 * 
 * Problem: Maximum Subarray (Kadane's Algorithm)
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 * 
 * A subarray is a contiguous part of an array.
 * 
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * 
 * Follow up: If you have figured out the O(n) solution, try coding another solution using 
 * the divide and conquer approach, which is more subtle.
 */

export function maxSubArray(nums: number[]): number {
    // TODO: Implement your solution here
    // Hint: Use Kadane's algorithm for O(n) time complexity
    // Keep track of current sum and maximum sum seen so far
    return 0;
}

// Alternative solution using divide and conquer approach
export function maxSubArrayDivideConquer(nums: number[]): number {
    // TODO: Implement divide and conquer solution
    // Hint: Split array in half, find max in left, right, and crossing middle
    return 0;
}

// Test cases
if (require.main === module) {
    console.log('Testing Maximum Subarray...');

    // Test case 1
    const result1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    console.log('Test 1:', result1); // Expected: 6

    // Test case 2
    const result2 = maxSubArray([1]);
    console.log('Test 2:', result2); // Expected: 1

    // Test case 3
    const result3 = maxSubArray([5, 4, -1, 7, 8]);
    console.log('Test 3:', result3); // Expected: 23

    // Test case 4
    const result4 = maxSubArray([-1]);
    console.log('Test 4:', result4); // Expected: -1

    // Test case 5
    const result5 = maxSubArray([-2, -1]);
    console.log('Test 5:', result5); // Expected: -1
}
