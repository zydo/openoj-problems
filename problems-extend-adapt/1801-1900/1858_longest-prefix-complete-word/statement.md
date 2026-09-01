# Longest Prefix-Complete Word

## Description

You receive a list of lowercase strings `words`. A word from the list is
prefix-complete when every string obtained by chopping characters off
its end — down to and including its first character — also appears in
`words`.

For instance, with `words = ["c", "ca", "cat"]` the word `"cat"` is
prefix-complete because both `"ca"` and `"c"` are present.

Return the longest prefix-complete word in `words`. If several qualify
and share the greatest length, return the one that comes first
alphabetically. If no word qualifies, return the empty string.

### Example 1

```text
Input: words = ["t","to","tog","toga","togaed","gold","go","gone"]
Output: "toga"
Explanation: "togaed" fails because the chop "togae" is missing, while
"toga" shrinks cleanly through "tog", "to", and "t" — all present.
```

### Example 2

```text
Input: words = ["b","be","bet","betel","beet","beetle","bee","beetlejuice"]
Output: "beet"
Explanation: "beetle" breaks at "beetl" and "betel" breaks at "bete",
so the longest complete chain ends at "beet" (via "bee", "be", "b").
```

### Example 3

```text
Input: words = ["red","re","r","reed","redo","redoak"]
Output: "redo"
Explanation: "reed" needs "ree", which is absent; "redo" chains through
"red", "re", "r" and is the longest word that does.
```

### Constraints

- `1 <= words.length <= 10^5`
- `1 <= words[i].length <= 10^5`
- `1 <= sum(words[i].length) <= 10^5`
- `words[i]` consists only of lowercase English letters.

## Hints

### Hint 1

Plant every word in a trie, marking the nodes that end a word.

### Hint 2

The answer is the deepest marked node reachable by a path on which every
node is itself marked — a small depth-first search over that restricted
graph, preferring smaller letters, finds it; a sort plus a hash set of
the words achieves the same by testing each candidate's chain directly.
