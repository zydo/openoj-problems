# The Bit Mirror

## Description

Hand a 32-bit integer to the mirror and get back the integer whose bits
are those same 32 bits read in the opposite order: the bit at position
0 takes the place of position 31, position 1 takes 30's, and so on all
the way down the line.

### Example 1

```text
Input: n = 100
Output: 637534208
Explanation:
100          00000000000000000000000001100100
637534208    00100110000000000000000000000000
```

### Example 2

```text
Input: n = 2147483646
Output: 2147483646
Explanation: The pattern 01111111111111111111111111111110 reads the
same from either end, so the mirror hands it straight back.
```

### Example 3

```text
Input: n = 57266630
Output: 1670092480
Explanation:
57266630     00000011011010011101000111000110
1670092480   01100011100010111001011011000000
```

### Constraints

- `0 <= n <= 2³¹ - 2`
- `n` is even.

### Follow-up

If the mirror is consulted over and over, what could you prepare once
to make every later call cheaper?
