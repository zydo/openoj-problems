# Count Roll Sequences With Run Caps

## Description

A six-sided die is rolled `n` times, recording the face after each roll. Face
`i` carries a limit `runCaps[i]`: it may not appear more than `runCaps[i]`
times in a row anywhere in the record.

Given `n` and the array `runCaps`, return how many different records of `n`
rolls respect every limit. Two records differ whenever any single position
holds a different face. Because the count is large, report it modulo
`10^9 + 7`.

### Example 1

```text
Input: n = 2, runCaps = [2,1,2,1,2,1]
Output: 33
Explanation: Unrestricted, two rolls give 6 * 6 = 36 records. Faces 2, 4,
and 6 are capped at one occurrence in a row, so the doubles (2,2), (4,4),
and (6,6) are forbidden, leaving 36 - 3 = 33.
```

### Example 2

```text
Input: n = 3, runCaps = [3,3,3,3,3,3]
Output: 216
Explanation: Every cap is at least 3, and no face can be rolled more than
three times in three rolls, so no record is excluded: 6^3 = 216.
```

### Example 3

```text
Input: n = 8, runCaps = [1,3,1,3,2,2]
Output: 1092872
Explanation: Of the 6^8 = 1679616 unrestricted records, 1092872 avoid running
any capped face past its limit.
```

### Constraints

- `1 <= n <= 5000`
- `runCaps.length == 6`
- `1 <= runCaps[i] <= 15`

## Hints

### Hint 1

When you append a roll, legality depends on just two facts about the record
so far: which face it ends with, and how many times that face has already
repeated at the end.

### Hint 2

Count records of a fixed length in a table `dp[j][c]` — those ending with
face `j` repeated exactly `c` times. Since caps are at most 15, sixteen
columns per face hold the whole state.

### Hint 3

Each new roll either extends the closing run (`dp[j][c-1]` moves to
`dp[j][c]`) or starts a fresh one. A fresh run of face `j` can extend any
record ending in some other face — the total of the previous table minus
its row for `j`.

### Hint 4

Never write a cell past `runCaps[j]`; that is what makes overlong runs
impossible rather than merely penalized. Sum the whole table after `n - 1`
transitions.
