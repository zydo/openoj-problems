# One-Swap Word Groups

## Description

Call two words **linked** when exchanging the letters at two positions of one
of them yields the other — and also when the two are already equal, which
takes no exchange at all.

Being linked is not transitive, but membership is: two words share a group when
some chain of linked words runs from one to the other. Every word therefore
sits in exactly one group, possibly alone.

For instance `"arm"` and `"ram"` are linked, since exchanging the first two
letters converts one into the other, whereas `"arm"` and `"mar"` are not — no
single exchange gets between them.

You are given `words`, a list in which every entry is an anagram of every other
entry. Return the number of groups it splits into.

### Example 1

```text
Input: words = ["stop","tops","pots","spot"]
Output: 2
Explanation: "stop" and "spot" swap positions 1 and 3; "tops" and "pots" swap
positions 0 and 2. No link crosses between those two pairs, so there are two
groups.
```

### Example 2

```text
Input: words = ["team","meat","meta","mate"]
Output: 1
Explanation: The links form a chain: "team"-"meat", "meat"-"meta",
"meta"-"mate". The two ends of the chain are not linked to each other, yet the
chain still puts all four in one group.
```

### Example 3

```text
Input: words = ["arc","car","rca"]
Output: 3
Explanation: Each of these is a rotation of the others, and a rotation of three
letters cannot be undone by exchanging just one pair. Nothing is linked to
anything, so every word is its own group.
```

### Constraints

- `1 <= words.length <= 300`
- `1 <= words[i].length <= 300`
- Each `words[i]` is made only of lowercase English letters
- The entries all have one common length and are anagrams of one another

## Hints

### Hint 1

Two anagrams cannot differ in exactly one place. Compare a pair position by
position: agreement everywhere, or disagreement in exactly two places, is what
one exchange can account for — three or more disagreements always needs at
least two exchanges.

### Hint 2

Once the pair test is settled, the words are vertices and every linked pair is
an edge. What the question asks for is the number of connected pieces of that
graph.

### Hint 3

With at most `300` entries, testing all pairs is only some tens of thousands of
comparisons. Merge the endpoints of each linked pair as you find it, then count
how many distinct representatives are left.
