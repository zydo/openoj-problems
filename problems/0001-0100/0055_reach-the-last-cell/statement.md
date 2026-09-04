# Reach The Last Cell

## Description

You are standing on the first cell of an array `steps` of non-negative
integers. The value `steps[i]` is the farthest you may advance in one move
from cell `i` — anywhere from staying put to moving that many cells forward.

Return `true` if some sequence of moves lands you on the final cell, and
`false` if no sequence does.

### Example 1

```text
Input: steps = [3,1,2,0,4]
Output: true
Explanation: Advance 1 to cell 1, then 3 more to land exactly on cell 4.
Taking the full 3 from the start would also work: cell 3 is a dead end, but
cell 1 offers the way through.
```

### Example 2

```text
Input: steps = [3,2,1,0,1]
Output: false
Explanation: From cell 0 you may stop anywhere up to cell 3, and every one of
those cells leads at best back to cell 3, whose value is 0. Cell 4 is sealed
off.
```

### Example 3

```text
Input: steps = [0]
Output: true
Explanation: The first cell is also the last, so no move is needed.
```

### Constraints

- `1 <= steps.length <= 10^4`
- `0 <= steps[i] <= 10^5`

## Hints

### Hint 1

Listing move sequences explodes combinatorially, but the question you actually
need answered at each cell is smaller: _can I stand here at all?_

### Hint 2

If some cell `j` is standable, every cell before it is too — you can always
shorten a move. So standability spreads as one growing interval from the left,
summarised by a single number: the farthest standable cell so far.

### Hint 3

Sweep left to right. Standing on cell `i`, its value extends the interval to
`i + steps[i]`. If the sweep ever meets a cell beyond the interval, a gap has
opened that no later value can close — answer `false`.
