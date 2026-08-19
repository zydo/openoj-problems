# Maximum Books With Strictly Rising Takes

## Description

You are given an integer array `books`, where `books[i]` is the number of
books standing on shelf `i` of a long bookcase.

Choose a contiguous block of shelves from `l` through `r` and take some books
from every shelf of the block, subject to one rule: read left to right, each
shelf must give up strictly fewer books than the shelf after it. A shelf
never gives away more books than it holds.

Return the largest total you can carry away.

### Example 1

```text
Input: books = [4,2,6,9]
Output: 18
Explanation: Take from all four shelves, carrying 1, 2, 6, and 9 books off
them. The takes rise strictly, no shelf is overdrawn, and the total is 18.
Taking everything from the two left shelves (4 + 2) instead would force the
shelves after them to hold back and would lose overall.
```

### Example 2

```text
Input: books = [3,0,5,6]
Output: 11
Explanation: The best block is shelves 2 and 3 with takes 5 and 6, totalling
11. The empty shelf can join that block only by taking 0 books, which adds
nothing, and shelf 0 cannot stand before it — a take would then have to be
negative.
```

### Example 3

```text
Input: books = [5,5,5]
Output: 12
Explanation: Three identical shelves still work as a block: take 3, 4, and 5
books from them, for 12 in total.
```

### Constraints

- `1 <= books.length <= 10⁵`
- `0 <= books[i] <= 10⁵`

## Hints

### Hint 1

Fix the rightmost shelf of the block and suppose it gives away everything it
holds. What is the most each shelf to its left can then take?

### Hint 2

The demands fall by exactly one per shelf as you walk left. Find the first
shelf that cannot meet its demand.

### Hint 3

When the run stops at that barrier shelf, the best thing to do before it is
the best run ending exactly there — and a stack of candidate barriers finds
each one quickly.
