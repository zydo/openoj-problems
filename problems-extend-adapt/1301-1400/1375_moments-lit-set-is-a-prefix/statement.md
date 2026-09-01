# Moments the Lit Set Is a Prefix

## Description

A panel of `n` switches, numbered `1` through `n`, starts with every switch
off. The array `flips` is a permutation of the numbers `1` to `n` that fixes
the order in which they are turned on: during step `i` (counting from `1`),
switch `flips[i]` is switched on and is never touched again.

The panel is prefix-lit after step `i` when the switches that are on are
exactly `1, 2, ..., i` — a gapless block at the left end of the panel, with
every other switch still off.

Return how many of the steps leave the panel prefix-lit.

### Example 1

```text
Input: flips = [1,3,2]
Output: 2
Explanation: The panel starts as "000".
After step 1 it reads "100": switch 1 is on, so the panel is prefix-lit.
After step 2 it reads "101": switch 2 is still off, so it is not.
After step 3 it reads "111": switches 1 through 3 are all on, so it is
prefix-lit again.
The panel ended up prefix-lit after 2 of the 3 steps.
```

### Example 2

```text
Input: flips = [2,3,4,1]
Output: 1
Explanation: The panel starts as "0000".
After step 1 it reads "0100" — not prefix-lit.
After step 2 it reads "0110" — not prefix-lit.
After step 3 it reads "0111" — not prefix-lit.
After step 4 it reads "1111" — prefix-lit.
Only the final step leaves the panel prefix-lit.
```

### Constraints

- `1 <= flips.length <= 5 * 10^4`
- `flips` contains every integer from `1` to `flips.length` exactly once.

## Hints

### Hint 1

The lit set is exactly `1..i` precisely when the largest position switched on
so far equals `i`, so a running maximum is all you need.
