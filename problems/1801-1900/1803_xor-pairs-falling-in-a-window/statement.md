# XOR Pairs Falling in a Window

## Description

Given a 0-indexed integer array `nums` and two integers `low` and `high`,
count the pairs `(i, j)` with `0 <= i < j < nums.length` whose exclusive
or lands inside the window — that is, `low <= nums[i] XOR nums[j] <= high`.
Return that count.

### Example 1

```text
Input: nums = [3,10,5,25,2,8], low = 4, high = 19
Output: 10
Explanation: Of the 15 index pairs, exactly 10 produce an in-window xor:
(0,1) gives 9, (0,2) gives 6, (0,5) gives 11, (1,2) gives 15, (1,3) gives
19, (1,4) gives 8, (2,4) gives 7, (2,5) gives 13, (3,5) gives 17, and
(4,5) gives 10. The five remaining pairs xor to 26, 1, 2, 28, and 27 —
all outside [4, 19].
```

### Example 2

```text
Input: nums = [7,1,15,3], low = 1, high = 6
Output: 3
Explanation: The qualifying pairs are (0,1) with 7 XOR 1 = 6, (0,3) with
7 XOR 3 = 4, and (1,3) with 1 XOR 3 = 2. The other three pairs give 8,
14, and 12, which overshoot the window.
```

### Example 3

```text
Input: nums = [5], low = 1, high = 100
Output: 0
Explanation: A single element forms no pairs at all.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] <= 2 * 10⁴`
- `1 <= low <= high <= 2 * 10⁴`

## Hints

### Hint 1

A window splits into two prefix questions: pairs with `low <= xor <= high`
number `f(high) - f(low - 1)`, where `f(K)` counts the pairs whose xor is
at most `K`.

### Hint 2

Answer "how many earlier values xor with `x` into at most `K`" with a
binary trie over the 15 value bits (every value is below 2¹⁵). Walk down
beside `K` bit by bit: whenever `K`'s bit is 1, the entire subtree that
keeps the xor prefix equal so far is small enough to take wholesale, and
the search continues down the other child.

### Hint 3

Count each element against the trie before inserting it, so every
unordered pair is tallied exactly once.
