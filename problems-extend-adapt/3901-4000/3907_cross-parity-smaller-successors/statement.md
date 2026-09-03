# Cross-Parity Smaller Successors

## Description

You are given an integer array `nums` of length `n`.

The score of an index `i` is the number of indices `j` that satisfy all of
these:

- `i < j < n` — `j` lies strictly to the right of `i`;
- `nums[j] < nums[i]` — the later value is strictly smaller;
- `nums[i]` and `nums[j]` differ in parity — one is even, the other odd.

Return an integer array `answer` of length `n` where `answer[i]` is the
score of index `i`.

### Example 1

```text
Input: nums = [6,1,5,2]
Output: [2,0,1,0]
Explanation:
    Index 0 (6): to its right, 1 and 5 are smaller odd values, so the score
    is 2.
    Index 1 (1): everything to its right is larger, so the score is 0.
    Index 2 (5): only 2 to its right is smaller with opposite parity, so the
    score is 1.
    Index 3 has nothing to its right, so its score is 0.
    The answer is [2,0,1,0].
```

### Example 2

```text
Input: nums = [9,3,8,8,4]
Output: [3,0,0,0,0]
Explanation: Index 0 (9) counts the smaller even values 8, 8, and 4 to its
right, so its score is 3. Index 1 (3) has only larger values to its right.
The two 8s are even and only even values follow them, so neither scores
anything, and 4 has nothing after it. The answer is [3,0,0,0,0].
```

### Example 3

```text
Input: nums = [100]
Output: [0]
Explanation: With a single element there is nothing to its right, so the
answer is [0].
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Sweep from the right so that, at every index, the elements already seen are
exactly the ones that lie to its right.

### Hint 2

Keep the seen values in a structure that can answer "how many stored values
are below `x`" quickly — separate the counts by parity, since only the
opposite parity matters.

### Hint 3

Rank-compress the values first so the structure works over a small range of
ranks instead of the full value domain.
