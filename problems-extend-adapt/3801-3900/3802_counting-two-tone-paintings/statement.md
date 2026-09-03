# Counting Two-Tone Paintings

## Description

A row of `n` panels must be painted, and an integer array `limit` of length
`m` gives the cap for each available color: color `i` may cover at most
`limit[i]` panels.

Every panel gets exactly one color, under these rules:

- Exactly two distinct colors appear in the row.
- Each of the two colors occupies one contiguous block, so the row is a
  left block followed by a right block.
- Color `i` covers no more than `limit[i]` panels.

Return the number of distinct ways to paint all `n` panels, modulo `10⁹ +
7`.

A way is fixed by the ordered choice of colors — which one paints the left
block and which the right — together with the number of panels in the left
block. Two ways differ as soon as at least one panel changes color.

### Example 1

```text
Input: n = 5, limit = [2,3,4]
Output: 12
Explanation: For each ordered pair (i, j) — color i taking the left block
of x panels and color j the right block of 5 - x — the split works when
1 <= x <= limit[i] and 1 <= 5 - x <= limit[j].

Valid pairs and splits are:

(0, 1): x = 2
(0, 2): x = 1, 2
(1, 0): x = 3
(1, 2): x = 1, 2, 3
(2, 0): x = 3, 4
(2, 1): x = 2, 3, 4

That is 12 valid ways in total.
```

### Example 2

```text
Input: n = 2, limit = [1,5]
Output: 2
Explanation: With only two panels, x = 1 for either orientation:
(0, 1) and (1, 0) each contribute one way, for 2 in total.
```

### Example 3

```text
Input: n = 7, limit = [4,4]
Output: 4
Explanation: Both colors cap at 4, so the left block needs 3 or 4 panels —
7 - x must not exceed 4. Each of (0, 1) and (1, 0) allows x = 3 and x = 4,
giving 4 ways in total.
```

### Constraints

- `2 <= n <= 10⁹`
- `2 <= m == limit.length <= 10⁵`
- `1 <= limit[i] <= 10⁹`

## Hints

### Hint 1

Sort the caps once; then the count of colors whose cap reaches t is one
binary search away.

### Hint 2

For a split x, the ordered pairs (i, j) with i != j that fit both sides
number num_ge(x) * num_ge(n - x) - num_ge(max(x, n - x)).

### Hint 3

The two num_ge terms only change when x crosses 1, n - 1, L + 1, or n - L
for some cap L.

### Hint 4

Gather those critical x values, sort and deduplicate them, and treat the
per-split count as constant between neighboring values.
