# Balancing the Odd Array

## Description

Picture the array `arr` of length `n` whose entries are the first `n` odd
numbers: `arr[i] = 2 * i + 1`, so `arr` reads `[1, 3, 5, ..., 2n - 1]`.
The array itself is not handed to you — only its length `n` is given.

One move chooses any two indices `x` and `y` and transfers a single unit:
`arr[x]` decreases by `1` while `arr[y]` increases by `1`. Moves are applied
until every entry holds the same value, which is always achievable for the
arrays considered here.

Return the fewest moves that level the entire array.

### Example 1

```text
Input: n = 9
Output: 20
Explanation: arr = [1, 3, 5, 7, 9, 11, 13, 15, 17], so everything must
end at 9. The four entries below 9 are short by 2, 4, 6, and 8 units —
20 units in all, one per move.
```

### Example 2

```text
Input: n = 12
Output: 36
```

### Example 3

```text
Input: n = 13
Output: 42
Explanation: An odd entry count puts the middle element exactly on the
average, so only the pairs flanking it need leveling.
```

### Constraints

- `1 <= n <= 10⁴`

## Hints

### Hint 1

Write out the array from the formula and call the shared final value
`target = sum(arr) / n`.

### Hint 2

Each move repairs exactly one unit of deviation from `target`, so counting
the total distance between the entries and `target` tells you the move
count — what is the closed form of that sum?
