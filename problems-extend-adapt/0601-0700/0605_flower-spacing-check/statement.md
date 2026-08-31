# Flower Spacing Check

## Description

A gardener keeps a single row of plots, each either already holding a flower
or empty, and never allows two flowers to sit in neighboring plots.

You are given an integer array `flowerbed`, where each entry is `0` for an
empty plot or `1` for one already planted, and an integer `n`. Decide whether
`n` more flowers can be added to the row — one per chosen plot — without ever
placing two flowers next to each other. Return `true` if the row has room for
all `n`, and `false` otherwise.

### Example 1

```text
Input: flowerbed = [0,0,0,0,0,0], n = 3
Output: true
```

### Example 2

```text
Input: flowerbed = [1,0,0,0,0,1], n = 2
Output: false
```

### Constraints

- `1 <= flowerbed.length <= 2 * 10⁴`
- `flowerbed[i]` is `0` or `1`.
- No two plots already holding a flower are adjacent.
- `0 <= n <= flowerbed.length`
