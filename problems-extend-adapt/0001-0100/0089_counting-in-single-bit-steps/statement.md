# Counting In Single-Bit Steps

## Description

Picture a closed walk through the non-negative integers below `2ⁿ`
in which no step may flip more than one switch. Formally, an `n`-bit
sequence of this kind lists `2ⁿ` integers such that:

- every integer lies in the inclusive range `[0, 2ⁿ - 1]`;
- the sequence starts at 0;
- no integer appears more than once;
- the binary representations of any two adjacent integers differ in
  exactly one bit position, and the last and first integers differ in
  exactly one bit position as well, closing the loop.

Given `n`, return the particular sequence the examples follow: the
element at index `i` (0-indexed) equals `i ^ (i >> 1)` — the standard
reflected arrangement.

### Example 1

```text
Input: n = 3
Output: [0,1,3,2,6,7,5,4]
Explanation: Written in binary the walk reads
[000,001,011,010,110,111,101,100]. Every hop — including the wrap
from 100 back to 000 — changes exactly one bit.
```

### Example 2

```text
Input: n = 4
Output: [0,1,3,2,6,7,5,4,12,13,15,14,10,11,9,8]
```

### Constraints

- `1 <= n <= 16`
