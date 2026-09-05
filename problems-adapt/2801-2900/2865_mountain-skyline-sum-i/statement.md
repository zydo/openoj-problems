# Mountain Skyline Sum I

## Description

A row of `n` consecutive towers stands in front of you, and `heights[i]`
counts the bricks currently stacked in tower `i`. You may take bricks away
from the towers — any number from each, including none — but you cannot add
bricks or move them between towers.

After the removals the row should read like a mountain: the surviving
heights never decrease up to some position and never increase past it, with
the tallest stretch (one tower, or several neighbors of equal height)
forming the summit.

What is the largest total number of bricks the row can still hold while
forming such a mountain? Return that maximum sum of heights.

### Example 1

```text
Input: heights = [1,4,3,6,2]
Output: 15
Explanation: Taking tower 3 as the summit, the row is shaved into
[1,3,3,6,2], which rises to the peak and falls after it. Its heights total
15, and no mountain arrangement keeps more.
```

### Example 2

```text
Input: heights = [9,7,8,2,5]
Output: 27
Explanation: The first tower serves as the summit: [9,7,7,2,2] never
increases, so it is a valid mountain, and it holds 27 bricks.
```

### Example 3

```text
Input: heights = [7,2,8,9,4]
Output: 25
Explanation: Peaking at tower 3, the row becomes [2,2,8,9,4] — a sum of
25. No other choice of summit keeps more bricks.
```

### Constraints

- `1 <= n == heights.length <= 10³`
- `1 <= heights[i] <= 10⁹`

## Hints

### Hint 1

Consider every index as the candidate summit and ask what the best mountain
through it looks like.

### Hint 2

With the summit fixed at `i`, each tower left of `i` can be no taller than
its right neighbor, so it ends at the running minimum toward the peak; the
towers to the right behave symmetrically.

### Hint 3

A stack of surviving height-runs lets each sweep fold a whole clamped
stretch into one multiplication, keeping every candidate summit's sum a
constant-time update.
