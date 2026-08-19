# Total Prefix Hits

## Description

You are given a list `words` of `n` non-empty lowercase strings.

The hit count of a string `p` is how many entries of `words` begin with `p`.
An entry begins with itself, so every word raises its own prefixes' hit counts
by one.

Return an array `answer` of length `n`, where `answer[i]` is the sum of the
hit counts of all non-empty prefixes of `words[i]`.

### Example 1

```text
Input: words = ["ab","ab","abc"]
Output: [6,6,7]
Explanation:
The two copies of "ab" are separate entries and both count.
- "ab" has prefixes "a" and "ab"; all three entries begin with either, so the
  total is 3 + 3 = 6.
- "abc" has prefixes "a", "ab", and "abc", hitting 3, 3, and 1 entries, so
  the total is 3 + 3 + 1 = 7.
```

### Example 2

```text
Input: words = ["code","co","debit"]
Output: [6,4,5]
Explanation:
- "code" has prefixes "c", "co", "cod", "code" with hit counts 2, 2, 1, 1:
  total 6.
- "co" has prefixes "c", "co", both hitting 2 entries: total 4.
- "debit" begins with none of the others, so each of its five prefixes hits
  exactly one entry: total 5.
```

### Example 3

```text
Input: words = ["zz"]
Output: [2]
Explanation:
With a single entry, both prefixes "z" and "zz" have hit count 1.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 1000`
- `words[i]` contains only lowercase English letters.

## Hints

### Hint 1

The prefixes you must look up are the root-to-node paths of one shared
structure over all entries. Which structure stores a million such paths
without repeating their common parts?

### Hint 2

Insert every entry into a trie and keep, at each node, the number of
insertions that passed through. What does that counter say about the prefix
leading to the node?

### Hint 3

One entry's total is then just the sum of the counters along its own path —
no per-prefix searching remains.
