# Popularity Stack

## Description

Build a container that takes integers one at a time and, on request, gives
back the value it holds the most copies of. When several values are tied on
that count, the one to give back is whichever of them has the most recently
added copy still inside — so among equals the container behaves like a stack.

Implement the `PopularityStack` class:

- `PopularityStack()` — start with nothing stored.
- `void push(int val)` — add one occurrence of `val`.
- `int pop()` — take the value described above, discard its newest copy, and
  return the value.

Copies are counted, not merged: a value added three times is held three
times, and one `pop` of it leaves two copies behind.

### Example 1

```text
Input:
["PopularityStack", "push", "push", "push", "push", "push", "pop", "pop", "push", "pop", "pop", "pop"]
[[], [2], [6], [2], [6], [9], [], [], [6], [], [], []]
Output: [null, null, null, null, null, null, 6, 2, null, 6, 9, 6]
Explanation:
PopularityStack box = new PopularityStack();
box.push(2); box.push(6); box.push(2); box.push(6); box.push(9);
// two copies each of 2 and 6, one of 9
box.pop();   // 6 — tied with 2 on copies, but 6's newest copy is later
box.pop();   // 2 — now the only value held twice
box.push(6); // 6 is back up to two copies
box.pop();   // 6 — again the only value held twice
box.pop();   // 9 — all counts are one, and 9's copy is the newest
box.pop();   // 6
```

### Example 2

```text
Input:
["PopularityStack", "push", "push", "push", "pop", "pop", "pop"]
[[], [3], [1], [8], [], [], []]
Output: [null, null, null, null, 8, 1, 3]
Explanation: With no value repeated, every count is one and the tie-break
alone decides, so the container empties in reverse order of arrival.
```

### Constraints

- `0 <= val <= 10⁹`
- `push` and `pop` are called at most `2 * 10⁴` times in total.
- Every `pop` happens while at least one occurrence is stored.

## Hints

### Hint 1

`pop` answers two questions at once — which value has the most copies, and
which of the tied values holds the newest one. A single stack knows the order but not the
counts; a map of counts knows the counts but not the order. Keep both, and
make the order information count-aware rather than global.

### Hint 2

Give each count level its own stack. When a value's copy count rises to `f`,
push the value onto level `f`'s stack. Then level `f` lists, bottom to top, the
values that reached `f` copies in the order they got there, and the top of the
highest non-empty level is exactly the value `pop` owes you.

### Hint 3

Removing that value does not disturb the levels below it: its earlier entry on
level `f - 1` is still there, which is precisely the record that it now has
`f - 1` copies. Track the highest occupied level in a variable instead of
searching for it — it climbs by one when an addition reaches a new height, and
drops by exactly one when a removal empties the top level, since nothing else
can be that high.
