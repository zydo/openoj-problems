# Rising Subsequences Scored by Their GCD

## Description

An array `nums` of `n` integers is given.

For each positive integer `g`, its score is `g` multiplied by how many
strictly increasing subsequences of `nums` have a greatest common divisor
of exactly `g`.

Add up the score of every positive integer `g` and return the total
modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [2,3,6]
Output: 18
Explanation: The strictly increasing subsequences of [2,3,6] carry these
GCDs: [2] -> 2, [3] -> 3, [6] -> 6, [2,3] -> 1, [2,6] -> 2, [3,6] -> 3
and [2,3,6] -> 1. Their contributions are 2, 3, 6, 1, 2, 3 and 1, which
add up to 18.
```

### Example 2

```text
Input: nums = [8,12]
Output: 24
Explanation: Only [8], [12] and [8,12] are strictly increasing, with GCDs
8, 12 and 4. The total is 8 + 12 + 4 = 24.
```

### Example 3

```text
Input: nums = [1,1,1]
Output: 3
Explanation: Equal elements never form a strictly increasing pair, so the
only subsequences are the three singletons. Each has GCD 1 and scores 1,
for a total of 3.
```

### Constraints

- `1 <= n == nums.length <= 10⁴`
- `1 <= nums[i] <= 7 * 10⁴`

## Hints

### Hint 1

Fix a candidate value `g` and throw away every element not divisible by
it, then divide the survivors by `g`. Strict increase survives the
scaling, and the increasing subsequences of the scaled list are exactly
the subsequences of `nums` made entirely of multiples of `g`.

### Hint 2

To count increasing subsequences of the scaled list, map its values to
ranks and sweep left to right: element `i` is worth `1 +` everything
already banked for strictly smaller ranks. That running total is a
prefix-sum question, which a Fenwick tree answers and extends
efficiently.

### Hint 3

The count from Hint 2 is too generous: elements that all divide by `g`
only promise a GCD that is a multiple of `g`, so it measures
"divisible by `g`", not "exactly `g`".

### Hint 4

Process candidates from `max(nums)` down to `1`, keeping the final
exact count of every larger multiple: `F[g] = cnt[g] - F[2g] - F[3g] -
...`, computed modulo `10⁹ + 7`. Walking downward means each `F[kg]` is
settled before `g` needs it.

### Hint 5

The answer is the weighted sum `sum of g * F[g]` over all `g`.
