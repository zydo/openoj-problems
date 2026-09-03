# Collapsing Characters Within Reach

## Description

You get a lowercase string `s` and an integer `k`.

Call two equal characters of the current string close when their index
distance is at most `k`. Whenever a close pair exists, the right character
is absorbed into the left one and disappears, shortening the string by
one; the process repeats on the updated string until no close pair
remains.

Merges are applied in a fixed order: among all available close pairs,
always take the one whose left index is smallest, breaking ties by the
smallest right index.

Return the string that remains once every possible merge has run.

### Example 1

```text
Input: s = "xyxxy", k = 2
Output: "xy"
Explanation: The pair (x at 0, x at 2) has the smallest left index and
2 - 0 <= k, so the right x vanishes, leaving "xyyy". Then y at 1 absorbs
y at 2, giving "xy", and y at 1 absorbs y at 2 again. The final "xy" has
no equal pair within distance 2.
```

### Example 2

```text
Input: s = "abbacca", k = 2
Output: "abca"
Explanation: The b pair at indices 1 and 2 merges first, then the a pair
at 0 and 2, then the c pair — each right character folds into its left
twin. In "abca" the two a's are 3 apart, beyond k = 2, so the string
settles.
```

### Example 3

```text
Input: s = "abcda", k = 1
Output: "abcda"
Explanation: No two equal characters sit within distance 1 — the a's are
4 apart — so nothing merges and the string comes back unchanged.
```

### Constraints

- `1 <= s.length <= 100`
- `1 <= k <= s.length`
- `s` is made of lowercase English letters.

## Hints

### Hint 1

Follow the rule directly, but notice what a merge actually does: only the
right member of the pair is removed, so the settled part of the string
never changes.

### Hint 2

That means one left-to-right sweep replays the whole process — a newly
arrived character can only be absorbed by an equal survivor among the
last `k` ones, otherwise it joins the survivors itself.
