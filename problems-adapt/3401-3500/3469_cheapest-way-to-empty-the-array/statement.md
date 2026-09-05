# Cheapest Way To Empty The Array

## Description

You are given an integer array `nums`. Empty it step by step. While `nums`
holds three or more entries, a step looks only at the first three entries
and removes any two of them, at the cost of the larger of the two values
removed. As soon as fewer than three entries remain, the final step
removes everything left at once, at the cost of the largest remaining
value. Return the smallest total cost reachable by any sequence of steps.

### Example 1

```text
Input: nums = [5,1,4,3]
Output: 8
Explanation: Remove 5 and 4 first, paying 5, which leaves [1,3]. The
final step removes 1 and 3 together, paying 3. The total is 8, and no
plan costs less.
```

### Example 2

```text
Input: nums = [8,2]
Output: 8
Explanation: Fewer than three entries exist from the start, so the single
final step costs max(8, 2) = 8.
```

### Example 3

```text
Input: nums = [7,5,9,3,1]
Output: 15
Explanation: Take 7 and 9 first, paying 9, which leaves [5,3,1]. Take 5
and 3 next, paying 5, which leaves [1]. The last step pays 1. The total
is 9 + 5 + 1 = 15.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Removing never rearranges anything: once two of the front three entries
are gone, whatever is left is an untouched tail of the array with at most
one skipped entry sitting in front of it.

### Hint 2

That shape invites dynamic programming over states — which entry was
skipped, and where the untouched tail begins — with exactly three moves
out of each state: keep one of the front three entries.

### Hint 3

Evaluate the states from the back of the array toward the front; the
value of the initial no-skipped-entry state is the answer.
