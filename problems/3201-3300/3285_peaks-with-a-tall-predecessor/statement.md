# Peaks With A Tall Predecessor

## Description

A ridge lines up `n` peaks, one after another, and `height[i]` records how
tall peak `i` stands. Alongside the array you are given an integer
`threshold`.

A peak is called **firm** when the peak immediately before it — if there
is one — rises strictly above `threshold`. The very first peak has
nothing behind it, so peak `0` can never be firm.

Collect the indices of every firm peak and return them. The judge matches
the returned array exactly, so send the indices in ascending order.

### Example 1

```text
Input: height = [6, 4, 5, 1, 9, 9], threshold = 4
Output: [1, 3, 5]
Explanation:
- Peak 1 is firm: its predecessor height[0] == 6 tops threshold == 4.
- Peak 3 is firm: its predecessor height[2] == 5 tops threshold == 4.
- Peak 5 is firm: its predecessor height[4] == 9 tops threshold == 4.
```

### Example 2

```text
Input: height = [3, 7, 2, 9, 5], threshold = 4
Output: [2, 4]
```

### Example 3

```text
Input: height = [8, 8, 8], threshold = 8
Output: []
Explanation: Every predecessor equals the threshold, and only a strictly
taller one qualifies — so no peak is firm.
```

### Constraints

- `2 <= n == height.length <= 100`
- `1 <= height[i] <= 100`
- `1 <= threshold <= 100`
