# Shortest Word Bridge

## Description

Two words of equal length are **neighbours** when they differ in exactly one
letter position. A **bridge** from `startWord` to `targetWord` over a
`dictionary` of words is a list of words

```text
startWord, w1, w2, ..., wk
```

in which each consecutive pair are neighbours, every `wi` belongs to
`dictionary`, and the final word is exactly `targetWord`. The starting word
itself need not appear in `dictionary`.

Return the number of words in the shortest such bridge, or `0` when no bridge
exists.

### Example 1

```text
Input: startWord = "lead", targetWord = "gold",
       dictionary = ["load","goad","gold","loam","foam"]
Output: 4
Explanation: lead -> load -> goad -> gold, one letter at a time, four words.
The words loam and foam form a side branch that never reaches gold.
```

### Example 2

```text
Input: startWord = "wheat", targetWord = "bread",
       dictionary = ["cheat","wreat","bleat","bread"]
Output: 0
Explanation: bread sits two letters away from every word near it, so although
it belongs to the dictionary, nothing can step onto it.
```

### Example 3

```text
Input: startWord = "cat", targetWord = "cut", dictionary = ["cut"]
Output: 2
Explanation: A single substitution reaches the target, so the bridge is the
two words cat, cut.
```

### Constraints

- `startWord` holds between `1` and `10` letters.
- `targetWord` has the same length as `startWord`.
- `dictionary` holds between `1` and `5000` words, each the same length as
  `startWord`, all distinct.
- Every word consists of lowercase English letters.
- `startWord` and `targetWord` are different words.

## Hints

### Hint 1

The dictionary describes a graph without ever drawing it: words are vertices
and the neighbour relation is the edge set. What you are asked for is a
distance in that graph, counted in vertices rather than edges.

### Hint 2

Listing a word's neighbours by comparing it against every dictionary entry is
quadratic and too slow at full size. Instead blank out one letter position at
a time and group words under the resulting pattern — every neighbour of a word
is found in one of its own patterns' groups.

### Hint 3

Sweep the graph in rings around `startWord`: the ring containing `targetWord`
gives the answer. Record which words are already swept so each enters the
frontier once, and settle the membership of `targetWord` in `dictionary`
before starting, since a bridge cannot end outside it.
