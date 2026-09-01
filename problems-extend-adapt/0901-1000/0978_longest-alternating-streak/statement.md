# Longest Alternating Streak

## Description

Take a contiguous stretch of `arr` and look only at the comparisons between
neighbouring elements inside it. The stretch is alternating when those
comparisons strictly alternate in direction: a step up to a larger element
must be followed by a step down to a smaller one, and a step down must be
followed by a step up. A step between two equal values points neither way,
so equal neighbours can never both sit inside an alternating stretch.

Return the length of the longest alternating stretch in `arr`. A single
element is an alternating stretch of length 1.

### Example 1

```text
Input: arr = [9,9,1,4,2,8,3]
Output: 6
Explanation: The whole tail [9,1,4,2,8,3] steps down, up, down, up, down.
```

### Example 2

```text
Input: arr = [3,7,11,15,19]
Output: 2
Explanation: Every step points the same way, so no stretch outgrows a
single pair.
```

### Example 3

```text
Input: arr = [42]
Output: 1
```

### Constraints

- `1 <= arr.length <= 4 * 10⁴`
- `0 <= arr[i] <= 10⁹`
