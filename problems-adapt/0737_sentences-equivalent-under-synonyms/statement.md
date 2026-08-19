# Sentences Equivalent Under Synonyms

## Description

A sentence arrives already split into words: `wordsA` and `wordsB` are two such
lists. A third input, `synonyms`, is a list of two-element string pairs; each
pair `[xi, yi]` declares the word `xi` interchangeable with the word `yi`.

Interchangeability spreads. Every word stands in for itself, the relation reads
the same in both directions, and it chains: if `xi` stands in for `yi` and `yi`
stands in for `zi`, then `xi` stands in for `zi`.

Return `true` when the two lists hold the same number of words **and** every
word of `wordsA` may stand in for the word at the matching position of
`wordsB`; otherwise return `false`.

### Example 1

```text
Input: wordsA = ["quick","car","noise"], wordsB = ["fast","auto","din"], synonyms = [["quick","rapid"],["rapid","fast"],["car","auto"],["noise","din"]]
Output: true
Explanation: Position 0 needs a chain: "quick" reaches "fast" by way of
"rapid". Positions 1 and 2 are covered by a single declared pair each.
```

### Example 2

```text
Input: wordsA = ["cold","room"], wordsB = ["chilly","hall"], synonyms = [["cold","chilly"],["hall","corridor"]]
Output: false
Explanation: Position 0 is fine. At position 1, "hall" is tied only to
"corridor", and nothing ties either of them to "room".
```

### Example 3

```text
Input: wordsA = ["one","two"], wordsB = ["one"], synonyms = []
Output: false
Explanation: The word counts differ, so the answer is false whatever the words
are. With no pairs declared, words would in any case only stand in for
themselves.
```

### Constraints

- `1 <= wordsA.length, wordsB.length <= 1000`
- `1 <= wordsA[i].length, wordsB[i].length <= 20`, and both consist of English
  letters in either case
- `0 <= synonyms.length <= 2000`
- every entry of `synonyms` is exactly two strings
- `1 <= xi.length, yi.length <= 20`, each of English letters

## Hints

### Hint 1

Reflexive, symmetric and transitive together say the pairs behave like edges of
an undirected graph, and "stands in for" means "same word, or same connected
piece of that graph".

### Hint 2

You never need the pieces themselves, only the question "are these two words in
one piece?". A disjoint-set forest keyed by the word strings answers it in
near-constant time, once you have merged every declared pair.

### Hint 3

Register a word the first time you meet it, as a piece of its own. That way a
word that never occurs in any pair automatically matches nothing but itself,
and the length test can be dispatched before any of this work begins.
