/**
 * Day 3 - Algorithm Exercise
 *
 * Problem: Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50].
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order.
 */

// Definition for singly-linked list
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(-1);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}

// Helper function to create a linked list from an array
export function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array
export function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// Test cases
if (require.main === module) {
  console.log("Testing Merge Two Sorted Lists...");

  // Test case 1
  const list1 = createLinkedList([1, 2, 4]);
  const list2 = createLinkedList([1, 3, 4]);
  const merged1 = mergeTwoLists(list1, list2);
  console.log("Test 1:", linkedListToArray(merged1)); // Expected: [1,1,2,3,4,4]

  // Test case 2
  const list3 = createLinkedList([]);
  const list4 = createLinkedList([]);
  const merged2 = mergeTwoLists(list3, list4);
  console.log("Test 2:", linkedListToArray(merged2)); // Expected: []

  // Test case 3
  const list5 = createLinkedList([]);
  const list6 = createLinkedList([0]);
  const merged3 = mergeTwoLists(list5, list6);
  console.log("Test 3:", linkedListToArray(merged3)); // Expected: [0]
}
