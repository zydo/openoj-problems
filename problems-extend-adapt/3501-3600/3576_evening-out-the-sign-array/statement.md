# Evening Out The Sign Array

## Description

An array `nums` of `n` entries holds nothing but `1`s and `-1`s. You also
get a move budget `k`.

One move picks two neighboring slots — an index `i` with
`0 <= i < n - 1` — and negates both `nums[i]` and `nums[i + 1]` in the
same stroke. The same pair of neighbors may be picked again in later
moves.

Decide whether some sequence of at most `k` moves can leave every slot
of the array holding the same value, and return that verdict as a
boolean.

### Example 1

```text
Input: nums = [1,-1,-1,1,1], k = 2
Output: true
Explanation: Negate the pair at i = 1 and the array becomes
[1,1,1,1,1] — uniform after a single move, so the second move of the
budget simply goes unused.
```

### Example 2

```text
Input: nums = [-1,1,-1,-1], k = 2
Output: false
Explanation: Uniform would mean zero minus-ones or four of them, yet
every move shifts the count of minus-ones by exactly two — an odd count
stays odd forever, so no amount of moves can level this array.
```

### Example 3

```text
Input: nums = [1], k = 1
Output: true
Explanation: A lone entry is uniform already; the budget is not needed.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `nums[i]` is either `-1` or `1`.
- `1 <= k <= n`

## Hints

### Hint 1

With only `±1` present, "all equal" has just two shapes: every entry a
`1`, or every entry a `-1`. Price each shape separately against the
budget.

### Hint 2

Sweep left to right. Standing at position `i`, the move at `i - 1` is
already settled history, so whether the move at `i` must fire to keep
this slot on target is forced — no genuine choice exists anywhere in the
schedule.
