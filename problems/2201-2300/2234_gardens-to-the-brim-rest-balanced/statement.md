# Gardens to the Brim, the Rest Balanced

## Description

A groundskeeper tends `n` garden beds. Bed `i` already holds `flowers[i]`
flowers, and nothing already planted may be dug up. The keeper may plant at
most `newFlowers` additional flowers, and three more numbers shape the
score: `target`, `full`, and `partial`.

A bed holding at least `target` flowers counts as finished. The grounds'
total score is the sum of

- `full` points for every finished bed, plus
- `partial` points for each flower in the least-planted unfinished bed —
  zero when no unfinished bed remains.

Plant the extra flowers so the total score is as large as possible, and
return that score.

### Example 1

```text
Input: flowers = [4,2,5], newFlowers = 4, target = 5, full = 3, partial = 2
Output: 14
Explanation: One flower finishes the bed holding 4, and two more lift the
bed holding 2 up to 4. Two finished beds pay 2 * 3, and the lone unfinished
bed's floor of 4 pays 4 * 2, for 6 + 8 = 14.
```

### Example 2

```text
Input: flowers = [9], newFlowers = 1, target = 10, full = 7, partial = 3
Output: 27
Explanation: Spending the flower would finish the lone bed for a score of
just 7; planting nothing scores 9 * 3 = 27 instead.
```

### Example 3

```text
Input: flowers = [1,2,3], newFlowers = 100, target = 4, full = 2, partial = 5
Output: 19
Explanation: Three flowers finish the beds holding 2 and 3, and two more
raise the last bed to 3, scoring 2 * 2 + 3 * 5 = 19.
```

### Constraints

- `1 <= flowers.length <= 10⁵`
- `1 <= flowers[i], target <= 10⁵`
- `1 <= newFlowers <= 10¹⁰`
- `1 <= full, partial <= 10⁵`

## Hints

### Hint 1

If exactly `k` beds are to be finished, which `k` cost the least?

### Hint 2

The `k` beds already holding the most flowers are the cheapest to finish,
and finishing those leaves the largest budget for everything else.

### Hint 3

Sort first and sweep every `k`; what remains is finding the highest floor
affordable on the leftover beds.

### Hint 4

That highest floor is a water-filling question — binary search for the
level the leftover prefix can all be raised to.
