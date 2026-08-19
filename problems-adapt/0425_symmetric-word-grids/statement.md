# Symmetric Word Grids

## Description

You are given a list `words` of distinct lowercase strings that all share the
same length `L`. Picking `L` of them and writing them one per line produces an
`L × L` block of letters; an entry may be picked more than once.

Call such a block symmetric when reading down column `k` gives back the word
written on line `k`, for every `k`. Equivalently, transposing the block leaves
it unchanged.

Report every symmetric block obtainable from `words`. The blocks themselves may
come back in any order; the lines inside one block are ordered, since they are
what the block is.

### Example 1

```text
Input: words = ["shot","hope","open","tend","spot"]
Output: [["shot","hope","open","tend"]]
Explanation: The four lines lay out as

  s h o t
  h o p e
  o p e n
  t e n d

and the columns read "shot", "hope", "open", "tend" from left to right, matching
the lines. No block starting with "spot" can be completed.
```

### Example 2

```text
Input: words = ["aha","hah"]
Output: [["aha","hah","aha"],["hah","aha","hah"]]
Explanation: Both blocks use one of the two entries twice, which is allowed.
```

### Example 3

```text
Input: words = ["mud","ode","den","dew"]
Output: []
Explanation: Nothing works here. Putting "mud" on line 0, for instance, forces
line 1 to begin with "u", and no entry does.
```

### Constraints

- `1 <= words.length <= 1000`
- Every entry has the same length `L`, and `1 <= L <= 4`
- Entries are made of lowercase English letters
- No entry is repeated in `words`

## Hints

### Hint 1

Line 0 is a free choice. After that nothing is free: once the first `k` lines
are down, the letters already standing in column `k` spell the opening of
line `k`.

### Hint 2

The search therefore asks one question over and over — which entries begin with
this prefix? Answer it in constant time by indexing, up front, every prefix of
every entry.

### Hint 3

Walk the lines depth first and abandon a branch the instant the forced opening
has no entry behind it. That prunes far more aggressively than enumerating all
`L`-tuples.
