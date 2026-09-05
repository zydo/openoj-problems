# Smallest Absent Positive

## Description

Given an integer array `nums` in no particular order, return the least
positive integer that does not appear anywhere in it.

Your method must finish in `O(n)` time using only `O(1)` extra space beyond
the array itself.

### Example 1

```text
Input: nums = [4,1,2,5]
Output: 3
Explanation: 1 and 2 are here, 3 is not.
```

### Example 2

```text
Input: nums = [-7,0,-2]
Output: 1
Explanation: Nothing positive appears at all, so even 1 is absent.
```

### Example 3

```text
Input: nums = [2,1,3]
Output: 4
Explanation: 1, 2 and 3 all appear, so the least absent positive is one past
the length of the array.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`

## Hints

### Hint 1

With `n` slots to fill, the answer can never exceed `n + 1`. Anything outside
`1..n` — negatives, zeros, huge values, repeats — cannot be the answer and
cannot rule one out either.

### Hint 2

If space were free you would mark presence in a table indexed `1..n`. You are
allowed no table, but you do have `n` slots of storage sitting right there.

### Hint 3

Read slot `i` as the claim "the value `i + 1` is present". Move each in-range
value to the slot that would claim it, by swapping, and stop as soon as a slot
already holds its own value — that guard is what keeps repeats from looping.

### Hint 4

Two linear passes are still linear. The second one just walks the slots and
reports the first broken claim.
