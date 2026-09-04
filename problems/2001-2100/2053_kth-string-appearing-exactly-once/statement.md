# Kth String Appearing Exactly Once

## Description

Call a string singular when it occurs exactly one time in the array.

Given an array of strings `arr` and an integer `k`, find the `k`th
singular string, scanning the array in its original order. If the array
holds fewer than `k` singular strings, return the empty string `""`.

### Example 1

```text
Input: arr = ["tin","tin","zinc","lead","zinc","gold"], k = 2
Output: "gold"
Explanation:
The strings occurring exactly once are "lead" and "gold".
"lead" is the 1st singular string and "gold" is the 2nd.
Since k == 2, "gold" is returned.
```

### Example 2

```text
Input: arr = ["gem","opal","jade"], k = 1
Output: "gem"
Explanation:
Every string in the array is singular, so the 1st one, "gem", is
returned.
```

### Example 3

```text
Input: arr = ["mist","fog"], k = 3
Output: ""
Explanation:
Both strings are singular, but there are only 2 of them. With fewer than
3 singular strings available, the answer is "".
```

### Constraints

- `1 <= k <= arr.length <= 1000`
- `1 <= arr[i].length <= 5`
- `arr[i]` consists of lowercase English letters.

## Hints

### Hint 1

Tally how many times each string occurs with a hash map in one pass.

### Hint 2

Walk the array a second time in order, counting down `k` at every string
whose tally is one; wherever the counter hits zero is your answer.
