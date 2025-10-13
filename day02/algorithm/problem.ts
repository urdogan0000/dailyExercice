/**
 * Day 2 - Algorithm Exercise
 * 
 * Problem: Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only '()[]{}'.
 */

export function isValid(s: string): boolean {
    // TODO: Implement your solution here
    // Hint: Use a stack data structure
    return false;
}

// Test cases
if (require.main === module) {
    console.log('Testing Valid Parentheses...');

    // Test case 1
    const result1 = isValid("()");
    console.log('Test 1:', result1); // Expected: true

    // Test case 2
    const result2 = isValid("()[]{}");
    console.log('Test 2:', result2); // Expected: true

    // Test case 3
    const result3 = isValid("(]");
    console.log('Test 3:', result3); // Expected: false

    // Test case 4
    const result4 = isValid("([)]");
    console.log('Test 4:', result4); // Expected: false
}
