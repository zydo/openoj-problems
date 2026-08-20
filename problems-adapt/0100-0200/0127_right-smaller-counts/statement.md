# Right Smaller Counts

## Description

Given an integer array `nums`, return an array `answer` of the same length
where `answer[i]` is the number of elements to the right of position `i`
that are strictly smaller than `nums[i]`.

An equal value is not smaller, and nothing is ever to the right of the last
position.

### Example 1

```text
Input: nums = [3,8,4,1,6]
Output: [1,3,1,0,0]
Explanation: Only 1 is smaller than 3 and lies after it. Everything after 8
(4, 1 and 6) is smaller. After 4 only 1 qualifies, and the last two positions
have nothing below them to their right.
```

### Example 2

```text
Input: nums = [-2,-2,7,-5,0]
Output: [1,1,2,0,0]
Explanation: The first -2 does not count the second -2, since equal is not
smaller; only -5 falls below it. Two values lie to the right of 7 and below it.
```

### Example 3

```text
Input: nums = [9]
Output: [0]
Explanation: Nothing lies to the right of the only position.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`

## Hints

### Hint 1

Walk from the right end. When you stand on an element, everything already
visited is exactly the set of elements to its right, so the task at each step
reduces to: how many visited values are strictly below this one?

### Hint 2

Values are confined to `[-10⁴, 10⁴]`, so a frequency structure indexed by
shifted value — a Fenwick tree over the 20005 possible values — answers that
question with a prefix query in logarithmic time.

### Hint 3

Query before inserting the current element, then insert it; the next step to
the left must be able to count it.
