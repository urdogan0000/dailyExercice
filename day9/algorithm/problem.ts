/**
 * Day 9 - Algorithm Exercise
 * 
 * Problem: Remove Duplicates from Sorted Array
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates 
 * in-place such that each unique element appears only once. The relative order of the 
 * elements should be kept the same.
 * 
 * Since it is impossible to change the length of the array in some languages, you must 
 * instead have the result be placed in the first part of the array nums. More formally, 
 * if there are k elements after removing the duplicates, then the first k elements of 
 * nums should hold the final result. It does not matter what you leave beyond the first k elements.
 * 
 * Return k after placing the final result in the first k slots of nums.
 * 
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * 
 * Example 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * 
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order.
 */

export function removeDuplicates(nums: number[]): number {
    // TODO: Implement your solution here
    // Hint: Use two pointers - one for current position, one for next unique element
    return 0;
}

// Alternative solution using Set (if allowed to use extra space)
export function removeDuplicatesWithSet(nums: number[]): number[] {
    // TODO: Implement solution using Set
    // Note: This creates a new array, not in-place
    return [];
}

// Test cases
if (require.main === module) {
    console.log('Testing Remove Duplicates from Sorted Array...');

    // Test case 1
    const nums1 = [1, 1, 2];
    const result1 = removeDuplicates(nums1);
    console.log('Test 1 - Length:', result1, 'Array:', nums1); // Expected: 2, [1, 2, _]

    // Test case 2
    const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result2 = removeDuplicates(nums2);
    console.log('Test 2 - Length:', result2, 'Array:', nums2); // Expected: 5, [0,1,2,3,4,_,_,_,_,_]

    // Test case 3
    const nums3 = [1, 2, 3, 4, 5];
    const result3 = removeDuplicates(nums3);
    console.log('Test 3 - Length:', result3, 'Array:', nums3); // Expected: 5, [1,2,3,4,5]

    // Test case 4
    const nums4 = [1, 1, 1, 1];
    const result4 = removeDuplicates(nums4);
    console.log('Test 4 - Length:', result4, 'Array:', nums4); // Expected: 1, [1,_,_,_]
}
