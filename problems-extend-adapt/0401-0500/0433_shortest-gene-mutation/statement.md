# Shortest Gene Mutation

## Description

A gene is a string of exactly 8 characters chosen from `'A'`, `'C'`, `'G'`,
and `'T'`. One mutation changes a single character of a gene to another
letter.

A bank lists the genes that are valid along a mutation path. Every
intermediate gene produced by a mutation — and the final gene — must be
present in the bank; the starting gene is assumed valid whether or not it
appears there.

Given `startGene`, `endGene`, and the `bank`, return the fewest mutations
needed to turn `startGene` into `endGene`. If it cannot be done, return
`-1`.

### Example 1

```text
Input: startGene = "AACCGGTT", endGene = "AACCGCTA", bank = ["AACCGGTA","AACCGCTA"]
Output: 2
Explanation: "AACCGGTT" -> "AACCGGTA" -> "AACCGCTA" uses two mutations.
```

### Example 2

```text
Input: startGene = "AAAAACCC", endGene = "AAAAACCC", bank = []
Output: 0
Explanation: The genes already match, so no mutation is needed.
```

### Example 3

```text
Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = []
Output: -1
Explanation: With an empty bank, no intermediate gene is valid, so the
end cannot be reached.
```

### Constraints

- `0 <= bank.length <= 10`
- `startGene.length == endGene.length == bank[i].length == 8`
- `startGene`, `endGene`, and every `bank[i]` use only the letters `A`,
  `C`, `G`, `T`.
