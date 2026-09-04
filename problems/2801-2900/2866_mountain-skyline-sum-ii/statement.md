# Mountain Skyline Sum II

## Description

You are given a 0-indexed array `maxHeights` of `n` integers, and you are
planning `n` towers along a line: tower `i` stands at coordinate `i` with
some height `heights[i]` of your choosing.

A choice of heights is called a skyline when both of these hold:

- `1 <= heights[i] <= maxHeights[i]` for every tower
- `heights` rises, then falls

Rising-then-falling means some index `i` exists such that heights never
drop on the way in — `heights[j - 1] <= heights[j]` for every
`0 < j <= i` — and never climb on the way out — `heights[k + 1] <=
heights[k]` for every `i <= k < n - 1`.

Among all skylines, return the greatest possible total of the tower
heights.

### Example 1

```text
Input: maxHeights = [4,3,1,5,2]
Output: 10
Explanation: The heights [1,1,1,5,2] respect every cap, rise into the
tower at index 3, and fall afterwards; they total 10. No legal skyline
reaches a higher sum.
```

### Example 2

```text
Input: maxHeights = [2,9,7,6,8]
Output: 30
Explanation: Taking [2,9,7,6,6] keeps tower 1 at its cap of 9 and trims
the last tower from 8 to 6 so the fall is preserved. The sum is 30, and
nothing legal beats it.
```

### Example 3

```text
Input: maxHeights = [10,1,1,1,10]
Output: 14
Explanation: Only one of the two capped ends can stand tall — the other
would break the single rise-and-fall rule. Keeping either end at 10 and
clamping the rest to 1 yields the best sum of 14.
```

### Constraints

- `1 <= n == maxHeights.length <= 10⁵`
- `1 <= maxHeights[i] <= 10⁹`

## Hints

### Hint 1

Treat each index in turn as the place where the skyline turns around.

### Hint 2

Let `left[i]` be the heaviest total a rising stretch can accumulate over
positions `0, …, i` when `i` is the turning point.

### Hint 3

Define `right[i]` symmetrically: the heaviest falling stretch over
positions `i, …, (n - 1)` with `i` as the turning point.

### Hint 4

Fill `left` in one increasing pass. If `j` is the nearest index left of
`i` with `maxHeights[j] <= maxHeights[i]`, everything between `j` and `i`
can stand at `maxHeights[i]`, so `left[i] = left[j] + maxHeights[i] *
(i - j)`.

### Hint 5

Fill `right` in one decreasing pass with the mirrored recurrence
`right[i] = right[j] + maxHeights[i] * (j - i)`, where `j` is now the
nearest index to the right with `maxHeights[j] <= maxHeights[i]`.
