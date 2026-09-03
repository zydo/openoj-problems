# Product Sum Of Bit-Counting Sequences

## Description

You are given two integers `m` and `k`, and an integer array `nums`.

A sequence of indices `seq` counts as valid when:

- `seq` holds exactly `m` entries;
- every entry satisfies `0 <= seq[i] < nums.length`;
- the binary form of `2^seq[0] + 2^seq[1] + ... + 2^seq[m - 1]` carries
  exactly `k` set bits.

Weigh each valid sequence by its array product,
`prod(seq) = nums[seq[0]] * nums[seq[1]] * ... * nums[seq[m - 1]]`.

Return the total weight of all valid sequences, modulo `10⁹ + 7`.

A set bit is a binary digit whose value is `1`.

### Example 1

```text
Input: m = 2, k = 1, nums = [3,4]
Output: 25
Explanation: With two entries the power sum 2^seq[0] + 2^seq[1] holds a
single set bit only when both entries match: [0,0] sums to 1 + 1 = 2 and
weighs 3 × 3 = 9, while [1,1] sums to 2 + 2 = 4 and weighs 4 × 4 = 16.
The total is 9 + 16 = 25.
```

### Example 2

```text
Input: m = 1, k = 1, nums = [7,9]
Output: 16
Explanation: Both single-entry sequences qualify: [0] sums to 2⁰ = 1 and
weighs 7, [1] sums to 2¹ = 2 and weighs 9, so the answer is 7 + 9 = 16.
```

### Example 3

```text
Input: m = 3, k = 2, nums = [2,3]
Output: 89
Explanation: Five sequences carry exactly two set bits. [0,0,0] sums to
3 = 11₂ and weighs 2 × 2 × 2 = 8; [1,1,1] sums to 6 = 110₂ and weighs
27; and the three orderings of [0,1,1] each sum to 5 = 101₂ and weigh
2 × 3 × 3 = 18. The total is 8 + 27 + 3 × 18 = 89.
```

### Constraints

- `1 <= k <= m <= 30`
- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 10⁸`

## Hints

### Hint 1

The power sum only depends on how many copies of each index the sequence
uses, so work with counts: `C(m-j, c)` orderings scatter `c` copies of an
index, and `nums[i]^c` carries their product weight.

### Hint 2

Sweep the indices left to right while carrying the still-unsettled high
bits of the running sum — every bit below the current index is final,
because later terms only add multiples of `2^i`.

### Hint 3

Keep the state `(j, b, mask)`: `j` entries placed, `b` set bits already
settled, and `mask = S >> i`, the window of higher bits later copies can
still disturb; it never grows past five bits for `m <= 30`.

### Hint 4

Stepping past an index with `c` copies adds `c` to the window, settles
the bit `(mask + c) & 1`, shifts the window right, and multiplies the
state by `C(m-j, c) · nums[i]^c` — drop any state whose settled-plus-
window bit count can no longer reach `k`.
