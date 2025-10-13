/**
 * Day 10 - Algorithm Exercise
 * 
 * Problem: Search Insert Position
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the 
 * target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums contains distinct values sorted in ascending order.
 * - -10^4 <= target <= 10^4
 */

export function searchInsert(nums: number[], target: number): number {
    // TODO: Implement your solution here
    // Hint: Use binary search for O(log n) time complexity
    return 0;
}

// Alternative solution using linear search (O(n) - not optimal but simpler)
export function searchInsertLinear(nums: number[], target: number): number {
    // TODO: Implement linear search solution
    // Hint: Iterate through array and find the first element >= target
    return 0;
}

// Alternative solution using built-in binary search
export function searchInsertBuiltIn(nums: number[], target: number): number {
    // TODO: Implement using built-in binary search methods
    // Hint: Use binarySearch or similar built-in functions
    return 0;
}

// Test cases
if (require.main === module) {
    console.log('Testing Search Insert Position...');

    // Test case 1
    const result1 = searchInsert([1, 3, 5, 6], 5);
    console.log('Test 1:', result1); // Expected: 2

    // Test case 2
    const result2 = searchInsert([1, 3, 5, 6], 2);
    console.log('Test 2:', result2); // Expected: 1

    // Test case 3
    const result3 = searchInsert([1, 3, 5, 6], 7);
    console.log('Test 3:', result3); // Expected: 4

    // Test case 4
    const result4 = searchInsert([1, 3, 5, 6], 0);
    console.log('Test 4:', result4); // Expected: 0

    // Test case 5
    const result5 = searchInsert([1], 1);
    console.log('Test 5:', result5); // Expected: 0

    // Test case 6
    const result6 = searchInsert([1], 2);
    console.log('Test 6:', result6); // Expected: 1
}
