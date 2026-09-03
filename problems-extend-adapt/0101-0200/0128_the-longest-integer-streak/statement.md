# The Longest Integer Streak

## Description

You are given an unsorted integer array `nums`. Among the distinct values
it holds, some chain together as `v`, `v + 1`, `v + 2`, … — a streak of
integers that each differ from their neighbor by exactly one. Report the
length of the longest streak anywhere in the array.

Position and repetition mean nothing: streak members need not sit
anywhere near each other in `nums`, and duplicates simply collapse into
one value. An empty array holds no streak, so its answer is `0`.

Design your approach to run in `O(n)` time — a sort-first solution works
but is slower than the problem asks for.

### Example 1

```text
Input: nums = [9,-3,7,8,2,-2,6]
Output: 4
Explanation: The values 6, 7, 8 and 9 chain into a streak of four; the
pair -3, -2 manages only two.
```

### Example 2

```text
Input: nums = [40,41,42,44,45,7]
Output: 3
Explanation: The streak 40, 41, 42 breaks at 43, so 44, 45 only reaches
two and the lone 7 stands by itself.
```

### Example 3

```text
Input: nums = [-1,-2,-3,5,6,7,8]
Output: 4
Explanation: The negatives chain too — -3, -2, -1 is a streak of three —
but 5, 6, 7, 8 wins with four.
```

### Constraints

- `0 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
