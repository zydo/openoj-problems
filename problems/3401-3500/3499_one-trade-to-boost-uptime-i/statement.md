# One Trade To Boost Uptime I

## Description

A binary string `s` of length `n` records stretches of operation: `'1'` is
an up stretch, `'0'` a down stretch.

You may perform at most one trade, which works in two steps:

- Pick a contiguous block of `'1'`s with a `'0'` immediately on each side,
  and turn the whole block into `'0'`s.
- Then pick a contiguous block of `'0'`s with a `'1'` immediately on each
  side, and turn the whole block into `'1'`s.

Return the greatest number of `'1'`s the string can hold after the trade —
or without one, if no trade helps or none is possible.

Note: for the neighbor checks, treat `s` as padded with one extra `'1'` at
each end; those padding characters never count toward the total.

### Example 1

```text
Input: s = "0110"
Output: 4
Explanation: The "11" block has a '0' on both sides, so it can be zeroed,
making "0000". That full block of '0's now has the padding '1's as its
neighbors, so it is filled back in, and every position is up: 4.
```

### Example 2

```text
Input: s = "0100110"
Output: 6
Explanation: Zero the lone '1' after the leading '0', giving "0000110".
The '0'-block at the start now ends right before the '11', so filling it
turns the string into "1111110" — six '1's, up from three.
```

### Example 3

```text
Input: s = "00100"
Output: 5
Explanation: Zeroing the middle '1' leaves one unbroken block of five
'0's, which the trade fills completely: 5.
```

### Example 4

```text
Input: s = "100"
Output: 1
Explanation: The only '1' touches the padded left edge, so no block of
'1's is flanked by '0's on both sides and no trade is possible. The count
stays at 1.
```

### Constraints

- `1 <= n == s.length <= 10⁵`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

Run-length encode the padded string; the runs strictly alternate.

### Hint 2

A trade's gain is the combined length of the two `'0'`-runs hugging an
interior `'1'`-run, so every interior `'1'`-run contributes one candidate
gain.

### Hint 3

The answer is the number of `'1'`s in `s` plus the largest candidate gain,
or just the count of `'1'`s when no interior `'1'`-run exists.
