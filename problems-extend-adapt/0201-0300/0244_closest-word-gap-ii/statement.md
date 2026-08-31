# Closest Word Gap II

## Description

Build a data structure over a fixed word list that can repeatedly answer:
how close together, at minimum, do two given words ever sit in the list?

Implement the `WordGapFinder` class:

- `WordGapFinder(wordsDict)` initializes the structure over the string
  array `wordsDict`.
- `closestGap(word1, word2)` returns the smallest index distance between
  any occurrence of `word1` and any occurrence of `word2` in `wordsDict`.

### Example 1

```text
Input:
["WordGapFinder", "closestGap", "closestGap"]
[[["red", "green", "blue", "yellow", "green"]], ["blue", "red"], ["green", "blue"]]
Output: [null, 2, 1]
Explanation:
WordGapFinder finder = new WordGapFinder(["red", "green", "blue", "yellow", "green"]);
finder.closestGap("blue", "red"); // "blue" at 2, "red" at 0 -> returns 2
finder.closestGap("green", "blue"); // "green" at 1 or 4, "blue" at 2 -> returns 1
```

### Constraints

- `1 <= wordsDict.length <= 3 * 10⁴`
- `1 <= wordsDict[i].length <= 10`
- `wordsDict[i]` consists of lowercase English letters.
- `word1` and `word2` are guaranteed to appear in `wordsDict`.
- `word1 != word2`
- At most `5000` calls are made to `closestGap`.
