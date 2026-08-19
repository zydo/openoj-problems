# Distances to Equal Values

## Description

You are given an integer array `nums`.

For each position `i`, look at every other position `j` that holds the same
value as `nums[i]`, and add up the gaps `|i - j|` between them.

Return an array `answer` of the same length where `answer[i]` is that total.
A position whose value occurs nowhere else gets 0.

### Example 1

```text
Input: nums = [4,9,4,8,4]
Output: [6,0,4,0,6]
Explanation: The value 4 occupies positions 0, 2 and 4.
- From position 0 the gaps are 2 and 4, totalling 6.
- From position 2 the gaps are 2 and 2, totalling 4.
- From position 4 the gaps are 4 and 2, totalling 6.
The 9 and the 8 appear once each, so their positions total 0.
```

### Example 2

```text
Input: nums = [6,1,9]
Output: [0,0,0]
Explanation: All three values are distinct, so every position totals 0.
```

### Example 3

```text
Input: nums = [3,3,8,3,8]
Output: [4,3,2,5,2]
Explanation: The 3s sit at positions 0, 1 and 3; position 0 pays 1 + 3 = 4,
position 1 pays 1 + 2 = 3, position 3 pays 3 + 2 = 5. The two 8s, at
positions 2 and 4, pay 2 each.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A position only ever interacts with positions carrying an equal value, so
nothing needs to be compared across different values. What does that suggest
about the first pass?

### Hint 2

Within one value's list of positions — which arrives already increasing —
split the total for position `i` into the part coming from earlier positions
and the part from later ones.

### Hint 3

A running total of the positions seen so far lets you replace either side's
sum of gaps with a couple of subtractions and multiplications.
