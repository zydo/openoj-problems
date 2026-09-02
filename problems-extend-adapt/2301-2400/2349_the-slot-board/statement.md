# The Slot Board

## Description

A board of numbered slots — each slot index may hold one number, or
nothing at all. Two operations keep it up to date:

- Setting a slot writes its number, replacing whatever was there
  before. A slot that has never been set is treated as empty.
- Looking up a number asks for the smallest slot index currently
  holding it — or reports that no slot holds it.

Implement the `SlotBoard` class:

- `SlotBoard()` initializes the board with every slot empty.
- `void change(int index, int number)` puts `number` into slot `index`,
  replacing any number previously held there.
- `int find(int number)` returns the smallest index of a slot currently
  holding `number`, or `-1` if no slot holds it.

### Example 1

```text
Input:
["SlotBoard", "change", "change", "change", "find", "change", "find", "find", "change", "find", "change", "find"]
[[], [10, 5], [4, 5], [10, 7], [5], [4, 9], [5], [9], [2, 9], [9], [10, 5], [5]]
Output: [null, null, null, null, 4, null, -1, 4, null, 2, null, 10]
Explanation:
SlotBoard board = new SlotBoard();
board.change(10, 5); // slot 10 now holds 5.
board.change(4, 5);  // slot 4 now holds 5.
board.change(10, 7); // slot 10 now holds 7, replacing 5.
board.find(5);       // slot 4 is the only slot holding 5, so return 4.
board.change(4, 9);  // slot 4 now holds 9, replacing 5.
board.find(5);       // no slot holds 5 any more, so return -1.
board.find(9);       // slot 4 holds 9, so return 4.
board.change(2, 9);  // slot 2 now holds 9.
board.find(9);       // slots 2 and 4 hold 9; the smaller is 2.
board.change(10, 5); // slot 10 now holds 5 again.
board.find(5);       // slot 10 is the only slot holding 5, so return 10.
```

### Constraints

- `1 <= index, number <= 10⁹`
- At most `10⁵` calls in total are made to `change` and `find`.

## Hints

### Hint 1

Two maps are enough for the bookkeeping: one from each slot to the
number it holds, and one from each number to the slots holding it.

### Hint 2

Reassignments leave stale entries in the number-to-slots map — that is
fine as long as `find` skips any slot whose current number differs, and
the slots for each number are kept in an ordered structure so the
smallest valid one is quick to reach.
