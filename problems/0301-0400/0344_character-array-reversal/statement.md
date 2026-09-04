# Character Array Reversal

## Description

You are given an array `s` whose items are individual printable ASCII
characters. Reverse the order of the elements by changing the supplied
array in place, using only `O(1)` extra memory.

The original in-place version of this task returns no value. In this judge,
return the same array after you have reversed it so its final contents can
be checked.

### Example 1

```text
Input: s = ["m","a","p"]
Output: ["p","a","m"]
```

### Example 2

```text
Input: s = ["X","7","?"]
Output: ["?","7","X"]
```

### Example 3

```text
Input: s = ["c","o","d","e"]
Output: ["e","d","o","c"]
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is a printable ASCII character.

## Hints

### Hint 1

Start one pointer at each end of the array. Exchange their elements, then
move both pointers inward until they meet.
