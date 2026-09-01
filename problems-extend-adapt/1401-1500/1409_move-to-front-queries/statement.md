# Move-to-Front Queries

## Description

Maintain the permutation `P = [1, 2, 3, ..., m]` and process the given
`queries` in order. Each query `q` works like this:

- report the current index of value `q` inside `P` (positions count from
  zero), and
- then move that value to the front of `P`.

Return one reported index per query, in query order.

### Example 1

```text
Input: queries = [2,3,4,1], m = 4
Output: [1,2,3,3]
Explanation: P starts as [1,2,3,4]. Query 2 sits at index 1 and then
moves to the front: P = [2,1,3,4]. Query 3 sits at index 2, giving
P = [3,2,1,4]. Query 4 sits at index 3, giving P = [4,3,2,1]. Query 1
now sits at index 3, leaving P = [1,4,3,2].
```

### Example 2

```text
Input: queries = [5,5,5], m = 6
Output: [4,0,0]
Explanation: In P = [1,2,3,4,5,6] the value 5 sits at index 4. Once it
has moved to the front, the two repeat queries find it at index 0.
```

### Example 3

```text
Input: queries = [1,2], m = 3
Output: [0,1]
Explanation: Query 1 already fronts the list; query 2 sits right behind
it.
```

### Constraints

- `1 <= m <= 10³`
- `1 <= queries.length <= m`
- `1 <= queries[i] <= m`

## Hints

### Hint 1

Keeping `P` as a plain list is enough for these limits: every queried
value is guaranteed present, so a linear scan finds its position.

### Hint 2

After reporting that position, remove the element there and insert it at
the front — two single linear list updates.
