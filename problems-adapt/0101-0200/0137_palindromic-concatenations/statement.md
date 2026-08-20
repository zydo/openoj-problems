# Palindromic Concatenations

## Description

`words` holds distinct lowercase strings, indexed from `0`. Glue two of them
together in a chosen order and the result may or may not read the same
backwards.

Return every ordered index pair `[i, j]` with `i != j` for which
`words[i] + words[j]` is a palindrome. The pairs may come back in any order,
and both `[i, j]` and `[j, i]` belong in the answer when both concatenations
qualify. An empty string is a palindrome, and so is a single letter.

Comparing all pairs directly is too slow at these sizes: aim for work
proportional to the total length of the strings, not to the square of how many
there are.

### Example 1

```text
Input: words = ["dog","god","ram","mar","x"]
Output: [[0,1],[1,0],[2,3],[3,2]]
Explanation: Each of the two reversed couples works in both orders — "doggod"
and "goddog", "rammar" and "marram". Nothing pairs with "x".
```

### Example 2

```text
Input: words = ["ot","to","tot"]
Output: [[0,1],[1,0],[1,2],[2,0]]
Explanation: "otto" and "toot" come from the first two entries; joining the
third with a shorter partner gives "totot" twice, once on each side.
```

### Example 3

```text
Input: words = ["","kayak","no"]
Output: [[0,1],[1,0]]
Explanation: Gluing the empty entry onto a word that is already a palindrome
leaves it unchanged, so it pairs with "kayak" both ways and with nothing else.
```

### Constraints

- `1 <= words.length <= 5000`
- `0 <= words[i].length <= 300`
- every character is a lowercase English letter

## Hints

### Hint 1

The obvious double loop tests `n^2` concatenations and each test costs the
length of the result. Something better has to avoid ever forming most of those
strings.

### Hint 2

Put every string in a hash map from string to index. Then the question becomes:
given one string, which stored string can complete it?

### Hint 3

Fix a string and cut it at every position into a front part and a back part. If
the front part is itself a palindrome, a partner equal to the reversal of the
back part can be glued on the left; if the back part is a palindrome, a partner
equal to the reversal of the front part goes on the right.

### Hint 4

Watch two edges: a string must not pair with itself, and the cut taking the
whole string leads to the same pair being reported from both sides — guard one
of the two branches so each pair is emitted once.
