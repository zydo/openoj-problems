# Shortest Unique Abbreviation

## Description

A word may be abbreviated by replacing some of its non-empty, non-adjacent
substrings with their lengths. For instance, `"substitution"` can be written
as `"s10n"` (the middle ten letters replaced), `"sub4u4"`, or even `"12"`
(entire word replaced); leaving it unchanged is also allowed. Replaced
substrings may not be adjacent, so `"s55n"` is invalid.

The **length** of an abbreviation counts the surviving letters plus the number
of replaced substrings. Thus `"s10n"` has length 3 and `"12"` has length 1.

Given a `target` string and a `dictionary` of words, find the shortest
abbreviation of `target` that is not a valid abbreviation of any dictionary
word. If several share that shortest length, return the one that is
lexicographically smallest.

### Example 1

```text
Input: target = "abc", dictionary = []
Output: "3"
```

### Example 2

```text
Input: target = "abc", dictionary = ["abd"]
Output: "2c"
Explanation: "3" would also abbreviate "abd"; keeping the final letter c
(which differs from d) makes the abbreviation unique.
```

### Example 3

```text
Input: target = "app", dictionary = ["ape"]
Output: "2p"
```

### Constraints

- `m == target.length`
- `n == dictionary.length`
- `1 <= m <= 21`
- `0 <= n <= 1000`
- `1 <= dictionary[i].length <= 100`
- `log2(n) + m <= 21` if `n > 0`
- `target` and every `dictionary[i]` consist of lowercase English letters.
- `dictionary` does not contain `target`.
