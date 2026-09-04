# Featured Sums Of Every K-Window II

## Description

You are given an integer array `nums` of length `n`, along with two
integers `k` and `x`.

For any collection of numbers, define its **top-X total** through this
procedure:

- Tally how many times each distinct value occurs.
- Rank the distinct values from most to least frequent; when two values
  occur equally often, the larger value ranks ahead.
- Sum `occurrences × value` over the `x` highest-ranked values only.
- A collection holding fewer than `x` distinct values is not cut down at
  all — its top-X total is its plain sum.

Slide a window of length `k` across `nums` and let `answer[i]` be the
top-X total of the window `nums[i..i + k - 1]`. Return the array
`answer`, which has length `n - k + 1`.

### Example 1

```text
Input: nums = [2,2,4,4,7,7,7,1], k = 5, x = 3
Output: [19,24,29,26]
Explanation:
- Window [2,2,4,4,7]: values 2 and 4 both occur twice and outrank 7, so
  answer[0] = 2·2 + 2·4 + 7 = 19.
- Window [2,4,4,7,7]: now 7 and 4 are the double occurrences, so
  answer[1] = 2·7 + 2·4 + 2 = 24.
- Window [4,4,7,7,7]: only two distinct values exist, fewer than x, so
  nothing is cut — answer[2] = 4 + 4 + 7 + 7 + 7 = 29.
- Window [4,7,7,7,1]: value 7 occurs three times, so answer[3] =
  3·7 + 4 + 1 = 26.
```

### Example 2

```text
Input: nums = [9,1,9,4], k = 2, x = 2
Output: [10,10,13]
Explanation: Each window of length 2 holds exactly x = 2 distinct
values, every one occurring once, so every value is kept and each answer
equals that window's plain sum.
```

### Constraints

- `nums.length == n`
- `1 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= x <= k <= n`

## Hints

### Hint 1

Consecutive windows overlap in `k - 1` elements, so recounting from
scratch each time is wasted work — carry the tally from window to
window, applying only the two element changes.

### Hint 2

Represent each distinct value as a `(count, value)` record ordered by
count first and value second, and split the records into the `x` best
and the rest while keeping a running total of kept `count × value`.

### Hint 3

When an element enters or leaves the window, retire its old record and
place its updated one; a placement can demote the worst kept record or
promote the best of the rest. Heaps that skip stale snapshots keep every
such move logarithmic.
