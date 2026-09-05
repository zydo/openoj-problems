# Removing Pairs At One Score I

## Description

You are given an integer array `nums`.

While `nums` holds at least two elements, you may repeatedly delete its first
two elements. A deletion's score is the sum of the two elements removed, and
every deletion in the whole sequence must produce the same score.

Return the greatest number of deletions that can be performed this way.

### Example 1

```text
Input: nums = [4,1,2,3,5,6]
Output: 2
Explanation: The first deletion removes 4 and 1 for a score of 5, leaving
[2,3,5,6]. The next pair sums to 2 + 3 = 5, matching the score, and after
it the array is [5,6]. The final pair sums to 11, which differs from 5, so
no third deletion is allowed and the answer is 2.
```

### Example 2

```text
Input: nums = [2,2,2,2,2,2]
Output: 3
Explanation: Every pair of twos sums to 4, so the array can be emptied by
three deletions that all share the same score.
```

### Example 3

```text
Input: nums = [1,3,2,2,7]
Output: 2
Explanation: The first deletion scores 1 + 3 = 4 and the second scores
2 + 2 = 4. The single element left over cannot be deleted, so the answer
is 2.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 1000`
