# Scrolling The Visit Trail

## Description

Track a browsing session as a trail of visited pages with one cursor:
stepping back moves the cursor toward older pages, stepping forward moves
it toward newer ones, and visiting a new page branches off — discarding
everything newer than the cursor.

Implement the `VisitTrail` class:

- `VisitTrail(string homepage)` initializes the trail with `homepage` as
  the only visited page, cursor on it.
- `void visit(string url)` appends `url` as the newest page and moves the
  cursor onto it; any pages ahead of the cursor are discarded.
- `string back(int steps)` moves the cursor `steps` pages toward the
  oldest end, stopping early only at `homepage`, and returns that page.
- `string forward(int steps)` moves the cursor `steps` pages toward the
  newest end, stopping early at the newest page, and returns that page.

### Example 1

```text
Input:
["VisitTrail","visit","visit","back","back","forward","visit","forward","back"]
[["start.io"],["a.io"],["b.io"],[1],[2],[1],["c.io"],[2],[3]]
Output: [null,null,null,"a.io","start.io","a.io",null,"c.io","start.io"]
Explanation: After visiting a.io and b.io, back(1) lands on a.io and
back(2) bottoms out at start.io. forward(1) returns to a.io. Visiting
c.io then discards b.io, so the largest forward step only reaches c.io,
and back(3) walks all the way home to start.io.
```

### Constraints

- `1 <= homepage.length <= 20`
- `1 <= url.length <= 20`
- `1 <= steps <= 100`
- `homepage` and `url` consist of `'.'` or lowercase English letters.
- At most `5000` calls are made to `visit`, `back`, and `forward`.

## Hints

### Hint 1

Keep the pages in a list with the cursor as an index — `visit` truncates
the list after the cursor and appends.

### Hint 2

Two stacks give the same shape: past pages and discarded future pages,
popped and pushed as the cursor moves.
