# Prefix Overlap Peaks After Removals

## Description

You are given an array of strings `words`. For every index `i`, imagine
deleting `words[i]` from the array and then looking at the shared
beginnings of neighbouring words: over all pairs of words that sit next to
each other in the shortened array, find the length of the longest common
prefix any pair shares.

Return an array `answer` of length `words.length`, where `answer[i]` is
that longest shared-prefix length computed after deleting the word at
index `i`. When fewer than two words remain, or when no surviving
neighbouring pair shares even a first character, `answer[i]` is `0`.

### Example 1

```text
Input: words = ["flow","flower","fluent"]
Output: [2,2,4]
Explanation: Deleting "flow" leaves the pair ("flower","fluent"), whose
shared opening is "fl" (length 2). Deleting "flower" brings "flow" next to
"fluent", which still share only "fl". Deleting "fluent" leaves the pair
("flow","flower"); the shorter word is entirely a prefix of the longer, so
the length is 4.
```

### Example 2

```text
Input: words = ["abc","abd","xyz","xyq"]
Output: [2,2,2,2]
Explanation: Every deletion leaves a neighbouring pair drawn from either
the "ab…" opening (length 2) or the "xy…" opening (length 2), so each
answer is 2.
```

### Example 3

```text
Input: words = ["ab","cd"]
Output: [0,0]
Explanation: Removing either word leaves a single word, so no neighbouring
pair exists and both answers are 0.
```

### Constraints

- `1 <= words.length <= 10⁵`
- `1 <= words[i].length <= 10⁴`
- `words[i]` consists of lowercase English letters.
- The sum of `words[i].length` is smaller than or equal 10⁵.

## Hints

### Hint 1

Compute the shared-prefix length of every neighbouring pair once, up
front, rather than rescanning after each deletion.

### Hint 2

Deleting `words[i]` only destroys the two pairs that touched it and creates
one replacement pair — `(words[i-1], words[i+1])`, when both exist.

### Hint 3

Prefix maxima over the pair lengths left of `i` and suffix maxima over the
pair lengths right of `i` let each answer combine three candidates in
constant time.
