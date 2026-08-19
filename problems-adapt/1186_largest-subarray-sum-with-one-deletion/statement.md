# Largest Subarray Sum with One Deletion

## Description

You are given an integer array `arr`. Choose a contiguous, non-empty stretch of
it, then either keep it whole or cross out at most one of its elements. The
score of the choice is the sum of what remains, and the stretch must still hold
at least one element after any crossing out.

Return the largest score you can achieve.

### Example 1

```text
Input: arr = [2,-6,3,4]
Output: 9
Explanation: Take the whole stretch and cross out -6, leaving 2 + 3 + 4 = 9.
```

### Example 2

```text
Input: arr = [-2,7,-1,3]
Output: 10
Explanation: Crossing out -2 would score 9, but the stretch [7,3] needs no
crossing out and scores 10.
```

### Example 3

```text
Input: arr = [-4,-2,-7]
Output: -2
Explanation: Every element is negative, so the best choice is the single
least-bad one. A one-element stretch cannot lose its only element, so a
score of 0 is out of reach.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `-10⁴ <= arr[i] <= 10⁴`

## Hints

### Hint 1

Start with the tighter rule that nothing may be crossed out: the best stretch
ending at each position is the classic running scan that either extends the
previous stretch or restarts.

### Hint 2

Run a second quantity alongside it: the best score of a stretch ending at the
current position that has crossed out exactly one element already.

### Hint 3

At each new position that second quantity has only two origins — carry the
earlier crossing-out forward through the new element, or cross out the new
element itself and inherit the untouched stretch that ended just before it.
