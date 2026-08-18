# Split Into K Equal-Sum Groups

## Description

The entries of `nums` are to be dealt into exactly `k` groups. Every entry goes
into one group, no group may be left empty, and all `k` groups must end up with
the same sum.

Report whether such a deal exists: `true` when it does, `false` when it does
not.

### Example 1

```text
Input: nums = [7,3,6,2,5,4,3], k = 3
Output: true
Explanation: The entries total 30, so each group has to reach 10, and three of
them do: (7,3), (6,4), (5,3,2).
```

### Example 2

```text
Input: nums = [5,5,4,4,3,3], k = 4
Output: false
Explanation: 24 over four groups leaves a share of 6 each, but a 5 needs a 1
beside it to reach 6 and no 1 is present.
```

### Example 3

```text
Input: nums = [8,2,6], k = 1
Output: true
Explanation: A single group has nothing to be balanced against, so it simply
takes everything.
```

### Constraints

- `1 <= k <= nums.length <= 16`
- Each entry satisfies `1 <= nums[i] <= 10^4`
- No value repeats more than four times in `nums`

## Hints

### Hint 1

The share each group must carry is not a choice: it is the total divided by
`k`. Two cheap rejections follow — a total that leaves a remainder, and an
entry larger than the share.

### Hint 2

Build the groups one after another rather than all at once. Keep a set of the
entries already placed and the running sum of the group under construction;
when that sum reaches the share, seal the group and begin the next one from
zero.

### Hint 3

With at most 16 entries the placed set fits in a 16-bit mask, and the running
sum is determined by the mask (the sealed groups are all exactly full), so the
number of distinct states is small enough to cache. Trying the large entries
first makes hopeless branches die sooner.
