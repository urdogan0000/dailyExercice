/**
 * Day 6 - Algorithm Exercise
 * 
 * Problem: Best Time to Buy and Sell Stock
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve 
 * any profit, return 0.
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * 
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 * 
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^4
 */

export function maxProfit(prices: number[]): number {
    // TODO: Implement your solution here
    // Hint: Keep track of minimum price seen so far and maximum profit
    return 0;
}

// Alternative solution using two pointers
export function maxProfitTwoPointers(prices: number[]): number {
    // TODO: Implement two pointers solution
    // Hint: Use left pointer for buy day, right pointer for sell day
    return 0;
}

// Test cases
if (require.main === module) {
    console.log('Testing Best Time to Buy and Sell Stock...');

    // Test case 1
    const result1 = maxProfit([7, 1, 5, 3, 6, 4]);
    console.log('Test 1:', result1); // Expected: 5

    // Test case 2
    const result2 = maxProfit([7, 6, 4, 3, 1]);
    console.log('Test 2:', result2); // Expected: 0

    // Test case 3
    const result3 = maxProfit([1, 2, 3, 4, 5]);
    console.log('Test 3:', result3); // Expected: 4

    // Test case 4
    const result4 = maxProfit([2, 4, 1]);
    console.log('Test 4:', result4); // Expected: 2

    // Test case 5
    const result5 = maxProfit([1]);
    console.log('Test 5:', result5); // Expected: 0
}
