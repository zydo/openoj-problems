# Value Counts Along The Chain

## Description

The head of a linked list is handed to you, and its values make up exactly
`k` distinct numbers.

Count how often each distinct value occurs, then build a new linked list of
length `k` whose nodes carry those counts, placed in the order their values
first appear along the original chain. Return the head of the new list.

### Example 1

```text
Input: head = [4,4,7,4,7,9]
Output: [3,2,1]
Explanation:
The list holds 3 distinct values. Value 4 shows up 3 times, value 7 shows up twice and value 9 once. Reading them by first appearance (4, then 7, then 9), the result list is 3 -> 2 -> 1.
```

### Example 2

```text
Input: head = [5,5,5]
Output: [3]
Explanation:
A single distinct value makes up the whole list and it occurs 3 times, so the result is the lone node 3.
```

### Example 3

```text
Input: head = [2,3,2,3,9,9,1]
Output: [2,2,2,1]
Explanation:
Four distinct values first appear in the order 2, 3, 9, 1, and their counts run 2, 2, 2, 1. Hence the result list is 2 -> 2 -> 2 -> 1.
```

### Constraints

- The number of nodes in the list is in the range `[1, 10⁵]`.
- `1 <= Node.val <= 10⁵`

## Hints

### Hint 1

One pass with a hash map tallies how often each value occurs; remembering
each value the first time it is seen keeps the output order for free.
