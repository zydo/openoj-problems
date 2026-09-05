# Smallest Sum Of A Pair-Safe Array

## Description

You are given two positive integers `n` and `target`.

Call an array pair-safe when all three of these hold:

- the array holds exactly `n` elements;
- its elements are pairwise distinct positive integers;
- no two distinct positions `i` and `j` satisfy
  `nums[i] + nums[j] == target`.

Return the smallest total an array can sum to while staying pair-safe,
modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 4, target = 5
Output: 14
Explanation: The array [1,2,5,6] is pair-safe — its pair sums are 3, 6,
7, 7, 8, and 11, never 5. Values 3 and 4 are unusable next to 1 and 2
(3 + 2 = 5 and 4 + 1 = 5), so 14 is the smallest sum of length 4.
```

### Example 2

```text
Input: n = 3, target = 100
Output: 6
Explanation: [1,2,3] is pair-safe, since no two of its values come
anywhere near summing to 100. No three distinct positive integers have a
smaller total.
```

### Example 3

```text
Input: n = 1, target = 1000000000
Output: 1
Explanation: A one-element array contains no pair at all, so [1] is
pair-safe and the smallest sum is 1.
```

### Constraints

- `1 <= n <= 10⁹`
- `1 <= target <= 10⁹`

## Hints

### Hint 1

Build the answer greedily: append, again and again, the smallest positive
value that keeps the elements distinct and creates no pair summing to
`target`.

### Hint 2

The values `1` through `target / 2` are harmless together — the two
largest distinct ones among them still sum to at most `target - 1` — so
the greedy sweeps that whole prefix up first.

### Hint 3

Each value strictly between `target / 2` and `target` pairs with some
already-taken small value, so the first safe pick after the prefix is
`target` itself; the remaining slots then run consecutively from there.
Add the two arithmetic series and reduce.
