# Even Sum From K Picks

## Description

You are given an integer array `nums` and an integer `k`. Pick exactly `k`
elements of `nums` — any `k` positions, order irrelevant — so that their sum
is as large as possible and even. Return that largest even sum, or `-1` if no
choice of `k` elements adds up to an even number.

A subsequence merely skips some elements while keeping the rest in order;
since only the chosen values feed the sum, any set of `k` positions qualifies.

### Example 1

```text
Input: nums = [10,21,33,40,4], k = 3
Output: 94
Explanation: The three largest values give 40 + 33 + 21 = 94, which is
already even, and no other trio can total more.
```

### Example 2

```text
Input: nums = [8,3,6,9], k = 2
Output: 14
Explanation: The best pair 9 + 8 = 17 lands odd, so one element must be
traded: swapping the 9 for the unused 6 yields 8 + 6 = 14.
```

### Example 3

```text
Input: nums = [2,4,6,8], k = 3
Output: 18
Explanation: The three largest values 8 + 6 + 4 = 18 happen to be even as
they stand, so nothing needs to change.
```

### Example 4

```text
Input: nums = [5,2], k = 2
Output: -1
Explanation: The only possible pick of both elements sums to 7 — odd — and
there is nothing to swap it with.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Sort out the parity rules first: even plus even and odd plus odd both stay
even, while mixing one odd with one even turns the total odd.

### Hint 2

So a selection sums to an even number exactly when it contains an even count
of odd values.

### Hint 3

Start from the `k` largest values. If their total is odd, the cheapest repair
trades away the smallest picked odd for the largest unpicked even, or the
smallest picked even for the largest unpicked odd; take whichever repair
exists and scores higher, otherwise return `-1`.
