# The kth Absent Positive

## Description

An array `arr` of positive integers is given in strictly increasing
order, together with an integer `k`. List every positive integer that
fails to appear in `arr`, from smallest upward, and report the one in
position `k` of that list.

### Example 1

```text
Input: arr = [3,7,8,10], k = 4
Output: 5
Explanation: The positives absent from the array run
[1,2,4,5,6,9,11,...]; the fourth of them is 5.
```

### Example 2

```text
Input: arr = [1,4,5,6], k = 3
Output: 7
Explanation: Here the absent positives are [2,3,7,8,...], so the
third one is 7.
```

### Constraints

- `1 <= arr.length <= 1000`
- `1 <= arr[i] <= 1000`
- `1 <= k <= 1000`
- `arr[i] < arr[j]` for `1 <= i < j <= arr.length`

### Follow up

Can you land the answer without walking the whole array — in less
than `O(n)` time?

## Hints

### Hint 1

Sweep the array from the left while keeping a running tally of how
many positives have failed to show up so far.
