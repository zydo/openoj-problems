# What Survives The Last Sweep

## Description

You are given a string `s` of lowercase English letters.

Repeat the following sweep until `s` is empty: for every letter from `a` to
`z`, delete the first (leftmost) occurrence of that letter still in `s`, if
one exists. All deletions of a single sweep happen together, based on the
string as it stood when the sweep began.

Return the value of `s` immediately before the final sweep — the last
non-empty string the process produces.

### Example 1

```text
Input: s = "abcabc"
Output: "abc"
Explanation: The first sweep deletes the leading a, b, and c, leaving
"abc". The second sweep deletes those three letters and empties the
string.
Right before that last sweep the string is "abc", so that is the answer.
```

### Example 2

```text
Input: s = "mississippi"
Output: "si"
Explanation: The letters i and s each appear 4 times, more than any other
letter, so they are the only ones that can outlast three sweeps. After
three sweeps every m, p, and all but the last i and s are gone; the string
just before the final sweep keeps the rightmost i and the rightmost s,
which appear in the order s then i.
```

### Example 3

```text
Input: s = "aaab"
Output: "a"
Explanation: The letter a appears 3 times but b only once, so b disappears
in the very first sweep. Two sweeps later only the final a is left, and
"a" is the string before the last sweep.
```

### Constraints

- `1 <= s.length <= 5 * 10⁵`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Every sweep strips exactly one copy from each letter still present, so a
letter with `k` copies survives `k` sweeps. The process ends on the sweep
numbered by the maximum count, and only letters reaching that count are
still alive just before it.

### Hint 2

A letter alive at the end has been reduced to a single copy — its last
occurrence in the original string. Collect the last occurrence of every
letter whose count equals the maximum, preserving their original order.
