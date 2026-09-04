# Assembling an Array From Pieces

## Description

You are given an integer array `arr` whose values are all distinct,
together with `pieces`, a list of integer arrays whose values are also
distinct across every piece taken together. `arr` can be assembled
from `pieces` when the pieces, laid end to end in some order, reproduce
`arr` exactly — but the order of the values inside any single piece is
fixed and may not be rearranged.

Return `true` if some concatenation of all the pieces equals `arr`, and
`false` otherwise.

### Example 1

```text
Input: arr = [7,3,9,9,5], pieces = [[9,5],[7],[3,9]]
Output: true
Explanation: Lay down [7], then [3,9], then [9,5] to rebuild arr.
```

### Example 2

```text
Input: arr = [6,1,1], pieces = [[1,1,6]]
Output: false
Explanation: The piece holds exactly the right values, but its
internal order is fixed and [1,1,6] does not read the same as arr.
```

### Example 3

```text
Input: arr = [10,20,30,40], pieces = [[10,30],[20,40]]
Output: false
Explanation: Whichever piece starts the assembly, its next value has
to agree with arr — but the piece beginning with 10 continues with 30,
while arr continues with 20, so no piece can extend the array there.
```

### Constraints

- `1 <= pieces.length <= arr.length <= 100`
- `sum(pieces[i].length) == arr.length`
- `1 <= pieces[i].length <= arr.length`
- `1 <= arr[i], pieces[i][j] <= 100`
- The values in `arr` are distinct.
- The values in `pieces` are distinct as well — flattening `pieces`
  into one array leaves no repeated value.

## Hints

### Hint 1

The distinctness means every position of `arr` can belong to only one
piece, so there is no ambiguity about where a piece starts.

### Hint 2

A piece is identified by its first element. Look up the piece that
starts at the current position, check it against the corresponding
slice of `arr`, and move past it on a match.
