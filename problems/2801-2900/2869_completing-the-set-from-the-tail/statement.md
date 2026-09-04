# Completing The Set From The Tail

## Description

You are given an array `nums` of positive integers and an integer `k`.

One operation takes the current last element of `nums`, removes it from
the array, and drops it into your collection.

How many operations are needed at minimum for the collection to contain
every value `1, 2, ..., k`? Return that count.

### Example 1

```text
Input: nums = [4,2,3,1,5], k = 3
Output: 4
Explanation: The four tail elements come off in the order 5, 1, 3, 2, and
after the fourth removal the collection holds {1, 2, 3, 5}, covering all
of 1 through 3. Three removals would leave out the 2, so 4 is minimal.
```

### Example 2

```text
Input: nums = [3,1,2,4], k = 1
Output: 3
Explanation: Removing 4 and then 2 still leaves the collection without a
1; the third removal finally claims it. The answer is 3.
```

### Example 3

```text
Input: nums = [6,1,5,2,4,3], k = 6
Output: 6
Explanation: The 6 sits at the very front, so the entire array must be
removed before the collection holds all six values.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= nums.length`
- `1 <= k <= nums.length`
- The input guarantees that values `1, 2, ..., k` can all be collected.

## Hints

### Hint 1

Removals only ever shorten the array from the end, so after `t` operations
your collection is exactly the last `t` elements of `nums`.

### Hint 2

Walk the array from right to left, remembering which of the wanted values
you have already passed.

### Hint 3

The moment all `k` wanted values have been seen, the current element's
position tells you the size of the shortest usable suffix.
