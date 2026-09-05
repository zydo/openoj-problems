# Scheduling Dry Days Between Rains

## Description

The country counts `10^9` lakes, and every lake starts out empty. Rain
over a lake fills it; rain over a lake that is already full causes a
flood, and no flood may ever be allowed to happen.

The weather is given as an integer array `rains`:

- `rains[i] > 0` means it rains over lake `rains[i]` on day `i`.
- `rains[i] == 0` means day `i` is dry, and on that day you must pick
  one lake and pump it dry.

Return an array `ans` such that:

- `ans.length == rains.length`
- `ans[i] == -1` whenever `rains[i] > 0`
- `ans[i]` is the lake you pump on day `i` whenever `rains[i] == 0`

Pumping a full lake empties it; pumping an already-empty lake changes
nothing. If no schedule avoids every flood, return the empty array.
Whenever several flood-free schedules exist, any of them would be
acceptable — but for deterministic judging the expected output follows
one pinned canonical strategy: read the days left to right; when rain
falls on an already-full lake, the answer is the empty array; on a dry
day, if some full lake will rain again before the next dry day can
arrive, pump that lake today — the earliest such deadline wins — and
otherwise pump lake `1`; with no lake holding any water, pump lake `1`
as well.

### Example 1

```text
Input: rains = [3,0,3,0,3]
Output: [-1,3,-1,3,-1]
Explanation: Lake 3 is the only lake that ever fills, and each of its
repeat rains lands just one day after the only dry day still available,
so both dry days have to be spent pumping lake 3.
```

### Example 2

```text
Input: rains = [1,2,0,2]
Output: [-1,-1,2,-1]
Explanation: Lakes 1 and 2 fill on the first two days. Lake 2 rains
again on day 4, and day 3 is the last dry day before that, so day 3
must pump lake 2.
```

### Example 3

```text
Input: rains = [0,0,5]
Output: [1,1,-1]
Explanation: Nothing holds water on either dry day, so both default to
lake 1 — pumping an empty lake changes nothing.
```

### Example 4

```text
Input: rains = [2,0,0,2,2]
Output: []
Explanation: The two dry days sit between the day-1 and day-4 rains,
but nothing can be pumped between day 4 and the day-5 rain, so lake 2
floods no matter what; no valid schedule exists.
```

### Constraints

- `1 <= rains.length <= 10^5`
- `0 <= rains[i] <= 10^9`

## Hints

### Hint 1

Remember the most recent day each lake was rained over.

### Hint 2

Hold the dry days that are still unspent in an ordered structure.

### Hint 3

When rain falls on a lake that is already full, spend the earliest
unspent dry day that comes after that lake's previous rain.
