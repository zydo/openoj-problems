# Maximum Non-Adjacent Loot

## Description

You are given an integer array `nums`. Choose any set of positions in which no
two chosen positions sit next to each other, and return the largest total the
chosen values can reach.

Choosing nothing is allowed, so the answer is never negative.

### Example 1

```text
Input: nums = [6,1,2,8]
Output: 14
Explanation: Positions 0 and 3 hold 6 and 8, and they are not neighbours.
Taking 6 and 2 instead would only reach 8.
```

### Example 2

```text
Input: nums = [3,10,4,10,2]
Output: 20
Explanation: The two tens sit at positions 1 and 3 with one position between
them, so both may be taken. Every other legal set totals less.
```

### Example 3

```text
Input: nums = [12,15]
Output: 15
Explanation: The two positions are neighbours, so at most one of them counts;
the larger wins.
```

### Constraints

- `nums` holds at least `1` and at most `100` values.
- Each value is an integer from `0` to `400` inclusive.

## Hints

### Hint 1

Walk the array from the left and think about the last position only. Whatever
happens further back, the decision here is binary: this value joins the set or
it does not.

### Hint 2

If it joins, its neighbour to the left cannot, so the rest of the total is the
best achievable up to two positions back. If it does not, the total is simply
the best achievable up to one position back.

### Hint 3

That leaves a chain in which every answer depends on the two before it — so two
running numbers, advanced together once per position, replace the whole table.
