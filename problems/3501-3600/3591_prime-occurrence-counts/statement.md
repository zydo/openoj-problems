# Prime Occurrence Counts

## Description

Given an integer array nums, decide whether at least one of its occurrence
counts is a prime number.

The occurrence count of a value x is how many entries of nums equal x.
A count qualifies as prime when it is a natural number bigger than 1 whose
only divisors are 1 and the count itself.

Return true if some value's occurrence count is prime, and false
otherwise.

### Example 1

```text
Input: nums = [4,4,4,4,9,9,9,9,9,9]
Output: false
Explanation: 4 appears four times and 9 appears six times; 4 and 6 are
both composite.
```

### Example 2

```text
Input: nums = [6,6,6,1,1]
Output: true
Explanation: 6 appears three times, and three is prime.
```

### Example 3

```text
Input: nums = [0,0,0,0,0,0]
Output: false
Explanation: The only value, 0, appears six times, and six is not prime.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

## Hints

### Hint 1

Tally how often each distinct value appears — a hash map does this in one
pass over the array.

### Hint 2

Test every tally for primality with trial division: for a count f, no
divisor d with d * d <= f may split f.
