# Prefix-Suffix Word Search

## Description

You are given an array of strings `words`.

Implement the `PrefixSuffixIndex` class:

- `PrefixSuffixIndex(words)` builds the index over the array `words`.
- `bestMatch(pref, suff)` searches `words` for a string that starts with
  `pref` AND ends with `suff`. If several match, it returns the largest
  index among them; if none match, it returns `-1`.

### Example 1

```text
Input:
["PrefixSuffixIndex", "bestMatch"]
[[["grape", "grain", "green"]], ["gr", "n"]]
Output: [null, 2]
Explanation:
PrefixSuffixIndex index = new PrefixSuffixIndex(["grape", "grain", "green"]);
index.bestMatch("gr", "n"); // "grain" (index 1) and "green" (index 2) both
                             // start with "gr" and end with "n"; the
                             // larger index, 2, is returned.
```

### Constraints

- `1 <= words.length <= 10⁴`
- `1 <= words[i].length <= 7`
- `1 <= pref.length, suff.length <= 7`
- `words[i]`, `pref`, and `suff` consist of lowercase English letters
  only.
- At most `10⁴` calls total are made to `bestMatch`.
