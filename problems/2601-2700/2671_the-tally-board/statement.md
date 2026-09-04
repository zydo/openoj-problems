# The Tally Board

## Description

A tally board records numbers as they come and go, and answers one
kind of question about them: is any value currently sitting at exactly
a given count?

Implement the `TallyBoard` class:

- `TallyBoard()` initializes the board with no numbers recorded.
- `void add(int number)` records one occurrence of `number`.
- `void deleteOne(int number)` removes one recorded occurrence of
  `number`; if none is recorded, nothing is removed.
- `boolean hasFrequency(int frequency)` returns `true` if some number
  currently occurs exactly `frequency` times on the board, and `false`
  otherwise.

### Example 1

```text
Input:
["TallyBoard", "add", "add", "add", "hasFrequency", "deleteOne", "hasFrequency", "deleteOne", "hasFrequency", "add", "hasFrequency"]
[[], [5], [5], [5], [3], [5], [2], [5], [1], [5], [2]]
Output: [null, null, null, null, true, null, true, null, true, null, true]
Explanation:
TallyBoard board = new TallyBoard();
board.add(5);            // the board now holds three 5s.
board.add(5);
board.add(5);
board.hasFrequency(3);   // true — 5 occurs exactly 3 times.
board.deleteOne(5);      // two 5s remain.
board.hasFrequency(2);   // true — 5 occurs exactly 2 times.
board.deleteOne(5);      // one 5 remains.
board.hasFrequency(1);   // true — 5 occurs exactly 1 time.
board.add(5);            // back to two 5s.
board.hasFrequency(2);   // true again.
```

### Example 2

```text
Input:
["TallyBoard", "add", "add", "add", "add", "hasFrequency", "deleteOne", "hasFrequency", "hasFrequency"]
[[], [7], [9], [7], [9], [2], [7], [2], [1]]
Output: [null, null, null, null, null, true, null, true, true]
Explanation:
TallyBoard board = new TallyBoard();
board.add(7);
board.add(9);
board.add(7);
board.add(9);            // two 7s and two 9s.
board.hasFrequency(2);   // true — several values occur twice.
board.deleteOne(7);      // one 7 and two 9s remain.
board.hasFrequency(2);   // still true — 9 occurs twice.
board.hasFrequency(1);   // true — 7 now occurs once.
```

### Example 3

```text
Input:
["TallyBoard", "hasFrequency", "deleteOne", "hasFrequency", "add", "deleteOne", "hasFrequency"]
[[], [1], [1], [1], [3], [3], [1]]
Output: [null, false, null, false, null, null, false]
Explanation:
TallyBoard board = new TallyBoard();
board.hasFrequency(1);   // false — nothing is recorded yet.
board.deleteOne(1);      // nothing to remove, so nothing happens.
board.hasFrequency(1);   // still false.
board.add(3);            // one 3 recorded.
board.deleteOne(3);      // the 3 is removed again.
board.hasFrequency(1);   // false — the board is empty.
```

### Constraints

- `1 <= number <= 10⁵`
- `1 <= frequency <= 10⁵`
- At most `2 * 10⁵` calls in total are made to `add`, `deleteOne`, and
  `hasFrequency`.

## Hints

### Hint 1

Keep two maps: one from each recorded value to how many times it
occurs, and one from each count to how many values currently sit at
that count.

### Hint 2

`add` and `deleteOne` each move their value between two adjacent count
buckets — decrement the old bucket, increment the new one. Then
`hasFrequency(frequency)` is just a lookup of that bucket.
