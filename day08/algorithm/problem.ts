/**
 * Day 8 - Algorithm Exercise
 * 
 * Problem: Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * Constraints:
 * - 1 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] consists of only lowercase English letters.
 */

export function longestCommonPrefix(strs: string[]): string {
    // TODO: Implement your solution here
    // Hint: Compare characters one by one from the beginning
    return "";
}

// Alternative solution using sorting
export function longestCommonPrefixSort(strs: string[]): string {
    // TODO: Implement solution using sorting
    // Hint: Sort the array and compare first and last strings
    return "";
}

// Alternative solution using binary search
export function longestCommonPrefixBinarySearch(strs: string[]): string {
    // TODO: Implement solution using binary search
    // Hint: Binary search on the length of the common prefix
    return "";
}

// Test cases
if (require.main === module) {
    console.log('Testing Longest Common Prefix...');

    // Test case 1
    const result1 = longestCommonPrefix(["flower", "flow", "flight"]);
    console.log('Test 1:', result1); // Expected: "fl"

    // Test case 2
    const result2 = longestCommonPrefix(["dog", "racecar", "car"]);
    console.log('Test 2:', result2); // Expected: ""

    // Test case 3
    const result3 = longestCommonPrefix(["interspecies", "interstellar", "interstate"]);
    console.log('Test 3:', result3); // Expected: "inters"

    // Test case 4
    const result4 = longestCommonPrefix(["throne", "throne"]);
    console.log('Test 4:', result4); // Expected: "throne"

    // Test case 5
    const result5 = longestCommonPrefix([""]);
    console.log('Test 5:', result5); // Expected: ""
}
