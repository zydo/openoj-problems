# Largest Subarray Product

## Description

A *block* of `nums` is a run of one or more consecutive entries. Multiply the
entries of a block together and you get its product; return the largest product
any block of `nums` achieves.

A block of one entry is allowed, and its product is that entry, so an array
whose best block is a lone negative value answers with that negative value.

Every block's product is small enough to hold in a signed 32-bit integer.

### Example 1

```text
Input: nums = [3,-1,-4,2]
Output: 24
Explanation: The whole array multiplies to 24 — the two negatives cancel. The
best block containing no negative value is just [3].
```

### Example 2

```text
Input: nums = [-5,0,7,-2]
Output: 7
Explanation: The zero cuts the array in two, and no block spanning it can beat
the single entry 7 on the right.
```

### Example 3

```text
Input: nums = [-6]
Output: -6
Explanation: One entry, one block, and the answer is negative.
```

### Constraints

- `nums` holds `n` entries with `1 <= n <= 2 * 10⁴`
- each entry lies between `-10` and `10` inclusive
- the tests are built so that no block's product overflows a 32-bit integer

## Hints

### Hint 1

Try to carry a running "best product of a block ending here" the way you would
for sums, and watch it break: one negative entry turns the best chain so far
into the worst.

### Hint 2

That failure is also the fix. Carry *two* running values, the largest and the
smallest product of a block ending at the current entry, since a negative entry
converts one into the other.

### Hint 3

At each entry the candidates are the same two as always — begin a fresh block
here, or extend the previous one — so both running values update in constant
time, and the overall answer is the largest value the maximum ever takes.
