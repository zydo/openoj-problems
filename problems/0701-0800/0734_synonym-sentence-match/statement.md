# Synonym Sentence Match

## Description

A sentence can be written as an array of its words: `"a quick fox"` becomes
`["a","quick","fox"]`.

You are given two sentences, `sentence1` and `sentence2`, each written this
way, along with a list `similarPairs` where `similarPairs[i] = [xi, yi]`
declares that the words `xi` and `yi` are treated as interchangeable.

Determine whether `sentence1` and `sentence2` mean the same thing, in the
following restricted sense — return `true` if they do, `false` otherwise.
The two sentences match if:

- they contain the same number of words, and
- for every position `i`, `sentence1[i]` and `sentence2[i]` are either the
  identical word, or joined by an entry in `similarPairs`.

A word always matches itself. The synonym relation is **not transitive**:
knowing that `x` and `y` are declared interchangeable, and that `y` and `z`
are too, tells you nothing about whether `x` and `z` are — only pairs that
appear directly in `similarPairs` (in either order) count.

### Example 1

```text
Input: sentence1 = ["quick","clever","brave"], sentence2 = ["fast","smart","bold"], similarPairs = [["quick","fast"],["smart","clever"],["brave","bold"]]
Output: true
Explanation: Both sentences have three words, and each position is either
an identical word or a declared synonym pair: quick/fast, clever/smart,
and brave/bold.
```

### Example 2

```text
Input: sentence1 = ["ok"], sentence2 = ["ok"], similarPairs = []
Output: true
Explanation: A word always matches itself, even with no declared pairs.
```

### Example 3

```text
Input: sentence1 = ["ok"], sentence2 = ["fine","dandy"], similarPairs = [["ok","fine"]]
Output: false
Explanation: The sentences hold a different number of words, so they
cannot match regardless of any declared pair.
```

### Constraints

- `1 <= sentence1.length, sentence2.length <= 1000`
- `1 <= sentence1[i].length, sentence2[i].length <= 20`
- `sentence1[i]` and `sentence2[i]` consist of English letters.
- `0 <= similarPairs.length <= 1000`
- `similarPairs[i].length == 2`
- `1 <= xi.length, yi.length <= 20`
- `xi` and `yi` consist of lower-case and upper-case English letters.
- All the pairs `(xi, yi)` are distinct.

## Hints

### Hint 1

Two words `w1` and `w2` count as matching exactly when `w1 == w2`, or
`[w1, w2]` was declared in `similarPairs`, or `[w2, w1]` was.
