# Substring Match Spans

## Description

You are given a string `text` and a list of distinct lowercase strings
`words`. Every occurrence of a word inside `text` covers some span of
positions; record each occurrence as the pair `[i, j]`, meaning the
piece of `text` from index `i` through index `j` (inclusive) spells out
one of the words exactly.

Collect the pairs for all occurrences of all words and return them
ordered by first coordinate, breaking ties by second coordinate.
Occurrences may overlap one another freely — a word may also match in
several places.

### Example 1

```text
Input: text = "birdcage", words = ["cage","bird","ages"]
Output: [[0,3],[4,7]]
Explanation: "bird" covers indices 0 through 3 and "cage" covers 4
through 7; "ages" is not a substring.
```

### Example 2

```text
Input: text = "mississippi", words = ["issi","ssi","miss"]
Output: [[0,3],[1,4],[2,4],[4,7],[5,7]]
Explanation: The matches pile up and overlap: "miss" spans 0-3, "issi"
spans both 1-4 and 4-7, and "ssi" spans 2-4 and 5-7.
```

### Example 3

```text
Input: text = "xyz", words = ["abc"]
Output: []
Explanation: No word appears anywhere in the text, so no span exists.
```

### Constraints

- `1 <= text.length <= 100`
- `1 <= words.length <= 20`
- `1 <= words[i].length <= 50`
- `text` and every string in `words` consist of lowercase English
  letters.
- All strings in `words` are distinct.

## Hints

### Hint 1

The straightforward route: take every word and slide it along `text`,
recording the start and end index whenever the piece underneath matches.

### Hint 2

If the brute force feels too slow, plant all the words in a trie and
sweep `text` once, walking the trie forward from every starting index
until it runs off the tree.
