# Count Pairs Summing to a Multiple of 60

## Description

You are given an integer array `durations`, where each element is a length of
time in seconds.

Count the pairs of indices `(i, j)` with `i < j` whose entries add up to a
multiple of `60` — that is, `(durations[i] + durations[j]) % 60 == 0`.

### Example 1

```text
Input: durations = [95,25,155,20,100]
Output: 3
Explanation: 95 + 25 = 120, 155 + 25 = 180, and 20 + 100 = 120.
Each of those three pairs totals a multiple of 60.
```

### Example 2

```text
Input: durations = [120,60,180]
Output: 3
Explanation: All three entries are multiples of 60, so every pair totals one
too — there are three pairs among three entries.
```

### Example 3

```text
Input: durations = [30,90,150,45,15]
Output: 4
Explanation: 30, 90, and 150 each leave remainder 30, and two such remainders
add to 60 — that is C(3,2) = 3 pairs. Then 45 + 15 = 60 gives one more.
```

### Constraints

- `1 <= durations.length <= 6 * 10⁴`
- `1 <= durations[i] <= 500`

## Hints

### Hint 1

Only the entries' remainders modulo 60 can matter — two entries pair exactly
when their remainders add to 0 or to 60.

### Hint 2

So park the information in a fixed array of 60 counters, one per remainder.

### Hint 3

Remainder 0 pairs with itself, and so does remainder 30 — for those buckets the
pairs are "choose 2 from the bucket". Every other remainder pairs with its
complement to 60.
