# Longest Deletion Sequence

## Description

You are given a string `s` of lowercase English letters. One deletion step
takes the current string and either

- deletes all of it, or
- deletes a leading block of `i` letters — allowed only when that block is
  immediately repeated, meaning the first `i` letters equal the `i` letters
  that follow them — for any `i` with `1 <= i <= (current length) / 2`.

For instance, from `ababc` you may delete the leading `ab`, because the two
letters after it are also `ab`; the string becomes `abc`.

Return the largest number of steps in which the whole of `s` can be deleted.

### Example 1

```text
Input: s = "xyzxyzxy"
Output: 2
Explanation:
- Delete the leading "xyz" — the next three letters are "xyz" too. Now
  s = "xy".
- "xy" has no doubled leading block, so delete all of it.
Two steps; no longer sequence exists.
```

### Example 2

```text
Input: s = "aabaabab"
Output: 4
Explanation:
- Delete "aab" (repeated next). Now s = "aabab".
- Delete "a" (repeated next). Now s = "abab".
- Delete "ab" (repeated next). Now s = "ab".
- Delete all of it.
Four steps, and no sequence is longer.
```

### Example 3

```text
Input: s = "cccccc"
Output: 6
Explanation:
Delete one letter at a time: every leading "c" is followed by another.
```

### Constraints

- `1 <= s.length <= 4000`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Solve each suffix of the string: the best step count for `s[i:]` depends only
on suffixes further right, so a right-to-left sweep works.

### Hint 2

Deleting everything in one step is always available, which floors every
suffix at 1. A longer first block is legal exactly when the block repeats
immediately — and then the remaining suffix carries over.

### Hint 3

Testing every candidate block length at every position by direct comparison
is too slow. How can two stretches of the same string be compared in constant
time?
