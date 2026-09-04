# One Pair of Touching Ones

## Description

Write the non-negative integer `n` out in binary and inspect the resulting
bit string.

Call a `1` bit _touching_ when the bit immediately beside it is also a `1`;
every overlapping neighbourhood counts separately, so a run of three ones
holds two touching pairs even though it is a single run.

Return `true` when the binary form of `n` contains exactly one such
touching pair, and `false` in every other case — including when there are
no ones at all, when the ones are all isolated, and when a longer run
produces several pairs.

### Example 1

```text
Input: n = 24
Output: true
Explanation:
    In binary, 24 is 11000.
    The two leading ones form one touching pair, and nothing else in the
    string does, so the answer is true.
```

### Example 2

```text
Input: n = 21
Output: false
Explanation:
    In binary, 21 is 10101.
    Every 1 is surrounded by zeros, so no bit touches another and the
    answer is false.
```

### Example 3

```text
Input: n = 7
Output: false
Explanation:
    In binary, 7 is 111.
    The three ones create two overlapping touching pairs, which is more
    than the allowed single pair, so the answer is false.
```

### Constraints

- `0 <= n <= 10^5`

### Hint 1

Walk the bits once from the least significant end, remembering the
previous bit; each time both the previous and the current bit are one you
have found a touching pair, and a second sighting settles the answer as
false.
