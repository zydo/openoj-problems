# Top Triple Median Total

## Description

You are given an integer array `nums` whose length is a multiple of 3.

You will empty it over several rounds. Each round you choose three
elements still present in the array, remove all three, and score the
median of those three values — the middle one of the trio once its
values are arranged in non-decreasing order.

Every element must eventually be removed, and each round removes exactly
three elements. Return the largest total score you can accumulate across
all rounds.

### Example 1

```text
Input: nums = [5,4,1,7,8,2]
Output: 11
Explanation:
Take 8, 7, and 1 first; their median is 7, leaving [5, 4, 2].
Then take 5, 4, and 2; their median is 4.
The total is 7 + 4 = 11.
```

### Example 2

```text
Input: nums = [6,6,3,3,9,6]
Output: 12
Explanation:
Take 9, 6, and 3 first; their median is 6, leaving [6, 6, 3].
Then take 6, 6, and 3; their median is 6.
The total is 6 + 6 = 12.
```

### Example 3

```text
Input: nums = [4,10,2,7,1,8,9,3,5]
Output: 20
Explanation:
Sorting gives [10,9,8,7,5,4,3,2,1]; grouping (10,9,1), (8,7,2), and
(5,4,3) scores medians 9 + 7 + 4 = 20.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁵`
- `nums.length % 3 == 0`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Put the values in sorted order; once that is done, which concrete
elements travel together in a round stops mattering.

### Hint 2

Work from both ends of the sorted array: each round can spend the
current largest value to carry the current smallest away, letting the
second-largest of the trio be the one that earns its value.
