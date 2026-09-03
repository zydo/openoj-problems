# The Longest Fibonacci Streak

## Description

An array of positive integers `nums` is given. A stretch of consecutive
elements is called a Fibonacci streak when, starting from its third element,
every term is the sum of the two terms right before it — a run like
`a, b, a+b, a+2b, ...`. Any stretch of one or two elements qualifies
automatically.

Measure the longest run of adjacent elements in `nums` that forms a
Fibonacci streak, and return its length.

### Example 1

```text
Input: nums = [3,4,7,11,18,1,1,2]
Output: 5
Explanation: The run [3,4,7,11,18] is the winner: 3 + 4 = 7, 4 + 7 = 11,
and 7 + 11 = 18. The trailing [1,1,2] also forms a streak, but it reaches
only length 3.
```

### Example 2

```text
Input: nums = [2,5,7,12,20,32]
Output: 4
Explanation: [2,5,7,12] is a Fibonacci streak because 2 + 5 = 7 and
5 + 7 = 12. The next element 20 overshoots 7 + 12 = 19, breaking the run,
and only [12,20,32] forms after that — length 3.
```

### Example 3

```text
Input: nums = [9,9,9]
Output: 2
Explanation: No triple works here, since 9 + 9 never appears as a following
element, so the best streak is any adjacent pair: length 2.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Every adjacent pair is already a streak, so start counting at length 2.

### Hint 2

Walking left to right, an element continues the streak when it equals the
sum of the two before it; otherwise the counter drops back to 2.

### Hint 3

One pass that remembers the best counter value so far answers everything.
