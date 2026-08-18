# Sort Three Values

## Description

You are given an integer array `nums` in which every element is one of the
three values `0`, `1`, or `2`.

Rearrange the elements into nondecreasing order and return the array.

Calling your language's built-in sorting routine is not allowed — the whole
task is doing the rearrangement yourself.

### Example 1

```text
Input: nums = [1,0,2,1,0,0,2]
Output: [0,0,0,1,1,2,2]
Explanation: Three 0s, then two 1s, then two 2s.
```

### Example 2

```text
Input: nums = [2,2,1]
Output: [1,2,2]
Explanation: No `0` appears at all — the output holds only the values present.
```

### Example 3

```text
Input: nums = [1]
Output: [1]
Explanation: A single element needs no rearrangement.
```

### Constraints

- `1 <= nums.length <= 300`
- each element of `nums` is `0`, `1`, or `2`

### Follow-up

A tally pass followed by a write pass is two sweeps of the array. Can you
finish in a single sweep using only constant extra memory?

## Hints

### Hint 1

With three possible values, knowing how many of each value the array holds is
enough to write the final array down — comparing elements against each other
buys you nothing.

### Hint 2

So one sweep can be spent entirely on tallying the three occurrence counts.

### Hint 3

A second sweep writes the values back in blocks: the counted number of `0`s,
then the `1`s, then the `2`s, through a write position that never moves
backwards.

### Hint 4

For the single-sweep version, think of the array as three growing regions
plus an unexplored tail. What does the invariant around the middle boundary
let you do with a `2` the moment you meet one?
