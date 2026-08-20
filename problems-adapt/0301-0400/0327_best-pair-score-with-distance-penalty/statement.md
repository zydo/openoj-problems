# Best Pair Score With Distance Penalty

## Description

You are given an integer array `values`.

Choose two positions `i < j`. The pair scores

```text
values[i] + values[j] + i - j
```

that is, the two entries added together, lessened by the gap between their
positions.

Return the highest score attainable by any such pair.

### Example 1

```text
Input: values = [7,2,10,4,8]
Output: 16
Explanation: Positions 2 and 4 give 10 + 8 + 2 - 4 = 16.
No other pairing reaches that high.
```

### Example 2

```text
Input: values = [3,9]
Output: 11
Explanation: With two entries there is one pair, and it scores
3 + 9 + 0 - 1 = 11.
```

### Example 3

```text
Input: values = [50,40,30]
Output: 89
Explanation: Each entry is smaller than the one before it, so stretching the
pair only loses ground: the adjacent pair 50 and 40 scores
50 + 40 + 0 - 1 = 89.
```

### Constraints

- `2 <= values.length <= 5 * 10⁴`
- `1 <= values[i] <= 1000`

## Hints

### Hint 1

Try scoring every pair and you will rescan the whole prefix for each `j`. What
single number, carried along the sweep, would let you skip that rescan?

### Hint 2

The score rearranges into `(values[i] + i) + (values[j] - j)`. The second term
concerns only `j`, so for each `j` the ideal partner is the earlier position
maximizing `values[i] + i`.

### Hint 3

One running maximum of `values[i] + i` replaces the inner loop entirely —
update it after using it, so the partner is always strictly earlier.
