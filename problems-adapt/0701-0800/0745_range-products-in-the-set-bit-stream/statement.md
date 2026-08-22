# Range Products in the Set-Bit Stream

## Description

Every positive integer is a sum of powers of two. Write each one as the list
of those powers, smallest first — this decomposition is unique:

| num | binary   | powers        |
| --- | -------- | ------------- |
| 2   | 00010    | [2]           |
| 5   | 00101    | [1,4]         |
| 6   | 00110    | [2,4]         |
| 11  | 01011    | [1,2,8]       |
| 21  | 10101    | [1,4,16]      |

Now read the lists for 1, 2, 3, ... in order and concatenate them into one
infinite stream, which begins
`[1, 2, 1, 2, 4, 1, 4, 2, 4, 1, 2, 4, 8, ...]`.

A query is a triple `[from, to, mod]`. For it, multiply the stream elements
at positions `from` through `to` (0-indexed, inclusive) and report the product
modulo `mod`. Given the matrix `queries`, return one answer per query.

### Example 1

```text
Input: queries = [[0,4,5]]
Output: [1]
Explanation: The stream at positions 0 through 4 is [1,2,1,2,4], whose
product is 16, and 16 % 5 = 1.
```

### Example 2

```text
Input: queries = [[3,6,10]]
Output: [2]
Explanation: Positions 3 through 6 hold [2,4,1,4]; the product is 32, and
32 % 10 = 2.
```

### Example 3

```text
Input: queries = [[8,12,7],[15,15,3]]
Output: [4,2]
Explanation: Positions 8 through 12 hold [4,1,2,4,8], whose product is 256,
and 256 % 7 = 4. Position 15 alone holds 2, and 2 % 3 = 2.
```

### Constraints

- `1 <= queries.length <= 500`
- `queries[i].length == 3`
- `0 <= queries[i][0] <= queries[i][1] <= 10¹⁵`
- `1 <= queries[i][2] <= 10⁵`

## Hints

### Hint 1

Every stream element is a power of two, so any range product is 2 raised to
the sum of the exponents involved. What is still missing is a way to total
those exponents over a stream *prefix*.

### Hint 2

For a prefix length, find the largest integer M whose lists are entirely
inside the prefix — M's own list may be only partly consumed.

### Hint 3

"How many integers in [1, M] have bit b set" has a closed form, so both the
total list length and the total exponent sum over 1..M come from a short loop
over bit positions. A binary search finds M for each prefix length.
