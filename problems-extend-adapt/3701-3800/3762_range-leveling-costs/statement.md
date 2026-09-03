# Range Leveling Costs

## Description

You are given an integer array `nums`, an integer `k`, and a 2D integer
array `queries` of length `q`, where `queries[i] = [li, ri]`.

A single operation takes one element of `nums` and moves it up or down by
exactly `k` — no other step size is permitted. Operations are unlimited and
may touch any element, but each one changes its element by precisely `k`.

For every query `[li, ri]`, look only at the inclusive slice `nums[li..ri]`
and find the fewest operations that leave all of its elements holding one
common value. What happens outside the slice never affects a query. When no
amount of stepping can level the slice, its answer is `-1`.

Return an integer array `ans` of length `q` with `ans[i]` the answer to
`queries[i]`.

### Example 1

```text
Input: nums = [9,15,6], k = 3, queries = [[0,2],[1,1],[0,1]]
Output: [3,0,2]
Explanation:
    [0, 2] covers [9, 15, 6]: two steps bring 15 down to 9 and one
    step lifts 6 up to 9, so 3 operations level the slice at 9.
    [1, 1] covers [15]: a lone element is already level, so 0
    operations are needed.
    [0, 1] covers [9, 15]: two steps bring 15 down to 9, matching
    nums[0], so the slice levels in 2 operations.
```

### Example 2

```text
Input: nums = [5,2,12,7], k = 5, queries = [[0,2],[1,3],[3,3]]
Output: [-1,2,0]
Explanation:
    [0, 2] covers [5, 2, 12]: their remainders modulo 5 are 0, 2 and
    2. Because one of them differs, no sequence of ±5 moves can ever
    put them on one value — the answer is -1.
    [1, 3] covers [2, 12, 7]: one step lifts 2 to 7 and one step
    drops 12 to 7, so 2 operations suffice.
    [3, 3] covers [7]: already level, so 0.
```

### Example 3

```text
Input: nums = [4,16,28,7], k = 12, queries = [[0,2],[0,3],[1,1]]
Output: [2,-1,0]
Explanation:
    [0, 2] covers [4, 16, 28]: one step lifts 4 to 16 and one step
    drops 28 to 16, so the slice levels at 16 in 2 operations.
    [0, 3] covers [4, 16, 28, 7]: 7's remainder modulo 12 differs
    from the others', so the slice can never level — the answer is
    -1.
    [1, 1] covers [16]: a lone element, so 0.
```

### Constraints

- `1 <= n == nums.length <= 4 * 10⁴`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`
- `1 <= q == queries.length <= 4 * 10⁴`
- `queries[i] = [li, ri]`
- `0 <= li <= ri <= n - 1`

## Hints

### Hint 1

A step of exactly `k` never disturbs an element's remainder modulo `k`, so
a slice can level only if every element in it shares one remainder.

### Hint 2

When the remainders agree, each element sits `k * (nums[i] / k)` above the
shared residue: leveling becomes driving the quotients `nums[i] / k`
together with unit moves, and the cheapest target is any median of the
quotients — the cost is then a sum of absolute deviations.

### Hint 3

A slice stays inside one remainder class exactly when it sits within a
maximal run of equal remainders, which one left-to-right pass can mark.
To price many ranges fast, build a merge sort tree over the quotients:
every node stores its values sorted plus prefix sums of that order.

### Hint 4

Find each range's median by binary-searching the quotient value, counting
elements at or below a candidate with one binary search per decomposition
node; the same sorted vectors' prefix sums then price the moves below and
above the median without revisiting the range.
