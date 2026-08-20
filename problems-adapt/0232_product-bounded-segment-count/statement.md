# Product-Bounded Segment Count

## Description

You are given a sequence of positive integers, `values`, and a nonnegative
integer `limit`.

Count the nonempty contiguous segments whose element product is strictly
smaller than `limit`.

### Example 1

```text
Input: values = [4,2,5,3], limit = 50
Output: 9
Explanation: The qualifying segments are [4], [2], [5], [3], [4,2],
[2,5], [5,3], [4,2,5], and [2,5,3].
```

### Example 2

```text
Input: values = [3,1,6,2], limit = 10
Output: 6
Explanation: The qualifying segments are [3], [1], [6], [2], [3,1], and
[1,6].
```

### Constraints

- `1 <= values.length <= 3 * 10^4`
- `1 <= values[i] <= 1000`
- `0 <= limit <= 10^6`

## Hints

### Hint 1

Because every value is positive, extending a segment cannot decrease its
product.

### Hint 2

Sweep the right endpoint and move the left endpoint forward whenever the
current product reaches the limit.

### Hint 3

Once the active window is valid, every suffix of it ending at the current
right endpoint is also valid.
