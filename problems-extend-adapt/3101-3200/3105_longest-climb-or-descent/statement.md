# Longest Climb or Descent

## Description

An array of integers `nums` is laid out before you. A stretch of the
array moves in one direction when every step inside it goes up
(strictly increasing) or every step goes down (strictly decreasing); a
single element trivially qualifies.

Measure the longest one-directional stretch `nums` contains and return
its length.

### Example 1

```text
Input: nums = [8,7,4,5,1]
Output: 3
Explanation: The opening run [8,7,4] descends at every step and spans
3 elements; nothing longer moves in a single direction.
```

### Example 2

```text
Input: nums = [2,2,3,3,4]
Output: 2
Explanation: Repeated values break the runs — [2,3] climbs strictly
and so does [3,4], but no stretch of 3 elements keeps stepping up
because each rise is interrupted by an equal neighbor.
```

### Example 3

```text
Input: nums = [10,6,3,8,9]
Output: 3
Explanation: [10,6,3] falls strictly for 3 elements and [3,8,9] rises
strictly for 3, so the best one-directional stretch has length 3.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

Sweep once carrying two running lengths: the longest strictly rising
stretch ending at the current position and the longest strictly falling
one.

### Hint 2

A step up extends the rising length and restarts the falling one; a
step down does the reverse; equal neighbors restart both.

### Hint 3

The answer is the larger of the two lengths at their largest, which
never dips below 1 since every element alone is a valid stretch.
