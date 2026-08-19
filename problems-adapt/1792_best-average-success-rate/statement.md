# Best Average Success Rate

## Description

The integer array `batches` describes a collection of trial batches:
`batches[i] = [passed_i, run_i]` says that batch `i` ran `run_i` trials, of
which `passed_i` succeeded.

An integer `extraTrials` gives the number of further trials you may schedule,
each of them guaranteed to succeed. Assigning one to a batch raises that
batch's success count and its trial count by one each.

A batch's rate is its successes divided by its trials, and the score of the
whole collection is the mean of the batch rates. Hand out the extra trials so
that the score is as large as possible, and return that score. Values within
`10⁻⁵` of the exact one are accepted.

### Example 1

```text
Input: batches = [[2,3],[4,7],[3,3]], extraTrials = 3
Output: 0.80833
Explanation: Give two trials to the first batch and one to the second. The
rates become 4/5, 5/8 and 3/3, and their mean is
(0.8 + 0.625 + 1) / 3 = 0.80833. The third batch is already perfect, so no
trial can help it.
```

### Example 2

```text
Input: batches = [[1,4],[5,8],[2,6],[7,7]], extraTrials = 5
Output: 0.67411
Explanation: Three trials land in the first batch and two in the third:
4/7 + 5/8 + 4/8 + 7/7 = 0.67411 after dividing by four. Splitting beats
dumping all five into the weakest batch, because the lift per trial fades as
a batch absorbs more of them.
```

### Example 3

```text
Input: batches = [[3,7]], extraTrials = 4
Output: 0.63636
Explanation: With one batch there is nowhere else to go: it ends at 7/11.
```

### Constraints

- `1 <= batches.length <= 10⁵`
- `batches[i].length == 2`
- `1 <= passed_i <= run_i <= 10⁵`
- `1 <= extraTrials <= 10⁵`

## Hints

### Hint 1

Write down what a single guaranteed success does to a batch's rate — from
`p / t` to `(p + 1) / (t + 1)` — and how that lift changes as a batch takes
more of them.

### Hint 2

Every batch enters the score with the same weight, so the next trial always
belongs to the batch whose current lift is largest.

### Hint 3

A max-heap keyed by lift answers "largest" in logarithmic time: pop the leader,
absorb the trial, recompute, push it back.
