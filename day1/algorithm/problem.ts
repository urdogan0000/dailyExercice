/**
 * Day 1 - Algorithm Exercise
 * 
 * Problem: Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the 
 * same element twice.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 */

export function twoSum(nums: number[], target: number): number[] {
    // TODO: Implement your solution here
    // Hint: Consider using a hash map for O(n) time complexity
    return [];
}

// Test cases
if (require.main === module) {
    console.log('Testing Two Sum...');

    // Test case 1
    const result1 = twoSum([2, 7, 11, 15], 9);
    console.log('Test 1:', result1); // Expected: [0, 1]

    // Test case 2
    const result2 = twoSum([3, 2, 4], 6);
    console.log('Test 2:', result2); // Expected: [1, 2]

    // Test case 3
    const result3 = twoSum([3, 3], 6);
    console.log('Test 3:', result3); // Expected: [0, 1]
}
