# Peak XOR Of Kindred Pairs II

## Description

Work with an integer array `nums`. Two values `x` and `y` make a kindred
pair when neither outruns the other by more than half of the smaller
one — formally, when `|x - y| <= min(x, y)`. Equivalently, after lining
the two up so that `x` is the smaller, `y <= 2 * x`: a kindred pair's
values live within a factor of two of each other.

Choose two values from `nums` that form a kindred pair, aiming to make
their bitwise XOR as large as it can be. Return that largest XOR over
all kindred pairs the array can offer.

A value may be paired with itself, so every element alone already forms
the kindred pair `(v, v)` with XOR zero.

### Example 1

```text
Input: nums = [6,4,11]
Output: 13
Explanation: The kindred pairs here include (4, 4), (4, 6), (6, 6),
(6, 11), and (11, 11) — but not (4, 11), since 11 - 4 = 7 exceeds
min(4, 11) = 4. The best XOR among the valid pairs is 6 XOR 11 = 13.
```

### Example 2

```text
Input: nums = [7,7,13]
Output: 10
Explanation: 13 - 7 = 6 does not exceed 7, so (7, 13) is kindred and
its XOR 7 XOR 13 = 10 beats every self-pair's zero.
```

### Example 3

```text
Input: nums = [40,90]
Output: 0
Explanation: 90 - 40 = 50 is larger than 40, so the two values cannot
pair with each other. Only the self-pairs (40, 40) and (90, 90)
remain, and both yield 0.
```

### Constraints

- `1 <= nums.length <= 5 * 10^4`
- `1 <= nums[i] <= 2^20 - 1`

## Hints

### Hint 1

Sort the values. Writing the smaller of the pair as `x` turns the
condition into `y - x <= x`, that is `y <= 2 * x` — a bounded window
over the sorted order.

### Hint 2

Sweep the sorted values and keep a sliding window of candidates in
`[ceil(y / 2), y]` for each `y`: the left edge only moves forward, so
two pointers suffice.

### Hint 3

A binary trie over the 20 value bits, with a live count in every node,
answers each window query: walk `y` down from the top bit, stepping
into the opposite-bit subtree whenever it still holds a live value.
