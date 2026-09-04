# First Singleton In The Queue

## Description

A processing queue receives integers one at a time, and at any moment you
need to know the first integer in the queue that has arrived exactly once
so far.

Implement the `SingletonQueue` class:

- `SingletonQueue(int[] nums)` initializes the queue with the given
  integers, in order.
- `int showSingleton()` returns the first integer currently in the queue
  that has appeared exactly once, or `-1` if there is no such integer.
- `void add(int value)` appends `value` to the queue.

### Example 1

```text
Input:
["SingletonQueue","showSingleton","add","showSingleton","add","showSingleton","add","showSingleton"]
[[[3,5,3,8]],[],[5],[],[1],[],[8],[]]
Output: [null,5,null,8,null,8,null,1]
Explanation: The queue starts as [3,5,3,8]; the 3 is already a repeat, so
the first singleton is 5. Adding a second 5 demotes it, leaving 8. The
newly added 1 sits behind 8 in arrival order, so 8 remains the answer
until the second 8 arrives — after which 1 is the only singleton left.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁸`
- `1 <= value <= 10⁸`
- At most `50000` calls are made to `showSingleton` and `add`.

## Hints

### Hint 1

Keep the arrival order in a list and each value's current count in a hash
map.

### Hint 2

A doubly linked list of still-single values lets `add` demote a repeat in
O(1), and the front of that list is always the answer.
