# Even-Xor Triplets I

## Description

Three integer arrays `a`, `b`, and `c` are in hand. Count the triplets
`(a[i], b[j], c[k])` — one element from each array — whose combined xor
`a[i] ^ b[j] ^ c[k]` contains an even number of set bits.

Return that count.

### Example 1

```text
Input: a = [2,1], b = [1], c = [4,3]
Output: 2
Explanation: Two triplets qualify:
(a[0], b[0], c[1]): 2 ^ 1 ^ 3 = 0, with zero set bits;
(a[1], b[0], c[1]): 1 ^ 1 ^ 3 = 3, binary 11, two set bits.
The other two triplets land on an odd number of set bits.
```

### Example 2

```text
Input: a = [8], b = [8], c = [8]
Output: 0
Explanation: The single possible triplet xors to 8 ^ 8 ^ 8 = 8, binary
1000 — one set bit, which is odd, so nothing is counted.
```

### Example 3

```text
Input: a = [6,7], b = [10,12], c = [9,14]
Output: 4
Explanation: The qualifying triplets are (6, 10, 9) with xor 5, (6, 12, 9)
with xor 3, (7, 10, 14) with xor 3, and (7, 12, 14) with xor 5 — each of
those xors holds exactly two set bits.
```

### Constraints

- `1 <= a.length, b.length, c.length <= 100`
- `0 <= a[i], b[i], c[i] <= 100`

## Hints

### Hint 1

The sizes here invite the direct route: walk over every combination of one
element from each array and inspect the xor's popcount.
