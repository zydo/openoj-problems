# Copying Chars Through A Window II

## Description

The windowed character source from Copying Chars Through A Window is
back — but now several reads arrive in a row, and your reader must
serve them all without ever re-reading a character.

The window is exposed by the problem-provided oracle class
`CharSource`:

- `int read4(char[] buf4)` copies up to the next four pending
  characters into `buf4` and returns how many it copied. The count is
  smaller than four only at the end of the content; past the end it is
  `0`. The source never rewinds — every character is handed out once,
  even across separate `read` calls.

Implement the `Solution` class:

- `int read(CharSource charSource, int[] queries, char[] buf)` serves
  each query in order: query `i` copies the next `queries[i]`
  characters into the buffer, continuing where the previous query
  stopped. Return the total number of characters copied across all
  queries. The copy of a query ends early only when the content runs
  out, and later queries then also find nothing left.

The first `total` slots of `buf` hold the copied characters in order;
slots past `total` may be left untouched. `buf` comes pre-allocated
with exactly `capacity` slots.

### Example 1

```text
Input: content = ["p","o","r","t","i","o","n"], capacity = 10, queries = [2, 6]
Output: [7, ["p","o","r","t","i","o","n"]]
Explanation: the first query takes "po"; the second asks for 6 more,
so it takes the remaining "rtion" and then finds the content dry. The
buffer starts with "portion" and the total is 7.
```

### Example 2

```text
Input: content = ["b","e","a","c","h"], capacity = 5, queries = [4, 4]
Output: [5, ["b","e","a","c","h"]]
Explanation: the first query takes "beac"; the second gets only "h"
before the content runs out. Total: 5.
```

### Constraints

- `1 <= content.length <= 1000`
- `1 <= capacity <= 1000`
- `1 <= queries.length <= 1000`
- `1 <= queries[i] <= 1000`
- Every character is printable ASCII; there are no tabs or other
  control characters.
- The content is supplied exactly once and is never rewound.

## Hints

### Hint 1

Keep the window contents between calls: if a previous `read4` fetched
more than the caller consumed, the leftovers belong to the next query.

### Hint 2

Only refill the window when it is completely drained, and stop
refilling once `read4` reports 0 — that is the end-of-content signal,
and every later query copies nothing.
