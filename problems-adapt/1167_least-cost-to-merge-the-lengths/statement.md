# Least Cost to Merge the Lengths

## Description

Several segments have positive integer lengths, given as the array
`lengths`. Two segments of lengths `x` and `y` can be fused into a single
segment of length `x + y`, and the fusion costs `x + y`.

Fuse segments until exactly one remains, and return the smallest total cost
at which that can be done.

### Example 1

```text
Input: lengths = [3,5,1]
Output: 13
Explanation:
1. Fuse the segments of length 1 and 3, paying 4. One segment of length 4
   remains, alongside the 5.
2. Fuse 4 and 5, paying 9.
The total is 4 + 9 = 13.
```

### Example 2

```text
Input: lengths = [2,7,4,9]
Output: 41
Explanation:
1. Fuse 2 and 4, paying 6.
2. Fuse 6 and 7, paying 13.
3. Fuse 13 and 9, paying 22.
The total is 6 + 13 + 22 = 41. Fusing the 9 earlier would only raise it.
```

### Example 3

```text
Input: lengths = [6]
Output: 0
Explanation: Nothing needs fusing, so the cost is 0.
```

### Constraints

- `1 <= lengths.length <= 10⁴`
- `1 <= lengths[i] <= 10⁴`

## Hints

### Hint 1

Watch where a length's cost comes from: a fused segment carries its whole
length into each later fusion, so an original segment is paid for once per
fusion that happens above it.

### Hint 2

Long lengths are therefore the expensive participants — each one should sit
under as few fusions as possible, with the shortest lengths doing the
repeated work instead.

### Hint 3

Always fuse the two shortest segments currently present. A min-heap hands
them to you in logarithmic time, and the fused result re-enters the pool.
