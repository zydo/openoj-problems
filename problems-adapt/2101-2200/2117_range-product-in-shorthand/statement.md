# Range Product in Shorthand

## Description

You are given two positive integers `left` and `right` with `left <= right`.
Consider the product of every integer in the inclusive range `[left, right]`.

That product can be enormous, so it is written down in a compact notation:

1. Count the product's trailing zeros — call the count `C` — and strip them
   all. (`1000` ends in `3` zeros; `546` ends in none.)
2. Let `d` be the number of digits that remain. If `d > 10`, keep the first
   `5` digits as `<pre>` and the last `5` digits of the stripped value as
   `<suf>`; if `d <= 10`, keep the stripped value whole. (For example,
   `1234567654321` reduces to `12345...54321`, while `1234567` stays as it
   is.)
3. Write the answer as `"<pre>...<suf>eC"` when it was shortened, and as
   `"<stripped>eC"` when it was not. (So `12345678987600000` is reported as
   `"12345...89876e5"`.)

Return the string produced by this notation for the range product.

### Example 1

```text
Input: left = 1, right = 5
Output: "12e1"
Explanation: The product is 1 × 2 × 3 × 4 × 5 = 120.
It has one trailing zero, which leaves 12 — only 2 digits, so nothing is
dropped. The answer is "12e1".
```

### Example 2

```text
Input: left = 6, right = 14
Output: "72648576e1"
Explanation: The product is 726485760.
Removing its one trailing zero leaves the 8-digit value 72648576, which
still fits whole. The answer is "72648576e1".
```

### Example 3

```text
Input: left = 42, right = 48
Output: "37109...52288e1"
Explanation: The stripped product has 11 digits — too many to keep whole.
Its first five digits are 37109 and its last five are 52288, and one zero
was removed.
```

### Constraints

- `1 <= left <= right <= 10⁴`

## Hints

### Hint 1

The trailing zero count, the low digits, and the high digits can each be
maintained by its own running tally — the full product never has to exist.

### Hint 2

Zeros come from pairing factors of 2 with factors of 5. As you walk the
range, peel each value's 2s and 5s off and count them, multiplying the
leftover parts together modulo a power of ten comfortably larger than five
digits.

### Hint 3

The digit count of the stripped product follows from the sum of base-10
logarithms of the range values, minus `C`: the integer part of that sum is
`d - 1`, and its fractional part yields the leading five digits through
`10^(fraction + 4)`.

### Hint 4

Before reading a five-digit suffix off the modular value, multiply the
surplus 2s and 5s back in — those factors beyond the `C` that were paired
into zeros.
