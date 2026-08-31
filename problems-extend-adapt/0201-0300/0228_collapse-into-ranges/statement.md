# Collapse Into Ranges

## Description

You are given `nums`, an array of unique integers already sorted in
ascending order. Group its elements into the smallest possible list of
consecutive runs: every number in `nums` must fall inside exactly one
run, and no integer that is skipped between runs may be represented as
part of any range.

Format each run `[a, b]` as a string:

- `"a->b"` when the run spans more than one value (`a != b`)
- `"a"` when the run is a single value (`a == b`)

Return the runs as a list of these strings, in the same left-to-right
order the values appear in `nums`.

### Example 1

```text
Input: nums = [1,2,3,5,7,8,9,11]
Output: ["1->3","5","7->9","11"]
Explanation: The runs are:
[1,3] --> "1->3"
[5,5] --> "5"
[7,9] --> "7->9"
[11,11] --> "11"
```

### Example 2

```text
Input: nums = [-3,-2,0,1,2,4]
Output: ["-3->-2","0->2","4"]
Explanation: The runs are:
[-3,-2] --> "-3->-2"
[0,2] --> "0->2"
[4,4] --> "4"
```

### Constraints

- `0 <= nums.length <= 20`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- All the values of `nums` are unique.
- `nums` is sorted in ascending order.
