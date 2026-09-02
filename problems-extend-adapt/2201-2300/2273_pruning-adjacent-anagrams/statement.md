# Pruning Adjacent Anagrams

## Description

You are given a 0-indexed array of strings `words`, each made of lowercase
English letters. Two words are anagrams when one can be rearranged into the
other, using every letter exactly the same number of times — equal lengths
alone are not enough, since `"aa"` and `"aaa"` are not anagrams.

Repeatedly pick an index `i` with `0 < i < words.length` such that
`words[i - 1]` and `words[i]` are anagrams of each other, and delete
`words[i]`. Continue for as long as some index qualifies.

Return `words` once no further deletion is possible. The end result is the
same no matter in which order eligible indices are chosen.

### Example 1

```text
Input: words = ["listen","silent","enlist","google","gooegl"]
Output: ["listen","google"]
Explanation: "silent" and "enlist" are each anagrams of the word kept just
before them, so both get deleted; the same happens to "gooegl" behind
"google". Nothing can be removed further, leaving ["listen","google"].
```

### Example 2

```text
Input: words = ["abc","abd","cab"]
Output: ["abc","abd","cab"]
Explanation: "cab" is an anagram of "abc", but deletions only ever compare
a word with its current left neighbor. "abd" sits between them and is not
an anagram of either, so every word survives.
```

### Example 3

```text
Input: words = ["aa","aa","aaa","aa"]
Output: ["aa","aaa","aa"]
Explanation: The second "aa" duplicates its neighbor and is deleted. "aaa"
is kept because "aa" is not an anagram of it — the letter counts differ —
and the final "aa" then differs from "aaa" and survives too.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

Rather than simulating each deletion, work out which positions can never
survive to the end.

### Hint 2

For each index `i`, find the nearest earlier position `j` whose word is
known to survive.

### Hint 3

If `words[i]` is an anagram of `words[j]`, then `words[i]` is certainly
deleted; otherwise it survives and becomes the new reference.
