# Swapping Past The Banned Values

## Description

You are given two integer arrays, `nums` and `banned`, each of length `n`.

The only move available is a swap: pick two distinct indices `i` and `j`
and exchange `nums[i]` with `nums[j]`. You may perform any number of
swaps, including none.

Return the fewest swaps needed so that, at every index `i`, `nums[i]`
differs from `banned[i]`. If no sequence of swaps can achieve that,
return -1.

### Example 1

```text
Input: nums = [3,1,4], banned = [1,3,9]
Output: 0
Explanation: Every slot already holds a value different from its ban, so
no swap is needed.
```

### Example 2

```text
Input: nums = [1,2,3,4], banned = [1,2,3,4]
Output: 2
Explanation: Every index starts out bad. Swap indices 0 and 1 to get
[2,1,3,4], then swap indices 2 and 3 to get [2,1,4,3]; each swap repairs
two bad slots, and no single swap can do better than two, so 2 is the
minimum.
```

### Example 3

```text
Input: nums = [5,5,5,1,2,3], banned = [5,5,5,6,7,8]
Output: 3
Explanation: The three leading slots all hold 5 and are banned from 5; a
swap between two of them exchanges equal values and fixes nothing, so
each of the three needs its own swap against one of the trailing slots,
for 3 swaps total.
```

### Example 4

```text
Input: nums = [8,8], banned = [8,9]
Output: -1
Explanation: Both slots hold 8, index 0 bans 8, and a swap cannot change
the multiset of values, so index 0 can never be satisfied.
```

### Constraints

- `1 <= n == nums.length == banned.length <= 10⁵`
- `1 <= nums[i], banned[i] <= 10⁹`

## Hints

### Hint 1

Feasibility is pure counting: a value occurring `c_n` times in `nums` and
`c_f` times in `banned` can only sit in the `n - c_f` slots that do not
ban it, so `c_n + c_f > n` means -1.

### Hint 2

Only the bad indices — where `nums[i]` equals `banned[i]` — matter; count
them per value into a map.

### Hint 3

One swap fixes at most two bad indices, and two bad indices holding the
same value cannot fix each other, giving the lower bounds ceil(B/2) and
the largest same-value cluster.

### Hint 4

Both bounds are reachable together — pair bad indices of different values
first, then repair each leftover member of the surviving cluster against
a donor slot — so the answer is max(ceil(B/2), largest cluster).
