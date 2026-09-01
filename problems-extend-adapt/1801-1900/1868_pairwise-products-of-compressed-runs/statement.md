# Pairwise Products of Compressed Runs

## Description

Run-length encoding shrinks an integer array that is full of repeated
values: a list of runs becomes a list of `[value, count]` pairs, one pair
per stretch of consecutive equal entries. So `[3,3,3,5,5]` compresses to
`[[3,3],[5,2]]` — read it as "three 3s, then two 5s".

You are given two run-length encoded arrays, `encoded1` and `encoded2`,
describing two full arrays `nums1` and `nums2` of equal length. Form a
third array that, at every index, holds `nums1[i] * nums2[i]`, and
return that elementwise product in run-length encoded form, compressed
as tightly as possible — consecutive equal products must share one run,
and no two runs may carry the same value.

### Example 1

```text
Input: encoded1 = [[4,2],[3,1]], encoded2 = [[2,3]]
Output: [[8,2],[6,1]]
Explanation: encoded1 expands to [4,4,3] and encoded2 expands to
[2,2,2]. The elementwise products are [8,8,6], which compresses to
[[8,2],[6,1]].
```

### Example 2

```text
Input: encoded1 = [[5,1],[2,2],[7,1]], encoded2 = [[3,2],[1,2]]
Output: [[15,1],[6,1],[2,1],[7,1]]
Explanation: The expansions are [5,2,2,7] and [3,3,1,1]; every product
in [15,6,2,7] differs from its neighbours, so nothing merges.
```

### Example 3

```text
Input: encoded1 = [[1,2],[4,2]], encoded2 = [[2,1],[1,3]]
Output: [[2,1],[1,1],[4,2]]
Explanation: The expansions are [1,1,4,4] and [2,1,1,1], giving products
[2,1,4,4]. Note how the run of 4s begins at encoded1's second segment
yet two positions into encoded2's last one — products may start and end
mid-segment.
```

### Constraints

- `1 <= encoded1.length, encoded2.length <= 10^5`
- Every run has exactly two entries: a value and a count.
- `1 <= value, count <= 10^4` in both inputs.
- The two expansions have the same total length.

## Hints

### Hint 1

Never expand anything. Keep a cursor into each encoding plus how many
entries of its current run are still unconsumed, and advance whichever
run runs out first.

### Hint 2

Each step consumes `min(remaining1, remaining2)` positions and produces
one output run, so the work stays proportional to the number of input
segments — the output can never have more runs than the sum of the two
inputs' run counts.
