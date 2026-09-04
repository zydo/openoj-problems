# Majority Element

## Description

A value in `nums` is the _majority element_ when it occupies strictly more
than half of the array's positions — that is, it turns up more than `n / 2`
times, with any fractional part discarded.

Given `nums`, return its majority element. You are told one exists, so no
value needs checking for the distinction; nothing else about the array's
ordering is promised.

### Example 1

```text
Input: nums = [5,8,8,2,8,6,8]
Output: 8
Explanation: 8 occupies four of the seven positions, and four is more than
half of seven. It wins even though it never appears in the first position.
```

### Example 2

```text
Input: nums = [-4,-9,-4,-4]
Output: -4
Explanation: Three of the four positions hold -4. Negative values behave no
differently.
```

### Example 3

```text
Input: nums = [12]
Output: 12
Explanation: One position, one value, and one is more than half of one.
```

### Constraints

- `nums` holds `n` entries with `1 <= n <= 5 * 10⁴`
- every entry lies in `[-10⁹, 10⁹]`
- the tests always contain a majority element

### Follow-up

Counting occurrences in a table solves this in linear time but linear space
too. Can both bounds be linear time and constant space?

## Hints

### Hint 1

More than half the positions hold the answer, which is a stronger fact than
"it is the most common value": every other value combined fills fewer
positions.

### Hint 2

Picture cancelling: match each occurrence of the answer against one occurrence
of anything else, pair by pair. Some occurrence of the answer must be left
unpaired, no matter how the pairs are chosen.

### Hint 3

A running tally can do the pairing as you sweep — raise it on a repeat of the
current front-runner, lower it on anything else, and install a new
front-runner whenever the tally empties.
