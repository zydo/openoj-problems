# All Shortest Word Bridges

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

Return every bridge of minimum length, each as the list
`[startWord, w1, ..., targetWord]`. When no bridge exists, return an empty
list.

### Example 1

```text
Input: startWord = "mile", targetWord = "cane",
       dictionary = ["male","bale","pale","bane","pane","cane"]
Output: [["mile","male","bale","bane","cane"],["mile","male","pale","pane","cane"]]
Explanation: Both bridges pass through male and then split: the b-side runs
bale, bane to reach cane, the p-side runs pale, pane. Nothing shorter exists.
```

### Example 2

```text
Input: startWord = "cold", targetWord = "ward",
       dictionary = ["cord","card","ward","wart"]
Output: [["cold","cord","card","ward"]]
Explanation: wart is reachable but leaves the target one step further away,
so exactly one shortest bridge survives.
```

### Constraints

- `startWord` holds between `1` and `5` letters.
- `targetWord` has the same length as `startWord`.
- `dictionary` holds between `1` and `500` words, each the same length as
  `startWord`, all distinct.
- Every word consists of lowercase English letters.
- `startWord` and `targetWord` are different words.
- The total length of all minimum bridges together does not exceed `10⁵`
  words.

## Hints

### Hint 1

Sweep the neighbour graph outward from `startWord` first, recording how far
each reachable word lies from the start.

### Hint 2

An edge can belong to a minimum bridge only when the two words it joins lie at
distances that differ by exactly one.

### Hint 3

With the distances known, walk back over the surviving edges to emit every
minimum bridge: from the target, list the neighbours one step closer to the
start, and recurse.
