# Split Into Letter-Exclusive Parts

## Description

You are given a lowercase string `s`. Cut it into consecutive pieces, keeping
every character and their order, so that no letter turns up in two different
pieces: whichever piece a letter lands in, all of its occurrences land there
too.

Among the ways to do this, take the one with the greatest number of pieces, and
return their lengths in left-to-right order.

### Example 1

```text
Input: s = "mnmopnoqrsrq"
Output: [7,5]
Explanation: The first seven characters, "mnmopno", use m, n, o and p, and none
of those four shows up again afterwards. The remainder, "qrsrq", is closed the
same way. Cutting anywhere inside "mnmopno" would strand a later m, n or o on
the wrong side.
```

### Example 2

```text
Input: s = "xyzzyx"
Output: [6]
Explanation: The x at the end forces the first piece to run to the very last
character, so no cut is possible at all.
```

### Example 3

```text
Input: s = "ffgehge"
Output: [2,5]
Explanation: The f is finished after two characters, which opens a cut there.
The rest, "gehge", is held together by the e, whose two copies straddle the h
and the second g.
```

### Constraints

- `1 <= s.length <= 500`
- every character of `s` is a lowercase English letter

## Hints

### Hint 1

Whatever piece a letter falls into has to reach as far as that letter's final
occurrence. So knowing, for each of the 26 letters, the largest index where it
appears tells you how far a piece is forced to stretch.

### Hint 2

Sweep left to right and carry the furthest final occurrence among the letters
met since the current piece began. While the current index sits before that
mark, a cut is impossible.

### Hint 3

The moment the index catches up with the mark, every letter opened in the piece
is also finished inside it, so cutting there is legal — and cutting at the first
legal spot each time is what maximises the count, since postponing a cut only
glues two pieces together.
