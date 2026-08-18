# Digit One Tally

## Description

Write out every integer from `0` up to and including `n`, one after another,
and count how often the digit `1` appears anywhere in what you wrote. A number
containing two 1s, like `11`, contributes two.

Return that count.

Checking each number in turn is easy to write but too slow to be the intended
answer — there is a formula hiding in the decimal places.

### Example 1

```text
Input: n = 21
Output: 13
Explanation: The 1s sit in 1, 10, 11 (twice), 12, 13, 14, 15, 16, 17, 18, 19
and 21 — thirteen in all.
```

### Example 2

```text
Input: n = 1000
Output: 301
Explanation: Each of the three lower places shows a 1 in exactly 100 numbers
(1, 11, 21, … at the ones place; 10-19 at the tens; 100-199 at the hundreds),
and the thousands place adds one more for 1000 itself.
```

### Example 3

```text
Input: n = 7
Output: 1
Explanation: Only the number 1 is written, so only one 1 appears.
```

### Constraints

- `0 <= n <= 10⁹`

## Hints

### Hint 1

Counting number by number counts every place at once, which is why it is slow.
Turn it around: pick one decimal place at a time and ask how many numbers up
to `n` carry a 1 there.

### Hint 2

For a place of weight `p`, split `n` into the digits above that place, the
digit at it, and the digits below it. Written in order, the digit at any place
runs through a repeating cycle, and each full cycle reserves a block of `p`
positions for the digit 1.

### Hint 3

The digits above the place count the completed cycles; the digit at the place
decides how much of the current, incomplete block to include — nothing, part
of it, or all of it. Watch for the place weight times ten when computing the
split: that product is where a fixed-width type overflows.
