# Longest Uniform Window

## Description

You are given a 0-indexed integer array `nums` and an integer `k`.

You may erase up to `k` elements from `nums`, at any positions you like;
the survivors close ranks and keep their relative order. Call a stretch of
the surviving array uniform when every element in it is the same value —
the empty stretch is uniform as well.

Return the length of the longest uniform stretch you can end up with.

### Example 1

```text
Input: nums = [4,4,2,4,7,7], k = 1
Output: 3
Explanation: Erase the 2 at index 2. The survivors are [4,4,4,7,7], and
the three leading 4s form a uniform stretch of length 3. A single deletion
cannot do better.
```

### Example 2

```text
Input: nums = [5,5,5,1,2,5], k = 2
Output: 4
Explanation: Erase the 1 and the 2 in the middle. All four 5s are now
neighbors, so the entire survivor is one uniform stretch of length 4.
```

### Example 3

```text
Input: nums = [1,2,3,4], k = 10
Output: 1
Explanation: Every value occurs once, so deletions can never place two
equal elements next to each other. The best uniform stretch is any single
element.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- each element of `nums` is between `1` and `nums.length`
- `0 <= k <= nums.length`

## Hints

### Hint 1

The survivors of one uniform stretch are all copies of a single value, and
every element that sat strictly between the outermost kept copies had to
be erased.

### Hint 2

Write down, per distinct value, the sorted list of positions where it
occurs.

### Hint 3

For one value with occurrence list P, keeping the consecutive run
P[i..j] costs `(P[j] - P[i]) - (j - i)` erasures: the span it covers minus
the copies it already supplies.

### Hint 4

Slide a window over each occurrence list — extend the right end, shrink
the left end while the cost exceeds k — and take the largest `j - i + 1`
seen across all lists.
