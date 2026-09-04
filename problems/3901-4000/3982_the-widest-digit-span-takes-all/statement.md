# The Widest Digit Span Takes All

## Description

For an integer, define its **digit span** as the gap between its largest
decimal digit and its smallest one. (A value written with a single repeated
digit has span `0`; `5724` has span `7 - 2 = 5`.)

Look at every number in `nums` and find the largest digit span among them.
Return the sum of the numbers whose own digit span is exactly that largest
value — the widest span takes all of them.

### Example 1

```text
Input: nums = [13,258,406,777]

Output: 664

Explanation:

The digit spans are 13: 3 - 1 = 2, 258: 8 - 2 = 6, 406: 6 - 0 = 6, and
777: 0. The widest span is 6, reached by 258 and 406, so the answer is
258 + 406 = 664.
```

### Example 2

```text
Input: nums = [19,91,55]

Output: 110

Explanation:

19 and 91 both span 9 - 1 = 8, while 55 spans 0. The winners are 19 and 91,
and 19 + 91 = 110.
```

### Example 3

```text
Input: nums = [42]

Output: 42

Explanation:

With a single number there is nothing to compete against; 42 wins by default
and the answer is 42.
```

### Constraints

- `1 <= nums.length <= 100`
- `10 <= nums[i] <= 10^5`

## Hints

### Hint 1

Strip digits off each value with `% 10` and `// 10`, tracking the smallest and
largest digit seen; their difference is the value's digit span.

### Hint 2

Two sweeps suffice: first find the winning span across the array, then add up
every value whose span matches it.
