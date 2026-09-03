# The Majority Element

## Description

An array `nums` of length `n` contains one value that shows up more than
half the time — strictly more than `⌊n / 2⌋` occurrences. That value is
called the majority element, and the input guarantees it always exists.
Report it.

Because the majority is defined by a strict majority of positions, no
array can hold two different values that both qualify.

### Example 1

```text
Input: nums = [5,1,5,2,5,3,5]
Output: 5
Explanation: The value 5 occupies four of the seven positions, and four
is more than half of seven.
```

### Example 2

```text
Input: nums = [-4,-4,-4,7,7]
Output: -4
Explanation: -4 appears three times out of five, beating 7's two.
```

### Example 3

```text
Input: nums = [0,0,0,0]
Output: 0
Explanation: A unanimous array trivially makes 0 the majority.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 5 * 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- A majority element is guaranteed to exist in the array.

### Follow-up

Can you find the majority element in linear time while using only
constant extra space?
