# Longest Deletable Word

## Description

You are given a string `s` and a list of candidate words, `dictionary`. A
candidate word is **deletable** from `s` if you can obtain it by deleting
zero or more characters from `s` without disturbing the order of the
characters that remain.

Return the longest deletable word. If several deletable words share the
longest length, return the one that comes first alphabetically. If no word
in `dictionary` is deletable, return the empty string `""`.

### Example 1

```text
Input: s = "bcdopq", dictionary = ["cop", "cod", "bop"]
Output: "bop"
Explanation: "cop" (indices 1, 3, 4) and "bop" (indices 0, 3, 4) are both
deletable, and both have length 3. "cod" is not deletable: after matching
"c" and "o", no "d" remains later in "bcdopq". "bop" comes before "cop"
alphabetically, so it wins the tie.
```

### Example 2

```text
Input: s = "bcdopq", dictionary = ["dc", "op", "b"]
Output: "op"
Explanation: "op" (indices 3, 4) is deletable with length 2, and "b"
(index 0) is deletable with length 1. "dc" is not deletable: after
matching "d", no "c" remains later in "bcdopq". "op" is the longest
deletable word.
```

### Example 3

```text
Input: s = "xyz", dictionary = ["a", "ab", "abc"]
Output: ""
Explanation: None of "a", "ab", or "abc" appears as a subsequence of
"xyz", so no candidate is deletable and the answer is the empty string.
```

### Constraints

- `1 <= s.length <= 1000`
- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 1000`
- `s` and every word in `dictionary` consist only of lowercase English
  letters.
