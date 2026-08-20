# Sum of Subset Scores

## Description

You are given an integer array `nums`.

The score of a non-empty subset is the square of its largest value,
multiplied by its smallest value.

Add up the scores of all non-empty subsets of `nums`. Subsets are told apart
by position, so equal values sitting at different positions give different
subsets. Because the total grows enormous, report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [3,1,2]
Output: 76
Explanation:
- {3} scores 3² · 3 = 27 and {1} scores 1, {2} scores 2² · 2 = 8.
- {3,1} scores 9 · 1 = 9, {3,2} scores 9 · 2 = 18, {1,2} scores 4 · 1 = 4.
- {3,1,2} scores 9 · 1 = 9.
The total is 27 + 1 + 8 + 9 + 18 + 4 + 9 = 76.
```

### Example 2

```text
Input: nums = [5,5]
Output: 375
Explanation: Each single 5 scores 25 · 5 = 125, and the pair also scores
125, so the total is 3 · 125 = 375.
```

### Example 3

```text
Input: nums = [2,6,4]
Output: 608
Explanation: The singletons contribute 8 + 216 + 64; the pairs contribute
72 + 32 + 144; the full set contributes 36 · 2 = 72. These sum to 608.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Fix the largest value `x` of a subset. Once the array is sorted, every
subset with largest `x` chooses the rest of its members from the values
before `x` — and only the smallest chosen value matters to the score.

### Hint 2

With largest `x` and smallest `v`, the values lying strictly between them
may join or not, each choice giving the same score. So the score `x² · v`
is counted once per variant — can the whole bookkeeping over all pairs
`(x, v)` collapse into a single running number?

### Hint 3

Sweep the sorted values. Each combination accumulated so far survives twice
— with or without the new value as padding — and the new value also begins
life as a smallest value of its own. That is one doubling and one addition
per step.
