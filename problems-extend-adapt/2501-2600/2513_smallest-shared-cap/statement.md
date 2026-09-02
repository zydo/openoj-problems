# Smallest Shared Cap

## Description

Two arrays, `arr1` and `arr2`, start out empty. Fill them with positive
integers so that every rule below holds:

- `arr1` holds `uniqueCnt1` distinct positive integers, none of them
  divisible by `divisor1`.
- `arr2` holds `uniqueCnt2` distinct positive integers, none of them
  divisible by `divisor2`.
- No integer may appear in both arrays.

Values may skip as many numbers as you like; the only cost is the largest
integer either array ends up holding. Given `divisor1`, `divisor2`,
`uniqueCnt1`, and `uniqueCnt2`, return the smallest value that this
shared maximum can take.

### Example 1

```text
Input: divisor1 = 2, divisor2 = 3, uniqueCnt1 = 2, uniqueCnt2 = 1
Output: 3
Explanation: Take arr1 = [1,3] and arr2 = [2]. Nothing in arr1 is even,
2 is not divisible by 3, and the arrays are disjoint, so a maximum of 3
works — and no smaller maximum leaves room for two odd-free numbers.
```

### Example 2

```text
Input: divisor1 = 4, divisor2 = 6, uniqueCnt1 = 3, uniqueCnt2 = 2
Output: 5
Explanation: One valid split is arr1 = [1,2,3] and arr2 = [4,5]: arr1
avoids multiples of 4, arr2 avoids multiples of 6, and 5 is the largest
value used.
```

### Example 3

```text
Input: divisor1 = 3, divisor2 = 4, uniqueCnt1 = 5, uniqueCnt2 = 2
Output: 7
Explanation: The split arr1 = [1,2,4,5,7] and arr2 = [3,6] respects both
exclusion rules, and no arrangement capped at 6 can supply five numbers
that are not multiples of 3.
```

### Constraints

- `2 <= divisor1, divisor2 <= 10⁵`
- `1 <= uniqueCnt1, uniqueCnt2 < 10⁹`
- `2 <= uniqueCnt1 + uniqueCnt2 <= 10⁹`

## Hints

### Hint 1

Binary-search the cap: if a maximum of `m` works, any larger cap works
too, so feasibility is monotone.

### Hint 2

For a candidate cap `m`, count how many of `1..m` each array can claim
(`m` minus the multiples of its divisor) and how many are blocked by
neither divisor — the latter uses `lcm(divisor1, divisor2)` and must
cover both counts combined.
