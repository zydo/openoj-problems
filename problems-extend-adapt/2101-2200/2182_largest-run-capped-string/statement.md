# Largest Run-Capped String

## Description

You are given a lowercase string `s` and an integer `repeatLimit`.
Build a new string out of the letters of `s` — each letter may be used
at most as many times as it occurs in `s`, and using every occurrence is
optional — subject to one rule: no single letter may appear more than
`repeatLimit` times consecutively.

Among all strings that obey the rule, return the lexicographically
largest one.

One string is lexicographically larger than another when, at the first
position where the two differ, its letter comes later in the alphabet.
If one string is a prefix of the other, the longer one is the larger.

### Example 1

```text
Input: s = "babccc", repeatLimit = 2
Output: "ccbcba"
Explanation:
The runs of `c` are capped at 2, so after emitting two `c`s one `b` is
spent to break the run, letting the remaining `c` be placed before the
rest. No letter ever repeats more than twice in a row, and no valid
arrangement sorts later.
```

### Example 2

```text
Input: s = "zyxyxyz", repeatLimit = 1
Output: "zyzyxyx"
Explanation:
With a cap of 1, equal neighbors are forbidden, so the largest and
second-largest letters must alternate. Six of the seven letters fit;
no better arrangement exists.
```

### Example 3

```text
Input: s = "eeee", repeatLimit = 4
Output: "eeee"
Explanation:
The cap is never reached, so all four letters can be laid down in one
run.
```

### Constraints

- `1 <= repeatLimit <= s.length <= 10^5`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Lay out the answer from the largest letter downward, taking as many
copies of each letter as `repeatLimit` permits.

### Hint 2

If a letter still has copies left once its run is capped, consume one
copy of the next-largest letter as a separator and keep going; if no
smaller letter exists, the leftovers are discarded.
