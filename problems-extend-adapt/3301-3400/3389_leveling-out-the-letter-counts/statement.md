# Leveling Out The Letter Counts

## Description

You are given a string `s` of lowercase letters. Call the string leveled
when every letter that occurs in it occurs the same number of times.

You may apply any of these moves, as many times as you like:

- Remove one character from `s`.
- Add one character to `s`.
- Promote one character to the next letter of the alphabet — `b` becomes
  `c`, `c` becomes `d`, and so on. A `z` cannot be promoted.

Return the fewest moves that leave `s` leveled.

### Example 1

```text
Input: s = "yzzyz"
Output: 1
Explanation: The counts are y = 2 and z = 3. Inserting a single y
levels both letters at 3, so one move is enough.
```

### Example 2

```text
Input: s = "qqrrqq"
Output: 1
Explanation: Four q's sit beside two r's. Promoting one q turns it
into an r, and the string ends with three of each.
```

### Example 3

```text
Input: s = "otto"
Output: 0
Explanation: Both o and t occur twice, so the string is already
leveled.
```

### Example 4

```text
Input: s = "abcabcabz"
Output: 2
Explanation: a and b occur three times each and c occurs twice. Delete
the stray z, insert one more c, and a, b, and c all occur three times.
```

### Constraints

- `3 <= s.length <= 2 * 10⁴`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Position within the string never matters — only how many times each
letter appears.

### Hint 2

Record `occ[x]`, the number of times the x-th letter appears. Revisit
the three moves as edits to that array.

### Hint 3

The moves become: raise any `occ[x]` by 1, lower any `occ[x]` by 1, or
lower `occ[x]` by 1 while raising `occ[x + 1]` by 1 in the same breath.
Leveling `s` means leveling `occ`, and `occ` is leveled exactly when
every entry is `0` or one shared value `c`.

### Hint 4

Fix a target `c`. What does the cheapest route to "every entry is `0` or
`c`" cost?

### Hint 5

Shifting never needs to run through consecutive entries: a unit shifted
from `occ[x]` into `occ[x + 1]` and then onward into `occ[x + 2]` can be
rerouted so `occ[x]` pays a plain delete while `occ[x + 1]` does the
shifting, at no extra cost. Only shifts between adjacent entries ever
need to be considered.

### Hint 6

Raising an entry after lowering it — or the reverse — is never
worthwhile; each entry should march once, straight to its final value.

### Hint 7

Sweep the alphabet with dynamic programming over prefixes of `occ`,
letting the state remember whether the previous letter was kept at `c`
or emptied out, and credit the shifts that flow between neighbors. Try
every target `c` up to the largest count.
