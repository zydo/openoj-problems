# Candy Harvest From Sealed Boxes

## Description

There are `n` boxes numbered `0` to `n - 1`. Four arrays describe the
collection:

- `status[i]` is `1` when box `i` starts unlocked and `0` when it
  starts sealed;
- `candies[i]` is the stash inside box `i`;
- `keys[i]` lists the boxes that box `i` can unseal once opened;
- `containedBoxes[i]` lists the boxes hiding inside box `i`.

You begin holding the boxes named in `initialBoxes`. Opening a box you
hold yields its candies, every key it carries, and every box it
contains — but a held box can only be opened while it is unlocked.

Harvest as many candies as the rules allow and return the total.

### Example 1

```text
Input: status = [1,0,1,0], candies = [5,10,3,8], keys = [[],[],[1],[]],
containedBoxes = [[1,2],[],[],[]], initialBoxes = [0]
Output: 18
Explanation: Box 0 opens for 5 candies and hands you boxes 1 and 2.
Box 1 is sealed, so set it aside; box 2 opens for 3 candies and
carries the key to box 1, which then opens for its 10.
```

### Example 2

```text
Input: status = [1,1,0,0], candies = [2,6,4,1], keys = [[1,2],[],[],[]],
containedBoxes = [[],[2],[],[]], initialBoxes = [0,1]
Output: 12
Explanation: Box 0 yields 2 candies plus the keys to boxes 1 and 2.
Box 1 is already in hand and opens for 6, and it contains box 2 —
which the earlier key unseals for 4 more. Box 3 never surfaces, so
its single candy stays out of reach.
```

### Example 3

```text
Input: status = [1,1], candies = [5,5], keys = [[],[]],
containedBoxes = [[],[]], initialBoxes = []
Output: 0
Explanation: Holding no boxes means harvesting nothing.
```

### Constraints

- `n == status.length == candies.length == keys.length ==
containedBoxes.length`
- `1 <= n <= 1000`
- `status[i]` is `0` or `1`.
- `1 <= candies[i] <= 1000`
- `0 <= keys[i].length <= n`, and its entries are unique labels from
  `0` to `n - 1`.
- `0 <= containedBoxes[i].length <= n`, and its entries are unique
  labels from `0` to `n - 1`.
- A box hides inside at most one other box.
- `0 <= initialBoxes.length <= n`, holding labels from `0` to `n - 1`.

## Hints

### Hint 1

Treat "I own it" and "it is unlocked" as two separate events; a box
becomes harvestable only once both have happened.

### Hint 2

Keep a queue of owned openable boxes and a parking set for owned but
sealed ones. Each key or contained-box event may release a parked
box; when the queue drains, no surviving box can ever satisfy both
conditions.
