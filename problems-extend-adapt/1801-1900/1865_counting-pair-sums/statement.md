# Counting Pair Sums

## Description

Two integer arrays sit side by side. The first never changes; the second
occasionally has one of its entries bumped up by some amount. Repeatedly,
you are asked how many ways one element of each array can be picked so
the two add up to a requested total.

Implement the `PairSums` class:

- `PairSums(int[] nums1, int[] nums2)` initializes the structure with the
  two arrays.
- `void add(int index, int val)` applies `nums2[index] += val`.
- `int count(int tot)` returns the number of index pairs `(i, j)` with
  `nums1[i] + nums2[j] == tot`.

### Example 1

```text
Input:
["PairSums", "count", "add", "count", "add", "count"]
[[[2, 3, 3], [4, 1, 2, 4]], [5], [1, 2], [7], [0, 3], [8]]
Output: [null, 2, null, 4, null, 0]
Explanation:
PairSums sums = new PairSums([2, 3, 3], [4, 1, 2, 4]);
sums.count(5);  // return 2; both 3s pair with nums2[2] = 2 to make 5
sums.add(1, 2); // now nums2 = [4, 3, 2, 4]
sums.count(7);  // return 4; each 3 pairs with either 4, making 3 + 4
sums.add(0, 3); // now nums2 = [7, 3, 2, 4]
sums.count(8);  // return 0; no 6 exists in nums2 for the 3s, nor a 5
                // or 6 for anything else
```

### Constraints

- `1 <= nums1.length <= 1000`
- `1 <= nums2.length <= 10⁵`
- `1 <= nums1[i] <= 10⁹`
- `1 <= nums2[i] <= 10⁵`
- `0 <= index < nums2.length`
- `1 <= val <= 10⁵`
- `1 <= tot <= 10⁹`
- At most `1000` calls are made to `add` and `count` each.

## Hints

### Hint 1

Only the second array changes, and never by much per call — mirror each
mutation in a value-frequency table the moment it happens.

### Hint 2

A `count(tot)` sweep over the short first array then needs only one
lookup per element: how many second-array entries hold `tot - nums1[i]`.
