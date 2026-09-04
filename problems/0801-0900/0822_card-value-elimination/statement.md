# Card Value Elimination

## Description

Two equal-length arrays `fronts` and `backs` describe two-sided cards. Card
`i` shows `fronts[i]` initially, with `backs[i]` facing down. You may turn
over any collection of cards, including none.

After choosing the orientations, a value is _eligible_ if it appears on at
least one downward-facing side and on no upward-facing side. Return the
smallest value that can be eligible. If no value can be made eligible, return
`0`.

### Example 1

```text
Input: fronts = [2,5,1,6], backs = [3,5,4,2]
Output: 1
```

### Example 2

```text
Input: fronts = [8,2,7], backs = [1,2,3]
Output: 1
```

### Constraints

- `n == fronts.length == backs.length`
- `1 <= n <= 1000`
- `1 <= fronts[i], backs[i] <= 2000`
