# An Alternating Chain Of Words II

## Description

Two words of the same length are _one substitution apart_ when exactly one
letter position holds a different character in the two words.

You are given an array `words` of distinct lowercase words and an array
`groups` of positive integers, both of length `n`. Build the longest
possible chain of words `words[i₀], words[i₁], ..., words[iₖ₋₁]` over
increasing indices `i₀ < i₁ < ... < iₖ₋₁` such that every consecutive pair
in the chain meets both of these rules:

- the two words have equal length and are one substitution apart;
- their group labels differ: `groups[iⱼ] != groups[iⱼ₊₁]`.

Return the words along the chain, in order. If several chains share the
longest length, return any one of them.

Note: the words are not guaranteed to share a length.

### Example 1

```text
Input: words = ["cold","cord","card"], groups = [1,2,3]
Output: ["cold","cord","card"]
Explanation: "cold" and "cord" differ only in their third letter, and
"cord" and "card" differ only in their second. The group labels 1, 2, 3
also differ between every consecutive pair, so all three words form one
chain — no longer chain exists, so this is an answer.
```

### Example 2

```text
Input: words = ["abc","xbc","xxc","xx"], groups = [1,1,2,2]
Output: ["xbc","xxc"]
Explanation: "abc" and "xbc" are one substitution apart, but they both
carry group 1, so the pair may not be chained. "xbc" and "xxc" are one
substitution apart with different groups, giving a chain of length 2 —
the longest achievable, since "xx" matches nothing (it is shorter) and
"abc" is two substitutions away from "xxc".
```

### Example 3

```text
Input: words = ["zone","bone","bonn","born"], groups = [2,1,2,1]
Output: ["zone","bone","bonn","born"]
Explanation: Each consecutive pair is one substitution apart ("zone" to
"bone" changes the first letter, "bone" to "bonn" the fourth, "bonn" to
"born" the third), and the labels 2, 1, 2, 1 alternate between neighbors.
The single chain of length 4 uses every word.
```

### Constraints

- `1 <= n == words.length == groups.length <= 1000`
- `1 <= words[i].length <= 10`
- `1 <= groups[i] <= n`
- All words in `words` are distinct.
- `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

For every index `i`, compute the length of the longest valid chain that
ends exactly at `words[i]`.

### Hint 2

A chain ending at `words[i]` can extend any earlier chain ending at
`words[j]` whose group differs from `groups[i]`, whose word has the same
length as `words[i]`, and which is one substitution away from it; take the
best such option and add one.

### Hint 3

While filling those lengths, also record which predecessor `j` produced
each best value — the chain itself has to be rebuilt from them.

### Hint 4

Begin at an index holding the overall maximum length, follow the recorded
predecessors back to the chain's start, and output the collected words in
reverse.
