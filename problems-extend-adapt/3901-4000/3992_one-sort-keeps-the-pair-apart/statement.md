# One Sort Keeps The Pair Apart

## Description

You are handed a string `s` of lowercase letters together with two distinct
letters `x` and `y`. Build a string `t` out of exactly the characters of `s` —
same letters, same multiplicities — with one extra property: no copy of `x` may
sit anywhere left of a copy of `y`. In other words, every `y` in `t` has to
finish before the first `x` starts.

Any arrangement with that property is accepted.

### Example 1

```text
Input: s = "twig", x = "t", y = "g"
Output: "gitw"
Explanation: "gitw" reuses the letters of "twig", and the lone `g` is placed
before the lone `t`, as required.
```

### Example 2

```text
Input: s = "mellow", x = "m", y = "e"
Output: "ellmow"
Explanation: The two `e`'s both precede the `m`; the untouched `l`, `o`, `w`
can trail behind freely.
```

### Example 3

```text
Input: s = "zoo", x = "z", y = "o"
Output: "ooz"
Explanation: Both `o`'s come before the `z`, and no letter was added or
dropped.
```

### Constraints

- `1 <= s.length <= 100`
- `s` contains only lowercase English letters.
- `x` and `y` are single lowercase English letters.
- `x != y`

## Hints

### Hint 1

The only ordering the answer must respect is between the two special letters.
Where the remaining characters end up is irrelevant.

### Hint 2

Sorting groups equal letters into one contiguous block, so a single sort
already places the whole `y` block against the whole `x` block with nothing
between them.

### Hint 3

Pick the sort's direction by comparing the two letters: when `x` sorts before
`y` in ascending order, sort descending (which puts `y`'s block leftmost among
the two); otherwise sort ascending. Either direction satisfies the property.
