# Largest Subarray Swing

## Description

Take any contiguous run of `nums` — the entries from some index `l`
through some index `r`. Add those entries up: the total can land on
either side of zero. Call `|nums[l] + nums[l+1] + ... + nums[r]|` the
magnitude of that run. Over every run of `nums`, including the empty
one (whose sum is `0`), return the largest magnitude any run reaches.

`|x|` is the absolute value of `x`: it equals `-x` when `x` is
negative and `x` itself otherwise. Because the empty run always scores
`0`, the answer is never negative.

### Example 1

```text
Input: nums = [3,-2,5,-1,4]
Output: 9
Explanation: The whole array sums to 3-2+5-1+4 = 9, and no run gets
further from zero.
```

### Example 2

```text
Input: nums = [-6,4,-2,7,-8]
Output: 9
Explanation: The run [4,-2,7] sums to 9.
```

### Example 3

```text
Input: nums = [2,-7,3,1,-5,6]
Output: 8
Explanation: The run [-7,3,1,-5] sums to -8, whose magnitude 8 beats
every run on the positive side.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Hints

### Hint 1

Ignore the absolute value for a moment: which single quantity would
you maximize over all runs?

### Hint 2

The largest run sum falls to a classic linear-time scan that tracks
the best sum ending at each position.

### Hint 3

The biggest magnitude must belong to either the most positive or the
most negative run sum — negating the negative side turns it into the
same maximization problem.

### Hint 4

So run that scan twice in one pass, tracking the running best and the
running worst, and answer with whichever extreme has the larger
magnitude.
