# The Fewest Boxes for the Apples

## Description

You are given two arrays: `apple` of length `n` and `capacity` of length
`m`. There are `n` packs of apples — pack `i` holds `apple[i]` apples — and
`m` boxes, where box `i` can hold at most `capacity[i]` apples.

Pick as few boxes as possible so that all `n` packs fit into the chosen
boxes. Apples from one pack do not have to stay together: a pack may be
split across any number of boxes.

Return that smallest number of boxes.

### Example 1

```text
Input: apple = [3,5,1], capacity = [6,2,4]
Output: 2
Explanation: The packs hold 3 + 5 + 1 = 9 apples in total. The boxes of
capacity 6 and 4 fit them all, so 2 boxes are enough.
```

### Example 2

```text
Input: apple = [2,2,2], capacity = [5,5]
Output: 2
Explanation: The three packs hold 6 apples in total. One box of capacity 5
cannot take them all, but the two boxes together hold 10, so both are used.
```

### Constraints

- `1 <= n == apple.length <= 50`
- `1 <= m == capacity.length <= 50`
- `1 <= apple[i], capacity[i] <= 50`
- The input is constructed so that the packs always fit in the boxes.

## Hints

### Hint 1

Order the boxes by capacity, from largest to smallest.

### Hint 2

Only the total number of apples matters, because packs can be split. Take
boxes from that ordered list until their combined capacity covers the
total; the count taken is the answer.
