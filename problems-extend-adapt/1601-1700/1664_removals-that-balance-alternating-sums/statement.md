# Removals That Balance Alternating Sums

## Description

Call an array **balanced** when the values sitting at even indices (0, 2,
4, …) add up to exactly the values sitting at odd indices (1, 3, 5, …).
Given an integer array `nums`, count the indices whose removal — deleting
exactly that one element — leaves the array balanced.

Deleting an element renumbers everything that came after it: each later
value slides one slot toward the front, which can turn an even index odd
or an odd index even.

### Example 1

```text
Input: nums = [5,2,3,1]
Output: 1
Explanation:
Remove index 0: [2,3,1] -> Even-index sum: 2 + 1 = 3. Odd-index sum: 3. Balanced.
Remove index 1: [5,3,1] -> Even-index sum: 5 + 1 = 6. Odd-index sum: 3. Not balanced.
Remove index 2: [5,2,1] -> Even-index sum: 5 + 1 = 6. Odd-index sum: 2. Not balanced.
Remove index 3: [5,2,3] -> Even-index sum: 5 + 3 = 8. Odd-index sum: 2. Not balanced.
Only removing index 0 leaves the array balanced.
```

### Example 2

```text
Input: nums = [4,4,4]
Output: 3
Explanation: Any of the three removals leaves [4,4], and [4,4] is
balanced.
```

### Example 3

```text
Input: nums = [2,5,8]
Output: 0
```

### Constraints

- The array holds between 1 and 10⁵ values.
- Every value is between 1 and 10⁴.

## Hints

### Hint 1

Only the elements after the removed one are renumbered, and every one of
them flips parity at once — the two sides of the removal point can be
reasoned about separately.

### Hint 2

Sweep the removal point across the array while carrying running even/odd
sums for the prefix and the suffix, so each candidate removal is judged
in constant time.
