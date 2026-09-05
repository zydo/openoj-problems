# Best Suffix Matches

## Description

Two lists of strings are given: `entries` and `queries`.

For every `queries[i]`, locate the entry sharing the longest common
suffix with it. When several entries tie on that longest shared suffix,
prefer the entry with the shorter length; when lengths tie as well, take
the one appearing earlier in `entries`.

Return an array `ans` where `ans[i]` is the index into `entries` of the
entry chosen for `queries[i]`.

### Example 1

```text
Input: entries = ["stone","tone","bone","one"], queries = ["tone","bone","phone","zzz"]
Output: [1, 2, 3, 3]
Explanation:
For "tone", both "stone" and "tone" share the full four letters; the
shorter of the two, "tone" at index 1, wins.
For "bone", only "bone" reaches a four-letter suffix, so index 2 wins
outright.
For "phone", every entry shares exactly "one" with it, and the shortest
of those is "one" at index 3.
For "zzz", no entry shares any letter at the end, so the common suffix is
empty — shared by everything — and the globally shortest entry, index 3,
answers it.
```

### Example 2

```text
Input: entries = ["mat","cat","hat"], queries = ["at","mat","hat"]
Output: [0, 0, 2]
Explanation:
For "at", all three entries share "at" and all have length 3, so the
earliest, index 0, is chosen. "mat" matches only itself at full length.
"hat" matches itself, so index 2 answers despite being last.
```

### Constraints

- `1 <= entries.length, queries.length <= 10⁴`
- `1 <= entries[i].length <= 5 * 10³`
- `1 <= queries[i].length <= 5 * 10³`
- `entries[i]` and `queries[i]` consist of lowercase English letters and
  digits.
- The total length of all strings in `entries` is at most `5 * 10⁵`.
- The total length of all strings in `queries` is at most `5 * 10⁵`.

## Hints

### Hint 1

Read from right to left and suffixes become prefixes, which is what tries
are built for.

### Hint 2

Insert the entries into a trie spelling each one backwards, and store on
every node — root included — the winning index under the tie-break rules;
each descending word overwrites the stored index whenever it beats it.

### Hint 3

To answer a query, spell it backwards into the trie as far as it goes;
the deepest node reached holds the winner for the longest shared suffix,
and stopping at the root covers the matches-nothing case.
