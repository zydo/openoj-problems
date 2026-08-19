# Fewest Swaps to Gather the Ones

## Description

You are given a binary array `bits`. One swap picks two positions and
exchanges their values. Moving the block of ones is free of charge — only
count the swaps needed to make all of the `1`s occupy one contiguous run of
positions; where that run ends up does not matter.

Return the smallest number of swaps that achieves it.

### Example 1

```text
Input: bits = [1,0,0,1,0,1]
Output: 1
Explanation: Swapping positions 0 and 4 yields [0,0,0,1,1,1] — every one
now sits in one run.
```

### Example 2

```text
Input: bits = [1,0,0,0,1]
Output: 1
Explanation: The two ones are brought together by swapping position 0 with
position 3: [0,0,1,1,0]. Placing the run at the right end instead costs the
same.
```

### Example 3

```text
Input: bits = [0,0,1,1,1,0,0]
Output: 0
Explanation: The ones already form a single run, so no swap is needed.
```

### Constraints

- `1 <= bits.length <= 10⁵`
- Each element of `bits` is `0` or `1`.

## Hints

### Hint 1

How long must the gathered run of ones be? Count the ones in the whole
array — that count, call it `ones`, fixes the run's length exactly; only its
position is up to you.

### Hint 2

Suppose you commit to a final position for the run. Every `0` inside that
window must be swapped out, and one swap removes exactly one such `0` — so
the cost of a placement is simply how many zeros lie inside it.

### Hint 3

You are then looking for the length-`ones` window holding the fewest zeros.
Slide the window one position at a time, adjusting the zero count by the two
elements that enter and leave, instead of recounting from scratch.
