# Near-Edit Query Matches

## Description

`queries` and `dictionary` are arrays of equal-length lowercase words. One
edit changes a single letter of a word to any other letter. A query word
matches the dictionary when it can be transformed into some dictionary word
using at most two edits — including zero.

Return the query words that match, in their original order.

### Example 1

```text
Input: queries = ["word","note","wood","ship"], dictionary = ["wood","joke","moat"]
Output: ["word","note","wood"]
Explanation: "word" needs one edit to become "wood", "note" needs two to
become "joke", "wood" already equals a dictionary word, and "ship" needs
four edits to reach any candidate.
```

### Example 2

```text
Input: queries = ["yes"], dictionary = ["not"]
Output: []
Explanation: Two edits cannot turn a three-letter word into a completely
different three-letter word when every position differs.
```

### Constraints

- `1 <= queries.length, dictionary.length <= 100`
- All words share the same length `n`, with `1 <= n <= 100`.
- Every word is lowercase English letters.

## Hints

### Hint 1

The bounds permit brute force: compare each query word with each dictionary
word.

### Hint 2

Two words of equal length differ in at most two positions exactly when the
Hamming distance between them is at most two.
