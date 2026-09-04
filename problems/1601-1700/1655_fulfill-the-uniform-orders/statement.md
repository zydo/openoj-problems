# Fulfill the Uniform Orders

## Description

A warehouse holds a multiset of items described by `nums`, an array of
`n` values in which no more than 50 distinct values occur. A queue of
`m` customers has arrived with `quantity`, where `quantity[i]` is how
many items customer `i` expects. Customer `i` walks away happy exactly
when they receive exactly `quantity[i]` items **and every item they
receive is the same value**.

Decide whether the whole stock can be handed out so that all `m`
customers are happy at once. Each item goes to at most one customer, and
several customers may draw from the same value as long as the value's
total count covers them; leftover items may simply stay on the shelf.
Return `true` when a satisfying handout exists and `false` otherwise.

### Example 1

```text
Input: nums = [7, 7, 7, 2, 2], quantity = [3, 2]
Output: true
Explanation: The first customer takes the three 7s and the second takes
the two 2s.
```

### Example 2

```text
Input: nums = [4, 4, 4], quantity = [2, 2]
Output: false
Explanation: Both customers want two copies of one value, which needs
four copies in total, but only three 4s exist.
```

### Example 3

```text
Input: nums = [9, 1, 1, 9, 1], quantity = [3]
Output: true
Explanation: The lone customer collects the three 1s; the 9s are left
over, which is allowed.
```

### Example 4

```text
Input: nums = [6, 6, 3, 3, 3, 8], quantity = [2, 3, 1]
Output: true
Explanation: The customer ordering 3 takes the 3s, the one ordering 2
takes the 6s, and the one ordering 1 takes the 8.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= 1000`
- `m == quantity.length`
- `1 <= m <= 10`
- `1 <= quantity[i] <= 10^5`
- `nums` contains at most 50 distinct values.

## Hints

### Hint 1

Reduce `nums` to its value counts up front — the actual values carry no
information, only how many copies of each exist.

### Hint 2

Because every customer demands a single repeated value, one value can be
modeled as "serving" a whole group of customers whose orders together do
not exceed that value's count.

### Hint 3

Process values one at a time over subsets of customers encoded as
bitmasks, letting each value either sit idle or take over some still
unserved subset whose total order fits its count; `m <= 10` keeps the
subset table tiny.
