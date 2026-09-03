# The Most Runs of One Length

## Description

Cut `s` — a string of lowercase English letters — into its runs: a run is the
block of identical letters that begins at some position and stops the moment
a different letter shows up. No two runs overlap, and together they cover all
of `s`. The word "tattoo", for example, falls into the runs `t`, `a`, `tt`,
`o`, `o`.

You get to keep a set of runs, subject to one rule: every run you keep must
have exactly the same length as every other run you keep. Runs may repeat the
same letter or not — only their lengths matter.

Return the size of the largest set of runs you can keep under that rule.

### Example 1

```text
Input: s = "mississippi"
Output: 5
Explanation:
The scan yields the runs m, i, ss, i, ss, i, ppp, i. Five of them — the
leading m and the four lone i's — are one letter long, so five runs of
length 1 can be kept.
```

### Example 2

```text
Input: s = "aabbbcc"
Output: 2
Explanation:
The runs are aa, bbb, and cc. Length 2 is shared by aa and cc, and no other
length does as well.
```

### Example 3

```text
Input: s = "abcabc"
Output: 6
Explanation:
No two neighbors are equal, so each of the six runs is a single character,
and all six share length 1.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Walk the string once and cut it at every spot where the next letter differs;
the pieces between cuts are the runs, and only their lengths matter.

### Hint 2

Tally how many runs each length produces, then report the largest tally.
