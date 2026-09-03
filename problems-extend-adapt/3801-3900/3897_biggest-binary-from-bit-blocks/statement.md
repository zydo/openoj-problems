# The Biggest Binary From Bit Blocks

## Description

You receive two equally long integer arrays, `nums1` and `nums0`. Together
they describe `n` blocks of bits: block `i` is the run formed by writing
`nums1[i]` ones and then following them with `nums0[i]` zeros.

You control the lineup — the blocks may be laid end to end in any order you
like, and the result reads as one binary string. Treat that string as a
binary number and make its integer value as large as you can.

Return the greatest achievable value. Because the true number can grow
enormous, report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums1 = [2, 1], nums0 = [1, 2]
Output: 52
Explanation: The blocks are "110" (two ones then one zero) and "100" (one
one then two zeros). Laying "110" first and "100" second builds "110100",
whose binary value is 52, and no other arrangement beats it.
```

### Example 2

```text
Input: nums1 = [1, 1], nums0 = [1, 1]
Output: 10
Explanation: Both blocks read "10", so every order produces "1010", worth
10.
```

### Example 3

```text
Input: nums1 = [1], nums0 = [2]
Output: 4
Explanation: A lone block "100" cannot be reordered, and its value is 4.
```

### Constraints

- `1 <= n == nums1.length == nums0.length <= 10⁵`
- `0 <= nums1[i], nums0[i] <= 10⁴`
- `nums1[i] + nums0[i] > 0`
- The total sum of all elements in nums1 and nums0 does not exceed `2 * 10⁵`.

## Hints

### Hint 1

The overall bit count never changes with rearrangement, so the best lineup
is simply the lexicographically largest concatenated string.

### Hint 2

Blocks made only of ones must lead — their ones lengthen every later block's
one-run — and blocks made only of zeros belong at the end.

### Hint 3

Between the mixed blocks, prefer the one with more ones; break ties by the
shorter zero-run, which reaches the next block's ones sooner.
