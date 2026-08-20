# Largest Run Sum After Each Removal

## Description

You are given an array `nums` of `n` positive integers and a list
`removeQueries` of `n` distinct indices. The indices are taken out one at a
time, in order: at step `i` the element `nums[removeQueries[i]]` is removed
from the array.

After a removal, the elements still present form one or more contiguous runs —
maximal blocks of unremoved neighbors. A run's sum is the total of its
elements.

Return the length-`n` array `answer` in which `answer[i]` is the largest run
sum remaining after step `i`. Once every element is gone the value is `0`.

### Example 1

```text
Input: nums = [4,1,7,2,9], removeQueries = [2,4,1,0,3]
Output: [11,5,4,2,0]
Explanation: Writing . for a removed slot, the array evolves like this:
Step 1 removes index 2: [4,1,.,2,9] — runs [4,1] and [2,9], largest sum 11.
Step 2 removes index 4: [4,1,.,2,.] — runs [4,1] and [2], largest sum 5.
Step 3 removes index 1: [4,.,.,2,.] — runs [4] and [2], largest sum 4.
Step 4 removes index 0: [.,.,.,2,.] — only [2], sum 2.
Step 5 removes index 3: [.,.,.,.,.] — nothing left, sum 0.
```

### Example 2

```text
Input: nums = [6,6,6,6], removeQueries = [1,2,0,3]
Output: [12,6,6,0]
Explanation: Removing index 1 splits the array into [6] and [6,6], so the
largest sum is 12. Removing index 2 next leaves two isolated sixes, and the
largest sum stays 6 for two steps in a row before the array empties.
```

### Example 3

```text
Input: nums = [8,3], removeQueries = [1,0]
Output: [8,0]
Explanation: After index 1 goes, only [8] remains. After index 0 goes, nothing
does, so the last answer is 0.
```

### Constraints

- `n == nums.length == removeQueries.length`
- `1 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `0 <= removeQueries[i] < n`
- the indices in `removeQueries` are pairwise distinct.

## Hints

### Hint 1

Removals split runs, and splitting is hard to track. What does the process look
like played backwards?

### Hint 2

Run time in reverse and each removal becomes a re-activation: blocks can only
grow and fuse. Which structure maintains fused blocks and their totals cheaply?

### Hint 3

Because reversed time only ever merges blocks, the largest block sum never
decreases along that timeline — one running maximum suffices, with nothing
stale to discard.
