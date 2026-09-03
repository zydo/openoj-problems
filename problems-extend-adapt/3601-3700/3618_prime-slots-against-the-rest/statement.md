# Prime Slots Against The Rest

## Description

You are given an integer array `nums`. Sort its elements into two piles by
position:

- every element sitting at a prime index of `nums` joins pile A;
- every element at a non-prime index joins pile B.

Return `|sum(A) - sum(B)|`, the absolute gap between the two piles' sums.
A pile holding no elements sums to 0.

### Example 1

```text
Input: nums = [5,-2,6,8,-1]
Output: 12
Explanation: The prime indices here are 2 and 3, so pile A collects
nums[2] = 6 and nums[3] = 8, giving sum(A) = 14. Pile B collects the rest:
5, -2, and -1, giving sum(B) = 2. The gap is |14 - 2| = 12.
```

### Example 2

```text
Input: nums = [4]
Output: 4
Explanation: A length-1 array has no prime index, so pile A stays empty
and sums to 0, while pile B holds the single element 4. The gap is
|0 - 4| = 4.
```

### Example 3

```text
Input: nums = [10,-10,10,-10,10,-10]
Output: 20
Explanation: The prime indices are 2, 3, and 5, so sum(A) = 10 - 10 - 10 =
-10 while sum(B) = 10 - 10 + 10 = 10. The gap is |-10 - 10| = 20.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Hints

### Hint 1

Mark every prime up to `nums.length` once — a sieve over the index range is
cheaper than testing each index separately.

### Hint 2

With the marks in hand, sweep `nums` once: add each element to the prime
pile's total when its index is marked, to the other total otherwise, and
return the absolute difference of the two totals.
