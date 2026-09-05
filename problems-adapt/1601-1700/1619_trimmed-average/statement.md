# Trimmed Average

## Description

You are given an integer array `arr` whose length is a multiple of 20.
Throw away the smallest 5% of its values and the largest 5%, then report
the average of everything that survives.

Which values go is decided by rank in the sorted order, not by anything
about the original arrangement: line the elements up in ascending order,
discard the first `arr.length * 0.05` and the last `arr.length * 0.05` of
them, and average the middle that is left. Because the length is always a
multiple of 20, that 5% count is a whole number.

Answers within `10⁻⁵` of the true average are accepted.

### Example 1

```text
Input: arr = [18,42,7,93,55,26,74,11,60,35,88,20,49,3,67,29,81,14,52,40]
Output: 42.66667
Explanation: In sorted order the smallest element is 3 and the largest
is 93; dropping those two leaves 18 elements whose average is
42.66667.
```

### Example 2

```text
Input: arr = [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,0,
100,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]
Output: 25.0
Explanation: The lone 0 is the smallest element and the lone 100 the
largest, so both are trimmed away and every one of the 38 survivors
equals 25.
```

### Example 3

```text
Input: arr = [61,34,90,12,78,45,23,87,56,8,71,39,94,17,50,28,83,5,66,41,
19,97,32,74,10,58,85,26,48,63,15,91,37,70,3,54,80,22,44,68]
Output: 49.58333
Explanation: With 40 elements, 5% is 2, so the two smallest and the two
largest values are removed and the remaining 36 average 49.58333.
```

### Constraints

- `20 <= arr.length <= 1000`
- `arr.length` is a multiple of `20`.
- `0 <= arr[i] <= 10⁵`

## Hints

### Hint 1

Put the array into sorted order first.

### Hint 2

Once sorted, the discards are exactly the first and last 5% of the
positions — average whatever sits between them.
