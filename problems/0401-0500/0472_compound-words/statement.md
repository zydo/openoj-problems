# Compound Words

## Description

`words` holds distinct lowercase strings. Call one of them _compound_ when its
letters can be produced by writing two or more entries of `words` one after
another with nothing left over. Entries may be reused as often as you like, and
since at least two are required, every piece is strictly shorter than the string
it helps build.

Return the compound entries, in the order `words` lists them.

### Example 1

```text
Input: words = ["ice","cream","icecream","sun","flower","sunflower","sunflowericecream","tree"]
Output: ["icecream","sunflower","sunflowericecream"]
Explanation: "icecream" is "ice" followed by "cream", and "sunflower" is "sun"
followed by "flower". The long one takes four pieces: "sun", "flower", "ice",
"cream". Nothing on the list spells "tree".
```

### Example 2

```text
Input: words = ["run","way","runway","runwayrunway"]
Output: ["runway","runwayrunway"]
Explanation: "runway" is "run" then "way", and the last entry is "runway"
written twice — a piece may be picked up again.
```

### Example 3

```text
Input: words = ["red","blue","green"]
Output: []
Explanation: None of these is long enough to be assembled from the others.
```

### Constraints

- `words` holds between `1` and `10^4` strings
- every string is `1` to `30` characters long and uses lowercase letters only
- no two strings are equal
- the strings total at most `10^5` characters

## Hints

### Hint 1

Judge one candidate at a time. For a single string the question is whether it
can be cut into pieces that all appear on the list — a segmentation question,
answered left to right.

### Hint 2

Walk the cut positions `0` through `n` and mark which prefixes are fully
segmentable. Position `i` is reachable when some earlier reachable position `j`
leaves a chunk `j..i` that the list contains.

### Hint 3

Without a guard every candidate segments trivially, as a single piece: itself.
Forbid the one cut that spans the whole string, and whatever still segments
needs two pieces or more.
