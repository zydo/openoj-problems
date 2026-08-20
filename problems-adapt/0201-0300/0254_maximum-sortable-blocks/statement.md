# Maximum Sortable Blocks

## Description

Slice `arr` into consecutive _blocks_ that cover it end to end. Sort the contents
of every block on its own, leave the blocks where they are, and read the array
back. A slicing is _sortable_ when what you read back is `arr` in ascending
order.

Return how many blocks the finest sortable slicing contains.

Entries may repeat, and one block covering everything is always sortable, so an
answer always exists.

### Example 1

```text
Input: arr = [9,7,5,3]
Output: 1
Explanation: Any cut strands a large value ahead of a smaller one. Cutting after
9, say, freezes 9 in front of 7, 5 and 3, and no amount of sorting inside the two
blocks moves it. Only the whole array as one block works.
```

### Example 2

```text
Input: arr = [2,0,1,5,4]
Output: 2
Explanation: [2,0,1] and [5,4]. The first three entries are the three smallest,
so sorting them in place gives 0,1,2 and the tail follows with 4,5. Cutting
anywhere inside [2,0,1] would leave a 2 stuck before a 0.
```

### Example 3

```text
Input: arr = [1,3,3,2,6]
Output: 3
Explanation: [1], [3,3,2] and [6]. The lone 1 is already the smallest entry, the
middle block sorts to 2,3,3, and 6 is already last. Splitting the middle block
would separate the two 3s from the 2 that belongs before them.
```

### Constraints

- `arr` holds between 1 and 2000 entries
- each entry lies between 0 and `10^8` inclusive

## Hints

### Hint 1

Think about where a cut is allowed. Everything left of the cut has to stay left
of it after sorting, so the entries before a legal cut must be exactly the
smallest entries of the array — as a multiset, since values repeat.

### Hint 2

Sort a copy. Now walk both arrays together: position by position, the prefix of
the original is legal to cut after when it holds the same values, with the same
multiplicities, as the prefix of the sorted copy.

### Hint 3

You do not need to rebuild a multiset at each step. Keep one counter per value
and a tally of how many values are still unmatched between the two prefixes. The
tally hits zero exactly at the legal cut points, and cutting at every one of them
is optimal.
