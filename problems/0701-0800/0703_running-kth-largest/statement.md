# Running Kth Largest

## Description

A pool of integers starts with some values already in it and grows one value
at a time. `k` is fixed at the start, and after every arrival the kth largest
value in the pool must be reported — kth largest counted with repetition, so a
pool of `[9, 9, 4]` has `9` as both its largest and its second largest.

Implement the `RunningKthLargest` class:

- `RunningKthLargest(int k, int[] nums)` — fix `k` and seed the pool with the
  values of `nums`.
- `int add(int val)` — put `val` into the pool and return the kth largest value
  the pool now holds.

`k` never exceeds the pool size after the first arrival, so every `add` has an
answer to return.

### Example 1

```text
Input:
["RunningKthLargest", "add", "add", "add", "add"]
[[3, [2, 7, 4, 7]], [5], [9], [1], [8]]
Output: [null, 5, 7, 7, 7]
Explanation:
RunningKthLargest pool = new RunningKthLargest(3, [2, 7, 4, 7]);
pool.add(5);  // pool holds 7 7 5 4 2, third largest is 5
pool.add(9);  // pool holds 9 7 7 5 4 2, third largest is 7
pool.add(1);  // 1 lands below the top three, still 7
pool.add(8);  // pool holds 9 8 7 7 5 4 2 1, third largest is 7
```

### Example 2

```text
Input:
["RunningKthLargest", "add", "add", "add"]
[[1, []], [5], [-2], [11]]
Output: [null, 5, 5, 11]
Explanation:
RunningKthLargest pool = new RunningKthLargest(1, []);
pool.add(5);   // the pool was empty, so 5 is the largest
pool.add(-2);  // 5 still leads
pool.add(11);  // 11 takes the lead
```

### Constraints

- `0 <= nums.length <= 10⁴`
- `1 <= k <= nums.length + 1`
- Every seeded value and every added value lies in `[-10⁴, 10⁴]`
- `add` is called at most `10⁴` times

## Hints

### Hint 1

A value that is not among the `k` largest can never become the answer later:
arrivals only push the boundary upwards. So the pool below the top `k` can be
discarded on sight, and the state worth carrying is just those `k` values.

### Hint 2

Within those `k` values the one you report is the **least**, since it sits
exactly `k` places down from the top. Pick a structure whose least element is
free to read — a min-heap.

### Hint 3

Hold the heap at size `k`: push every arrival, and if that takes the size to
`k + 1`, drop the root, which is precisely the value that just left the top
`k`. Seeding does the same thing in bulk — heapify the initial values and drop
roots until `k` remain.
